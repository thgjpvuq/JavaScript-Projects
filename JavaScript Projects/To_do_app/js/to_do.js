// Gets the task from input
function get_to_dos()    {
    var to_dos = new Array;
    // Pull the task saved in the browser's memory
    var to_dos_str = localStorage.getItem('to_do');
    if (to_dos_str !== null)    {
        to_dos = JSON.parse(to_dos_str);
    }
    return to_dos;
}
// Adds the input task to the get_to_dos function array
function add()    {
    var task = document.getElementById("task").value;

    var to_dos = get_to_dos();
    to_dos.push(task);
    localStorage.setItem('to_do', JSON.stringify(to_dos));
    document.getElementById("task").value = "";
    show();

    return false;
}

function show()    {
    var to_dos = get_to_dos();
    var html = '<ul>';
    for (var i = 0; i < to_dos.length; i++)    {
        html += '<li>' + to_dos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul';
    // Display the task as a list
    document.getElementById('to_dos').innerHTML = html;
}
// Display the input task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
show();

function remove_to_do()       {
    var id = this.getAttribute('id');
    var to_dos = get_to_dos();
    to_dos.splice(id, 1);
    localStorage.setItem('to_do', JSON.stringify(to_dos));
    show();

    return false;
}

var buttons = document.getElementsByClassName('remove');
for (var i = 0; i < buttons.length; i++)    {
    buttons[i].addEventListener('click', remove_to_do);
};