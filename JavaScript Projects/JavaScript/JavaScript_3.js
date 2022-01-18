function displayType(character) {
    var characterType = character.getAttribute("data-capital_city");
    alert(characterType + ' is the capital city of ' + character.innerHTML);
}