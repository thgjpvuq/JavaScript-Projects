// function Ride_Function()    {
//     var Height, Can_ride;
//     Height = document.getElementById("Height").value;
//     Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
//     document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
// }

function Vote_Function()    {
    var Age, Vote;
    Age = document.getElementById("Age").value;
    Vote = (Age < 18) ? "You are not old enought to vote":"You can vote!";
    document.getElementById("Vote").innerHTML = Vote;
}