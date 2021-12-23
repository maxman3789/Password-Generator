// Arrays for Characters. Lower, Upper, Number, Special
// https://stackoverflow.com/questions/28970925/basic-javascript-password-generator
// https://w3collective.com/random-password-generator-javascript/
// https://www.tutorialstonight.com/password-generator-in-javascript.php

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", "\"", "@", ":", ";", "<", ">", "?", "[", "]", "=", "^", "~", "`", "{", "}", "|"];
var chars = [];
var length = 0;



// Function that Generate's a password
function generatePassword(settings) {
  var result = "";

  var random = 0;
  
  if (settings) {
    chars = [];
    promptPassword();
  }

  for (var i = 0; i < length; i++) {
    random = Math.floor(Math.random() * chars.length);
    result = result.concat(chars[random]);
  }
  return result;
}

// Function to ask the User for Password input
function promptPassword() {
  var isValid = false;

  while (!isValid) {
    length = prompt("Select a password length between 8 to 128 characters:");
    if (length === null) {
      return;
    }
    if (length >= 8 && length <= 128) {
      length = Math.floor(length);
      isValid = true;
    }
    else {
      alert("Invalid input, try again!");
    }
  }

  var types = [false, false, false, false];

  types[0] = confirm("Include Lower Case letters?"); 
  types[1] = confirm("Include Upper Case letters?");
  types[2] = confirm("Include Numbers?");
  types[3] = confirm("Include Special characters?");
  
  if (!(types[0] || types[1] || types[2] || types[3])) {
    alert("No other options were selected. Password will have Lower Case characters.");
    chars = chars.concat(lower);
  }
  else {
    if (types[0]) {
      chars = chars.concat(lower);
    }
    if (types[1]) {
      chars = chars.concat(upper);
    }
    if (types[2]) {
      chars = chars.concat(num);
    }
    if (types[3]) {
      chars = chars.concat(special);
    }
  }
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var settings = true;
  if (length !== 0) {
    settings = confirm("Do you want to chage the Password Generator's Settings?");
  }
  var password = generatePassword(settings);
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);