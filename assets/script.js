// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a random password function here.  since there is confirms boolean asking for user's preference, will have to use if's, else if's function.
function generatePassword () {

    // Ask user for length of password
    let passwordLength = parseInt(prompt("How many characters should the password be? Please pick an amount from 8 through 128 characters."));

    // If user picked a number < 8 and > 128, alert them that they need to pick an amount within that range. 
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Error, invalid password length. \nPlease choose a length between 8 - 128 characters");
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

    // Identify the letters, numbers, and special characters that could be chosen for random password. Also create a variable for empty index.
   
    const lowercaseList = "acdefghijklmnopqrstuvwxyz";
    const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberList = "0123456789";
    const specialList = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    let passwordCharacters = [];
    
    // If user picks their criteria to be included in password, then the password will add the chosen characters to the password minus any decibels. Randomizing happens next in the math formula. 
    if (lowercasePick) {
        passwordCharacters = passwordCharacters.concat(lowercaseList.split(""));
    }

    if (uppercasePick) {
        passwordCharacters = passwordCharacters.concat(uppercaseList.split(""));
    }

    if (numberPick) {
        passwordCharacters = passwordCharacters.concat(numberList.split(""));
    }

    if (specialPick) {
        passwordCharacters = passwordCharacters.concat(specialList.split(""));
    }

    // Generate random password.  "results" equals to empty string that is to be filled by generator.
    let results = "";
    
    for (var i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * passwordCharacters.length);
        let randomCharacter = passwordCharacters[randomIndex];
        results += randomCharacter;
    }

    // Return generated password to end it
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
