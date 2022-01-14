// function Call_Loop()    {
//     var counter = "";
//     var x = 1;
//     while (x < 20)  {
//         counter += "<br>" + x;
//         x++;
//     }
//     document.getElementById("Loop").innerHTML = counter;
// }

// a = 'string';
// b = a.length;
// document.write(b);

// function constant_function()    {
//     const fruit = {name:'banana', color:'yellow'};
//     fruit.name = 'apple';
//     fruit.size = 'large';
//     document.getElementById("constant").innerHTML = "A(n) " + fruit.name + " is a " + fruit.size + " " + fruit.color + " fruit.";
// }

// var X = 100;
// document.write(X);
// {
//     let X = 50;
//     document.write(X);
// }
// document.write(X);

// var X = 100;
// document.write(X);
// {
//     var X = 50;
//     document.write(X);
// }
// document.write(X);

// var X = 100;
// document.write(X);
// function A()    {
//     var X = 50;
//     return X;
// }
// document.write(A());

let car = {
    make: 'Dodge ',
    model: 'Viper ',
    year: '2021 ',
    color: 'red ',
    description : function car_function() {
        return 'The car is a ' + this.year + this.color + this.make + this.model;
        }
};
document.getElementById("car_object").innerHTML = car.description(); // this code will not display if not deferred //