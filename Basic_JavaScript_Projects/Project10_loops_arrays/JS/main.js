function Call_Loop()    {
    var counter = "";
    var x = 1;
    while (x < 20)  {
        counter += "<br>" + x;
        x++;
    }
    document.getElementById("Loop").innerHTML = counter;
}

a = 'string';
b = a.length;
document.write(b);