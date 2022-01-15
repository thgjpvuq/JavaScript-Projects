function color_function()   {
    var color_output;
    var colors = document.getElementById("color_input").value;
    var color_string = ' is a great color!';
    switch(colors)  {
        case 'red':
            color_output = 'red' + color_string;
        break;
        case 'yellow':
            color_output = 'yellow' + color_string;
        break;
        case 'green':
            color_output = 'green' + color_string;
        break;
        case 'blue':
            color_output = 'blue' + color_string;
        break;
        case 'pink':
            color_output = 'pink' + color_string;
        break;
        case 'purple':
            color_output = 'purple' + color_string;
        break;
        default:
        color_output = 'please enter a color exactly as written on the above list.';
    }
    document.getElementById("output").innerHTML = color_output;
}