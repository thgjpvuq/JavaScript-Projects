// function Ride_Function()    {
//     var Height, Can_ride;
//     Height = document.getElementById("Height").value;
//     Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
//     document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
// }

// function Vote_Function()    {
//     var Age, Vote;
//     Age = document.getElementById("Age").value;
//     Vote = (Age < 18) ? "You are not old enought to vote":"You can vote!";
//     document.getElementById("Vote").innerHTML = Vote;
// }

// function vehicle(Make, Model, Year, Color)  {
//     this.vehicle_Make = Make;
//     this.vehicle_Model = Model;
//     this.vehicle_Year = Year;
//     this.vehicle_Color = Color;
// }
// var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
// var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
// var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
// var Jacob = new vehicle("Pontiac", "Grand Am", 2001, "Silver");
// function myFunction()   {
//     document.getElementById("New_and_This").innerHTML = "Jacob drives a " + 
//     Jacob.vehicle_Color + "-colored " + Jacob.vehicle_Model + " manufactured in " + 
//     Jacob.vehicle_Year;
// }

// function concateFunction()    {
//     document.getElementById("concate").innerHTML = concatenate();
//     function concatenate()    {
//         var start_point = 'string \+ ';
//         function add() {start_point += 'string 2';}
//         add();
//         return start_point;
//     }
// }

function Prog_Function()    {
    var Lang, Program;
    Lang = document.getElementById("Lang").value;
    Program = (Lang < 1) ? "You are not a programmer":"You are a programmer";
    document.getElementById("Program").innerHTML = Program;
}

function cat(Furlength, Furcolor)  {
    this.cat_Furlength = Furlength;
    this.cat_Furcolor = Furcolor;
}
var Smokey = new cat("short", "gray");
var Snoopy = new cat("short", "black");
var Quincy = new cat("long", "black");
function myFunction()   {
    document.getElementById("New_and_This").innerHTML = "Snoopy is a " + 
    Snoopy.cat_Furcolor + "-colored " + "cat" + " with " + Snoopy.cat_Furlength + " fur";
}

function concateFunction()    {
    document.getElementById("concate").innerHTML = concatenate();
    function concatenate()    {
        var start_point = 'string \+ ';
        function add() {start_point += 'string 2';}
        add();
        return start_point;
    }
}