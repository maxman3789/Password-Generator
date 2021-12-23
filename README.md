# Password-Generator

The purpose of the App is to assist users in picking a Secure Password.

This Password Generator starts as a button on the page that says, "GENERATE PASSWORD"

Once clicked, the App asks for the length of the password. Any number below 8 and above 128 is rejected. The App asks the user to insert a new password length.

Next, the App will ask if the user wants to use lower case letters, then upper case letters, then numbers, then special characters.
    -Every Letter of the Alphabet will be in 2 Arrays. One for Upper Case and another for Lower Case.
    -An Array for numbers will have 0 - 9.
    -An Array for Special Characters are based this list from: https://www.owasp.org/index.php/Password_special_characters

The App will determine if there is at least one type selected

When all the criteria is met, the password is generated.

The Generated Password is displayed in a box above the button.
