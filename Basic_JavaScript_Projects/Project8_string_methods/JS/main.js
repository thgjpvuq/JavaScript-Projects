function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section1 = sentence.slice(27,33);
    document.getElementById("slice").innerHTML = section1;
}

a = "this is a string";
b = a.toUpperCase();
document.write(b);

b = a.search("string");
document.write(b);

function string_Method()    {
    var X = 102;
    document.getElementById("toString").innerHTML = X.toString();
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("precision").innerHTML = X.toPrecision(10);
}

a = 5.56789;
b = a.toFixed();
document.write(b);

a = 'this is a string';
b = a.valueOf();
document.write(b);