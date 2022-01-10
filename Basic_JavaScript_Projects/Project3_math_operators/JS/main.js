function addition()    { // defines a function //
    var addition = 2 + 2; // defines a variable //
    document.getElementById("math").innerHTML = addition; // returns assigned variable
}

function subtraction() { // defines a function //
    var subtraction = 5 - 2; // defines a variable //
    document.getElementById("math").innerHTML = subtraction; // returns assigned variable
}

function multiplication()   { // defines a function //
    var multiply = 6 * 8; // defines a variable //
    document.getElementById("math").innerHTML = multiply; // returns assigned variable
}

function division() { // defines a function //
    var division = 49 / 6; // defines a variable //
    document.getElementById("math").innerHTML = division; // returns assigned variable
}

function adsubmultdiv() { // defines a function //
    var asmd = (1+5) * 10 / 2 - 5; // defines a variable //
    document.getElementById("math").innerHTML = asmd; // returns assigned variable
}

function modulus() { // defines a function //
    var mod = 25 % 9; // defines a variable //
    document.getElementById("math").innerHTML = mod; // returns assigned variable
}

function negation() { // defines a function //
    var x = 12356; // defines a variable //
    document.getElementById("math").innerHTML = -x; // returns assigned variable
}

function y()    { // defines a function //
    var y = 10; // defines a variable //
    y++; //increases y by increment of 1 //
    document.getElementById("math").innerHTML = y; // returns assigned variable
}

function z()    { // defines a function //
    var z = 12.56; // defines a variable //
    z--; // decreases z by decrement of 1 //
    document.getElementById("math").innerHTML = z; // returns assigned variable
}

window.alert(Math.random()); // displays a window alert showing a random number between 0 and 1 after loading a page //
window.alert(Math.random() * 100); // displays a second window alert showing a random number between 0 and 100 after loading a page //

function E()   { // defines a function //
    Math.E; // retrieves euler's number with the use of the Math Object //
    document.getElementById("math").innerHTML = Math.E; // returns assigned variable
}