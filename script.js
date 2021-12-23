// Arrays for Characters. Lower, Upper, Number, Special
// https://stackoverflow.com/questions/28970925/basic-javascript-password-generator
// https://w3collective.com/random-password-generator-javascript/
// https://www.tutorialstonight.com/password-generator-in-javascript.php
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = [" ", "!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", "\"", "@", ":", ";", "<", ">", "?", "[", "]", "=", "^", "~", "`", "{", "}", "|"];


//Get password options from the user
function Options() {
  var length = prompt("How long would you like your password to be?"); 


  //Makes sure password length is a number
  if (isNaN(length) === true) {
    alert('Length of your password must be between 8 and 128');
    return;
  }

  //Checks if password length is at least 8
  if (length < 8) {
    alert('Enter at least 8 as a password length');
    return;
  }

  //Checks if password length no more than 128
  if (length > 128) {
    alert('Enter no more than 128 for password length');
    return;
  }

  //Checks to confirm if lower case will be used.
  var isLower = confirm(
    'Click OK to include lower case characters.'
  );
  
  //Checks to confirm if upper case will be used.
  var isUpper = confirm(
    'Click OK to include upper case characters.'
  );

  //Checks to confirm if number will be used.
  var isNums = confirm(
    'Click OK to include numbers'
  );

  //Checks to confirm if special characters will be used.
  var isSpecial = confirm(
    'Click OK to include special characters.'
  );

  //Checks to see if the user chose types of characters.
  if (
    isLower === false &&
    isUpper === false &&
    isNums === false &&
    isSpecial === false 
  ) {
    alert('Select at least one character type');
    return;
  }

  // Object to store user input
  var passwordOptions = {
    length: length,
    isLower: isLower,
    isUpper: isUpper,
    isNums: isNums,
    isSpecial: isSpecial
  };

  return passwordOptions;
}

//Function that gets a random index
function getRandomIndex(ind) {
  var randomIndex = Math.floor(Math.random() * ind.length);
  var randomElement = ind[randomIndex];

  return randomElement;
}

//Function that generates the password
function generatePassword() {
  var options = Options();
 
  var result = [];

  var passwordChar = [];

  var userChar = [];

  //Creates an array of lower case characters into the User Character array
  if (options.isLower) {
    passwordChar = passwordChar.concat(lower);
    userChar.push(getRandomIndex(lower));
  }

  //Creates an array of upper case characters into the User Character array
  if (options.isUpper) {
    passwordChar = passwordChar.concat(upper);
    userChar.push(getRandomIndex(upper));
  }

    //Creates an array of numbers into the User Character array
    if (options.isNums) {
      passwordChar = passwordChar.concat(num);
      userChar.push(getRandomIndex(num));
    }

    //Creates an array of special characters into the User Character array
    if (options.isSpecial) { 
      passwordChar = passwordChar.concat(special);
      userChar.push(getRandomIndex(special));
    }

  //For loops through password length from Options at random. Conc's those characters into 'result'
  for (var i = 0; i < options.length; i++) {
    var passwordChar = getRandomIndex(passwordChar);

    result.push(passwordChar);
  }

  //Puts one of each character into the generated password from user input
  for (var i = 0; i < userChar.length; i++) {
    result[i] = userChar[i];
  }

  //Creates a new string to be used in writePassword()
  return result.join('');
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);