// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

/* 
  PROMPTS: 
  --------
  How many character would you like your passowrd to contain?

    if user enters < 10 or > 128: 
      Password must be at least 10 characters
      Password must be less than 129 characters

  Would you like to include special characters?
  Would you like to include uppercase letters?
  Would you like to include lowercase letters?
  Would you like to include numbers?

    If user chooses at least one option above: 
      Closes box, generates passsword in field on webpage

    If user selects cancel to all options prompt: 
      You must select at least one character type


  NOTES
  -----
  > Use confirm prompt for ok/cancel

  > At least one of the character type options should be selected in order for a password to be generated
  
  > The bulk of the code should be in function generatePassword section

*/


// Function to prompt user for password options
function getPasswordOptions() {

  // MY CODE



  // END OF MY CODE

}

// Function for getting a random element from an array
function getRandom(arr) {

  // MY CODE

  

  // END OF MY CODE

}

// Function to generate password with user input
function generatePassword() {

  // MY CODE

  

  // END OF MY CODE

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