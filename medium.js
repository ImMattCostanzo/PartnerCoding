
function vowelChecker(x) { 
    return /[aeiouAEIOU]/.test(x); 
}

var input = "";
while (input.length != 1) {
    input = prompt("Enter a Character");
}
alert(vowelChecker(input));