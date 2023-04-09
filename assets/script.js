// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a random password function here.  since there is confirms boolean asking for user's preference, will have to use if's, else if's function.
function generatePassword () {

// Ask user for length of password
    let passwordLength = parseInt(prompt("How many characters should the password be?"));


// If user picked a number < 8 and > 128, alert them that they need to pick an amount within that range. 
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Error, invalid password lenght. \nPlease choose a password that is greater than 7 and less than 129 characters");
        return "";
    }

// Ask user which characters they want to use, lowercase, uppercase, numbers or special characters
    var lowercasePick = confirm("Do you want lowercase letters to be included in the password?");
    var uppercasePick = confirm("Do you want uppercase letters included in your password?");
    var numberPick = confirm("Do you want numbers to be included in your password?");
    var specialPick = confirm("Do you want special characters to be included in your password?");

// Alert user that they must selected OK for at least one of these criterias, send them message if they don't pick at least one. 
    if (!lowercasePick && !uppercasePick && !numberPick && !specialPick) {
        alert("Sorry, please pick at least one type of character for your password.");
        return "";
    } 

// Identify the letters, numbers, and special characters that could be chosen for random password. 
    let passwordCharacters = [];
    const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberList = "0123456789";
    const specialList = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

// If user picks special characters to be included in password, then the password will add the special character to whatever the password is at, minus any decibels. 
    if (specialPick) {
        passwordCharacters = passwordCharacters.concat(specialList.split(""));
    }
    if (lowercasePick) {
        passwordCharacters = passwordCharacters.concat(lowercaseList.split(""));
    }
    if (uppercasePick) {
        passwordCharacters = passwordCharacters.concat(uppercaseList.split(""));
    }
    if (numberPick) {
        passwordCharacters = passwordCharacters.concat(numberList.split(""));
    }

// Generate random password
    let results = "";
    for (var i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        let randomCharacter = passwordCharacters[randomIndex];
        results += randomCharacter;
    }

// Return generated password
    return results;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
