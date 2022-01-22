// creates an object to keep track of values
const Calculator = {
    Display_Value: '0',
    // To hold the first operand for expressions
    First_Operand: null,
    // To check whether the second operand has been input
    Wait_Second_Operand: false,
    // To hold the operator
    operator: null,
};

// Modifies values each time a button is pressed
function Input_Digit(digit) {
    const   { Display_Value, Wait_Second_Operand } = Calculator;
    if (Wait_Second_Operand === true)   {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        // replaces a value of '0', if not '0', then the value is added
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}
// For decimal points
function Input_Decimal(dot) {
    // To ensure accidental click of the decimal point doesn't
    // cause bugs
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot))    {
        // If Display_Value does not contain a decimal point, 
        // one will be added
        Calculator.Display_Value += dot;
    }
}

function Handle_Operator(Next_Operator) {
    const { First_Operand, Display_Value, operator } = Calculator;
    // when an operator is pressed, the number displayed is converted to a number the
    // its result is stored in Calculator.First_Operand if it doesn't all ready exist
    const Value_of_Input = parseFloat(Display_Value);
    // if an operator exists and if Wait_Second_Operand is true
    // then update the operator and exit the function
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null)  {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {
        // Check if an operator exists
        const Value_Now = First_Operand || 0;
        // if operator exists, property lookup performs 
        // in the Perform_Calculation object and the function
        // that matches the operator is execute
        let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
        // add a fixed amount of numbers after the decimal
        result = Number(result).toFixed(9)
        // removes trailing 0's
        result = (result * 1).toString()
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=': (First_Operand, Second_Operand) => Second_Operand,
}

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand = null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

function Update_Display()   {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
// To monitor button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button'))  {
        return;
    }

    if (target.classList.contains('operator'))  {
        Handle_Operator(target.value);
        Update_Display();
        return;
    }

    // ensures AC clears numbers from the Calculator
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }

    Input_Digit(target.value);
    Update_Display();
})