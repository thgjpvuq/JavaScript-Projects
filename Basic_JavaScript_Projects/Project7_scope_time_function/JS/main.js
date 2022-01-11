// var X = 25;
// function xyfunction()    {
//     var Y = 124;
//     document.write(X + Y);
// }

// function xfunction()    {
//     console.log(X + Y);
// }
// xyfunction();
// xfunction();

function get_Date() {
    if (new Date().getHours() < 18)  {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
}