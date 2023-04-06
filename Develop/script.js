// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Character sets for password requirements

var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var number = '0123456789';
var special = '!@#$%^&*()_[]{}\|:;?/>.<,`~';
var charLibrary = '';


//Function to set password length
function passwordLength(minPasswordLength, maxPasswordLenth) {
  var lengthInt;
  while (true) {
    //Set a prompt for no user input.  Program exits
    var length = prompt('How many characters do you want your password?  (8-128)');
    if (length === null) {
      alert('Program will now exit');
      return null;
    }
    //Lets user know password length requirement not met and will return to the prompt
    lengthInt = parseInt(length);
    if (isNaN(lengthInt) || lengthInt < 8 || lengthInt > 129) {
      alert('Length requirement not met.  Please try again');
    } else {
      break;
    }
  }

  return lengthInt;
}

//Function for lower case
function lowercase() {
  var lowerCaseInput = confirm('Would you like lower case letters to your password?')
  if (lowerCaseInput == true) {
    charLibrary += lowerCase;
  }
  return lowerCaseInput;
}

//Function for uppercase
function uppercase() {
  var upperCaseInput = confirm('Would you like upper case letters in your password?')
  if (upperCaseInput == true) {
    charLibrary += upperCase;
  }
  return upperCaseInput;
}

//Numbers function
function numbers() {
  var numericInput = confirm('Would you like numbers in your password?')
  if (numericInput == true) {
    charLibrary += number;
  }
  return numericInput;
}

//Special characters function
function specials() {
  var specialInput = confirm('Would you like special characters in your password?')
  if (specialInput == true) {
    charLibrary += special;
  }
  return specialInput;
}


//Generates the password
function generatePassword() {
  charLibrary = '';
  var passwordLengthValue = passwordLength(8, 128);
  if (passwordLengthValue === null) {
    return ""; 
  }

  lowercase();
  uppercase();
  numbers();
  specials();

  if (charLibrary.length === 0) {
    alert('At least one options needs to be selected.');
    //Runs the generatePassword function if no user input was set
    return generatePassword();
  }

  var generatedPassword = "";

  for (var i = 0; i < passwordLengthValue; i++) {
    generatedPassword += charLibrary.charAt(Math.floor(Math.random() * charLibrary.length));
  }

  return generatedPassword;
}
