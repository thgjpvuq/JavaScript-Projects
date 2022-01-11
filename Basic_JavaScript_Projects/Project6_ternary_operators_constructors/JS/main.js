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

function vehicle(Make, Model, Year, Color)  {
    this.vehicle_Make = Make;
    this.vehicle_Model = Model;
    this.vehicle_Year = Year;
    this.vehicle_Color = Color;
}
var Jack = new vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new vehicle("Ford", "Pinto", 1971, "Mustard");
var Jacob = new vehicle("Pontiac", "Grand Am", 2001, "Silver");
function myFunction()   {
    document.getElementById("New_and_This").innerHTML = "Jacob drives a " + 
    Jacob.vehicle_Color + "-colored " + Jacob.vehicle_Model + " manufactured in " + 
    Jacob.vehicle_Year;
}