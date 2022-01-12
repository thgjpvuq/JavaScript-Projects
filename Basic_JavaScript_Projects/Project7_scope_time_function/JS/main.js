var X = 25; 
function xyfunction()    {  // setting a global and local variable then adding them together //
    var Y = 124;
    document.write(X + Y);
}

function xfunction()    {   // contains an error, Y is not defined globally //
    console.log(X + Y);
}
xyfunction();
xfunction();

function get_Date() {
    if (new Date().getHours() < 18)  {  // retrieves the number of hours passed in the day. If it is before 6 PM, a string will be output. //
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}

function ifgreater()    {
    if (5 > 3)  {   // a simple mathematical operation with an if statement //
        document.write("5 > 3");
    }
}

function Age_Function() {
    Age = document.getElementById("Age").value;
    if (Age >= 18)  {
        Vote = "Your are eligible to vote!" // if age is 18 or above, the first string is returned //
    }
    else    {   // else the second string is returned //
        Vote = "You are not old enough to vote!"
    }
    document.getElementById("How_old").innerHTML = Vote;
}

function Time_function()    {
    var Time = new Date().getHours();   // sets Time as a new instance of the Date object and retrieves the number of hours passed in the day //
    var Reply;  // assigns Reply to a variable for different strings //
    if (Time < 12 == Time > 0)  {   
        Reply = "It's morning";
    }
    else if (Time >= 12 == Time < 18)  {    // checks a second if statement for a true value. If true, 'it's afternoon' will be output //
        Reply = "It's afternoon";
    }
    else    {
        Reply = "It's night";
    }
    document.getElementById("Time").innerHTML = Reply;
}