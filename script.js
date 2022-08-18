// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  
  var passwordInput = window.prompt("How many characters would you like your password to contain?");
  var characterLength = parseInt(passwordInput);

  if (isNaN(characterLength)) {
    window.alert("Please enter a NUMBER first!");
    return
  } else {
    console.log("valid number");
  }

  if (characterLength < 8) {
    window.alert("Password must be at least 8 characters and no more that 128 characters.");
    return
  } else if (characterLength > 128) {
    window.alert("Password must be at least 8 characters and no more that 128 characters.");
    return
  } else {
    console.log("valid character length");
  }

  var confirmSpecialCharacters = window.confirm("Click OK to confirm including special characters.");
  var confirmNumbers = window.confirm("Click OK to confirm including numeric characters.");
  var confirmLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
  var confirmUpperCase = window.confirm("Click OK to confirm including uppercase characters.");
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", ".", "<", ">", "/", "?"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var storedOptions = [];

  if (confirmSpecialCharacters) {
    storedOptions.push(specialCharacters);
  }

  if (confirmNumbers) {
    storedOptions.push(numbers);
  }

  if (confirmLowerCase) {
    storedOptions.push(lowerCase);
  }

  if (confirmUpperCase) {
    storedOptions.push(upperCase);
  }

  if (storedOptions.length === 0) {
    storedOptions.push(specialCharacters);
  }

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
