text = '';
for (let i = 0; i < 10; i++)    { // i is incremented by 1 until 8
    if (i === 9) { break; }
    text += 'the number is ' + i + '<br>';
}
document.getElementById("break_loop").innerHTML = text;

text = '';
for (let i = 0; i < 10; i++)    { // i is incremented by 1 until 9 and skips 3
    if (i === 3) { continue; }
    text += 'the number is ' + i + '<br>';
}
document.getElementById("continue_loop").innerHTML = text;