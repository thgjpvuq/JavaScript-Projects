function Not_a_Number()  {
    document.getElementById("test").innerHTML = 0 / 0;
}
function string()  {
    document.getElementById("test").innerHTML = isNaN('string');
}
function number()  {
    document.getElementById("test").innerHTML = isNaN('923');
}