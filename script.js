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

}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
