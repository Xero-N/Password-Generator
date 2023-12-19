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
/* Collect user inputs for the following.
    Welcome to password generator
    - ask user if they would like to have special characters,
      numbers, lowercase and upper case
    - ask users for how long their password needs to be between 8 - 128 chars.

    Concat user chosen arrays into new array using if statements.

    Generte user chosen choices into a randomised password. */


// Function to prompt user for password options
function getPasswordOptions() {
  var welcomeAlert = alert("Welcome to the password generator!");
  var specialCharPrompt = confirm("Would you like to use special characters?");
  var numPrompt = confirm("Would you like to use numbers?");
  var lowerCasePrompt = confirm("Would you like to use lowercase characters?");
  var upperCasePrompt = confirm("Would you like to use uppercase characters?");
  var lengthPrompt = parseInt(prompt("How long should the password be? (8-128 characters)"), 10);

  // Validate the length input
  if (isNaN(lengthPrompt) || lengthPrompt < 8 || lengthPrompt > 128) {
    alert("Invalid length. Please enter a number between 8 and 128.");
    return null;
  }

  // Concatenate user chosen arrays into new array
  var chosenCharacters = [];
  if (specialCharPrompt) chosenCharacters = chosenCharacters.concat(specialCharacters);
  if (numPrompt) chosenCharacters = chosenCharacters.concat(numericCharacters);
  if (lowerCasePrompt) chosenCharacters = chosenCharacters.concat(lowerCasedCharacters);
  if (upperCasePrompt) chosenCharacters = chosenCharacters.concat(upperCasedCharacters);

  if (chosenCharacters.length === 0) {
    alert("You must select at least one character type!");
    return null;
  }

  return {
    chosenCharacters: chosenCharacters,
    length: lengthPrompt
  };
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
  if (!options) {
    return ''; // Return empty string if no options are set
  }

  var password = '';
  for (var i = 0; i < options.length; i++) {
    password += getRandom(options.chosenCharacters);
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword(getPasswordOptions) {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);