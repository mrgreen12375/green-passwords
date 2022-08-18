// Assignment Code
var generateBtn = document.querySelector("#generate");
// created generatePassword function in referance to var password.
function generatePassword() {
  // setup initial prompt to enter character length.
  var passwordInput = window.prompt("How many characters would you like your password to contain?");
  var characterLength = parseInt(passwordInput);
  // setup alert if character length isnt a number.
  if (isNaN(characterLength)) {
    window.alert("Please enter a NUMBER first!");
    return
  } else {
    console.log("valid number");
  }
  // setup alert if character length isnt between 8 and 128.
  if (characterLength < 8) {
    window.alert("Password must be at least 8 characters and no more that 128 characters.");
    return
  } else if (characterLength > 128) {
    window.alert("Password must be at least 8 characters and no more that 128 characters.");
    return
  } else {
    console.log("valid character length");
  }
  // setup confirm prompts for different characters. special, numeric, lowercase and uppercase. 
  var confirmSpecialCharacters = window.confirm("Click OK to confirm including special characters.");
  var confirmNumbers = window.confirm("Click OK to confirm including numeric characters.");
  var confirmLowerCase = window.confirm("Click OK to confirm including lowercase characters.");
  var confirmUpperCase = window.confirm("Click OK to confirm including uppercase characters.");
  // setup character strings to be comfirmed and randomized. 
  var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "]", "{", "}", ";", ":", "'", ".", "<", ">", "/", "?"];
  var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  // setup empty string to store chosen character options.
  var storedOptions = [];
  // setup where the random password will go.
  var randomPassword = "";
  // setup if statement to push chosen character into the storedOptions var. 
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
  // setup functions to use in the randomization for loop.
  function randomize(min, max) {
    if (!max) {
      max = min
      min = 0
    }
    var ran = Math.random()
    return Math.floor(min*(1- ran) + ran*max)
  }
  
  function randomizing(list) {
    return list[randomize(list.length)]
  }
  
  // setup for loop to randomize chosen characters.
  for (var i = 0; i < characterLength; i++) {
    var randomList = randomizing(storedOptions);
    var randomChar = randomizing(randomList);
    randomPassword += randomChar
  }

  console.log(storedOptions)

  console.log(randomPassword)

  return randomPassword
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
