function a()  {
    var A = 3E311;
    document.getElementById("inf").innerHTML = A;
}

function b()  {
    var B = -3E311;
    document.getElementById("inf").innerHTML = B;
}

document.write(10 > 2);
document.write(10 < 2);
console.log(2 + 8);
console.log( 15 > 35);
document.write(10 == 10);
document.write(10 == 123);

x = 25;
y = 25;
document.write(x === y);
y = '25';
document.write(x === y);
z = 50;
document.write(x === z);
document.write(y === z);

document.write(10 > 4 && 10 > 5);
document.write(10 > 12 && 10 > 5);
document.write(10 > 4 || 10 > 5);
document.write(2 > 4 || 1 > 5);

function not_true()  {
    document.getElementById("not").innerHTML = !(20 > 25);
}

function not_false()  {
    document.getElementById("not").innerHTML = !(20 > 15);
}

function cat()    {
    var y = 'cat';
    y += 25;
    document.getElementById("not").innerHTML = y;
}

document.write(typeof 'text');