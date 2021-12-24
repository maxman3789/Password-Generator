// Arrays for Characters. Lower, Upper, Number, Special
// https://stackoverflow.com/questions/28970925/basic-javascript-password-generator
// https://dev.to/code_mystery/random-password-generator-using-javascript-6a

// Arrays for uppercase letter, lower case letters, numbers, and characters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", "\"", "@", ":", ";", "<", ">", "?", "[", "]", "=", "^", "~", "`", "{", "}", "|"];

length = "";

var allChar = [];

var result = [];

//Get password criteria
function Password() {
  length = prompt("How long would you like your password to be?"); 


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

  //Checks to see if the selected the types of characters.
  // https://github.com/jamierachael/Password-Generator/blob/master/script.js
  if (
    isLower === false && isUpper === false && isNums === false && isSpecial === false 
  ) {
    alert('Select at least one character type');
    return;
  }

  // Object to store user input
  var password = {
    length: length,
    isLower: isLower,
    isUpper: isUpper,
    isNums: isNums,
    isSpecial: isSpecial
  };

  return password;
}

//Function that gets a random index
function getRandomIndex(index) {
  var randomIndex = Math.floor(Math.random() * index.length);
  var randomElement = index[randomIndex];

  return randomElement;
}

//Function that generates the password
function generatePassword() {
  var password = Password();
 
  var passwordChar = [];


  //Creates an array of lower case characters into the User Character array
  if (password.isLower) {
    passwordChar = passwordChar.concat(lower);
    allChar.push(getRandomIndex(lower));
  }

  //Creates an array of upper case characters into the User Character array
  if (password.isUpper) {
    passwordChar = passwordChar.concat(upper);
    allChar.push(getRandomIndex(upper));
  }

    //Creates an array of numbers into the User Character array
    if (password.isNums) {
      passwordChar = passwordChar.concat(num);
      allChar.push(getRandomIndex(num));
    }

  //Creates an array of special characters into the User Character array
  if (password.isSpecial) { 
    passwordChar = passwordChar.concat(special);
    allChar.push(getRandomIndex(special));
  }

  //For loops through password length from Options at random. Conc's those characters into 'result'
  for (var i = 0; i < password.length; i++) {
    var passwordChar = getRandomIndex(passwordChar);

    result.push(passwordChar);
  }

  //Puts one of each character into the generated password from user input
  
  for (var i = 0; i < allChar.length; i++) {
    result[i] = allChar[i];
  }

  //Creates a new string to be used in writePassword()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
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