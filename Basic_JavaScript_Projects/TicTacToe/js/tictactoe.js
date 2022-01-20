// To keep track of whose turn it is
let activePlayer = 'X';
// Stores an array of moves. Use this to determine win conditions
let selectedSquares = [];



// To play an X or O in a square
function placeXorO(squareNumber)    {
    // This ensures a square hasn't already been selected
    // The .some() method is used to check each element of selectedSquare array
    // To see if it contains the square number clicked on
    if (!selectedSquares.some(element => element.includes(squareNumber)))   {
        // retrieve the html element id that was clicked
        let select = document.getElementById(squareNumber);
        // To check who's turn it is
        if (activePlayer === 'X')   {
            // If activePlayer is equal to 'X', the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")';
            // Active play may only be 'X' or 'O'. If not 'X' then 'O'
        } else  {
            // If activePlayer is 'O', the o.png is placed in HTML
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // squareNumber and activePlayer are concatenated and added to the end of the array
        selectedSquares.push(squareNumber + activePlayer);
        // Calling a function to check if win conditions have been met
        checkWinConditions();
        // To change the active player
        if (activePlayer === 'X')   {
            //If activePlayer is 'X' change it to 'O'
            activePlayer = 'O';
        // If activePlayer is not 'X'
        } else  {
            // Change activePlayer to 'X'
            activePlayer = 'X';
        }

        //This function plays placement sound
        audio('./media/place.mp3');
        // This checks to see if it is the computer's turn
        if(activePlayer === 'O')    {
            // This will disable click for computer's choice
            disableClick();
            // This function waits 1 second before computer places image and enables click.
            setTimeout(function() { computersTurn(); }, 1000)
        }
        // Returning true is needed for computersTurn() to work
        return true;
    }


    // This function results in a random square being selected
    function computersTurn()    {
        // This boolean is needed for the while loop
        let success = false;
        // This will store a random number 0-8
        let pickASquare;
        // This condition allows the while loop to select another square if it is filled
        while(!success) {
            // A random number between 0 and 8 is selected
            pickASquare = String(Math.floor(Math.random() * 9));
            // If the random number evaluated returns true, the square hasn't been filled
            if (placeXorO(pickASquare)) {
                // This calls the function
                placeXorO(pickASquare);
                // This changes the boolean and ends the loop
                success = true;
            };
        }
    }
}



// This function parses the selectedSquares array to search for win conditions
// drawWinLine function is called to draw a line if condition is met
function checkWinConditions()   {
    // X 0, 1, 2 condition
    if          (arrayIncludes('0X', '1X', '2X'))    { drawWinLine(50, 100, 558, 100) }
    // X 3, 4, 5 condition
    else if     (arrayIncludes('3X', '4X', '5X'))    { drawWinLine(50, 304, 558, 304) }
    // X 6, 7, 8 condition
    else if     (arrayIncludes('6X', '7X', '8X'))    { drawWinLine(50, 508, 558, 508) }
    // X 0, 3, 6 condition
    else if     (arrayIncludes('0X', '3X', '6X'))    { drawWinLine(100, 50, 100, 558) }
    // X 1, 4, 7 condition
    else if     (arrayIncludes('1X', '4X', '7X'))    { drawWinLine(304, 50, 304, 558) }
    // X 2, 5, 8 condition
    else if     (arrayIncludes('2X', '5X', '8X'))    { drawWinLine(508, 50, 508, 558) }
    // X 6, 4, 2 condition
    else if     (arrayIncludes('6X', '4X', '2X'))    { drawWinLine(100, 508, 510, 90) }
    // X 0, 4, 8 condition
    else if     (arrayIncludes('0X', '4X', '8X'))    { drawWinLine(100, 100, 520, 520) }
    // O 0, 1, 2 condition
    else if     (arrayIncludes('0O', '1O', '2O'))    { drawWinLine(50, 100, 558, 100) }
    // O 3, 4, 5 condition
    else if     (arrayIncludes('3O', '4O', '5O'))    { drawWinLine(50, 304, 558, 304) }
    // O 6, 7, 8 condition
    else if     (arrayIncludes('6O', '7O', '8O'))    { drawWinLine(50, 508, 558, 508) }
    // O 0, 3, 6 condition
    else if     (arrayIncludes('0O', '3O', '6O'))    { drawWinLine(100, 50, 100, 558) }
    // O 1, 4, 7 condition
    else if     (arrayIncludes('1O', '4O', '7O'))    { drawWinLine(304, 50, 304, 558) }
    // O 2, 5, 8 condition
    else if     (arrayIncludes('2O', '5O', '8O'))    { drawWinLine(508, 50, 508, 558) }
    // O 6, 4, 2 condition
    else if     (arrayIncludes('6O', '4O', '2O'))    { drawWinLine(100, 508, 510, 90) }
    // O 0, 4, 8 condition
    else if     (arrayIncludes('0O', '4O', '8O'))    { drawWinLine(100, 100, 520, 520) }
    // This condition checks for a tie. If none of the above conditions register and 9
    // squares are selected the code executes
    else if     (selectedSquares.length >= 9)   {
        // This plays the tie game sound
        audio('./media/tie.mp3');
        // This sets a .3 second timer before resetGame is called
        setTimeout(function()   { resetGame(); }, 1000);
    }
    // This checks if an array includes 3 strings. It is used to check for each 
    // win condition
    function arrayIncludes(squareA, squareB, squareC)   {
        // These 3 variables will be used to check for 3 in a row
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        //If the 3 passed variables are all included in the array, true is returned
        // and the else if condition executes the drawWinLine function
        if (a === true && b === true && c === true)     { return true }
    }
}



// This function makes the body element temporarily unclickable
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(function()   {body.style.pointerEvents = 'auto';}, 1000);
}



// This takes a string of the path set earlier for placement sound ('./media/place.mp3')
function audio(audioURL)    {
    // Create a new audio object and pass the path as a parameter.
    let audio = new Audio(audioURL);
    audio.play();
}



// Draw a win line within the canvas
function drawWinLine(coordX1, coordY1, coordX2, coordY2)    {
    // This accesses the canvas element
    const canvas = document.getElementById('win-lines')
    // This gives access to methods and properties to use on the canvas
    const c = canvas.getContext('2d');
    // x1 indicates the location of the start of the line's x axis
    let x1 = coordX1,
        // y1 indicates the location of the start of the line's y axis
        y1 = coordY1,
        // x2 indicates the location of the end of the line's x axis
        x2 = coordX2,
        // y2 indicates the location of the end of the line's y axis
        y2 = coordY2,
        // x temporarily stores x axis data that is updated in the animation loop
        x = x1,
        // y temporarily stores y axis data that is updated in the animation loop
        y = y1;

    // This function interacts with the canvas
    function animateLineDrawing()   {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        // This method clears content from the last loop iteration
        c.clearRect(0, 0, 608, 608)
        // Starts a new path
        c.beginPath();
        // moves to the starting point of a line
        c.moveTo(x1, y1)
        // move to endpoint of a line
        c.moveTo(x, y)
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();
        // condition to check if endpoint has been reached
        if (x1 <= x2 && y1 <= y2)   {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        // necessary for the 6, 4, 2 condition
        if (x1 <= x2 && y1 >= y2)   {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }


    //calling the disable click function
    disableClick();
    // play win sounds
    audio('./media/winGame.mp3');
    // call the main animation loop
    animateLineDrawing();
    // wait 1 second, clear canvas, reset game, and allow clicking
    setTimeout(function()   { clear(); resetGame(); }, 1000);

    // This clears the canvas after a win line is drawn
    function clear()    {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
}



function resetGame()    {
    // This iterates through each square element
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ''
    }
    // to reset the array
    selectedSquares = [];
}