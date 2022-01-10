function my_Dictionary()    {   // creating a dicitonary //
    var Animal = {  //assigning a Key-Value Pair to the dictionary //
        Species: "Cat",
        Color: "Black",
        Age: 7
    };
    delete Animal.Age; // removing Age from the dictionary //
    document.getElementById("Dictionary").innerHTML = Animal.Age; // retrieving Age from Animal. Will return undefined //
}