// function color_function()   {
//     var color_output;
//     var colors = document.getElementById("color_input").value;
//     var color_string = ' is a great color!';
//     switch(colors)  {
//         case 'red':
//             color_output = 'red' + color_string;
//         break;
//         case 'yellow':
//             color_output = 'yellow' + color_string;
//         break;
//         case 'green':
//             color_output = 'green' + color_string;
//         break;
//         case 'blue':
//             color_output = 'blue' + color_string;
//         break;
//         case 'pink':
//             color_output = 'pink' + color_string;
//         break;
//         case 'purple':
//             color_output = 'purple' + color_string;
//         break;
//         default:
//         color_output = 'please enter a color exactly as written on the above list.';
//     }
//     document.getElementById("output").innerHTML = color_output;
// }

// function a()    {
//     var A = document.getElementsByClassName("click");
//     A[0].innerHTML = "the text has changed!";
// }

var a = document.getElementById("canvas");
var atx= a.getContext("2d");
atx.moveTo(0,0);
atx.lineTo(500, 250);
atx.stroke();