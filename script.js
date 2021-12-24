

// https://stackoverflow.com/questions/28970925/basic-javascript-password-generator
// https://dev.to/code_mystery/random-password-generator-using-javascript-6a

// Arrays for uppercase letter, lower case letters, numbers, and special characters
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "'", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", "\"", "@", ":", ";", "<", ">", "?", "[", "]", "=", "^", "~", "`", "{", "}", "|"];


  // Function to prompt user for password options
  function forPassword() {
    // Variable to store length of password from user input
    var length = (prompt('How many characters would you like your password to contain?')
    );
  
    // Makes sure password length is a number
    //https://mkyong.com/javascript/check-if-variable-is-a-number-in-javascript/
    if (isNaN(length) === true) {
      alert('Password length must be provided as a number');
      return;
    }
  
    // Checks if password length is at least 8
    if (length < 8) {
      alert('Password length must be at least 8 characters');
      return;
    }
  
    // Checks if password length no more than 128
    if (length > 128) {
      alert('Password length must less than 129 characters');
      return;
    }

    // Checks to confirm if lower case will be used.
    var isLower = confirm(
      'Click OK to confirm including lowercase characters.'
    );
  
    // Checks to confirm if upper case will be used.
    var isUpper = confirm(
      'Click OK to confirm including uppercase characters.'
    );

    // hecks to confirm if numbers will be used.
    var isNum = confirm(
      'Click OK to confirm including numeric characters.'
    );
  
    // Checks to confirm if special characters will be used.
    var isSpecial = confirm(
      'Click OK to confirm including special characters.'
    );

    // Checks the characters conditions. From Section 7
    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (
      isUpper === false && isLower === false && isNum === false && isSpecial === false
    ) {
      alert('Must select at least one character type');
      return;
    }
  
    // Variable that stores the user's input
    var password = {
      length: length,
      isUpper: isUpper,
      isLower: isLower,
      isNum: isNum,
      isSpecial: isSpecial
    };
  
    return password;
  }
  
  // Gets random character out of an array
  function getRandom(array) {
    var randomIndex = Math.floor(Math.random() * array.length);
    var randomElement = array[randomIndex];
  
    return randomElement;
  }
  
  // Function to generate password with user input
  function generatePassword() {
    var pass = forPassword();
    
    var result = [];
  
    var passChar = [];
  
    var allChar = [];

    // If statements that adds the arrays of lower case, upper case, number, and special characters into another array of characters that can be generated.
    if (pass.isLower) {
      passChar = passChar.concat(lower);
      allChar.push(getRandom(lower));
    }
  

    if (pass.isUpper) {
      passChar = passChar.concat(upper);
      allChar.push(getRandom(upper));
    }

    if (pass.isNum) {
      passChar = passChar.concat(num);
      allChar.push(getRandom(num));
    }

    if (pass.isSpecial) {
      passChar = passChar.concat(special);
      allChar.push(getRandom(special));
    }

  //For loops through password length from the Password Object at random. Conc's those characters into 'result'
    for (var i = 0; i < pass.length; i++) {
      var index = getRandom(passChar);
  
      result.push(index);
    }
  
  //Puts one of each character into the generated password from user input
    for (var i = 0; i < allChar.length; i++) {
      result[i] = allChar[i];
    }
  
  // Creates a new string to be used in writePassword()
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
    return result.join('');
  }
  
  // Get references to the #generate element
  var generateBtn = document.querySelector('#generate');
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');
  
    passwordText.value = password;
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);
