// Assignment Code
var generateBtn = document.querySelector("#generate");

//ask the user for length
function generatePassword() {
  let passwordLength = parseInt(prompt("How long should the password be?"));
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Error, invalid password length. \nPlease choose a password greater than 8 and less than 128 characters");
  }
// ask the user for which character to include
  var includeLowercase = confirm("Include lowercase letters in password?");
  var includeUppercase = confirm("Include uppercase letters in password");
  var includeNumbers = confirm("Includes numbers in password");
  var includeSpecialCharacters = confirm("Includes special characters in password");

// if user answers no to all confirms, alert error saying at least one confirm needs to be true. if error occurs, repeat confirm messages again for re entry.

  if (!includeLowercase && !includeUppercase && !includeNumbers && !includeSpecialCharacters) {
    alert("Hey Dummy, you must pick one at least to get your password!!!!!!!");
  }
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "123456789";
  const specialCharacter = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  let skipLcase = "";
  let skipUcase = "";
  let skipNumbers = "";
  let skipSpecial = "";
// generate a random password
 
  var bigLetter = Math.floor(Math.random() * 26);
  var numb = Math.floor(Math.random() * 9);
  var special = Math.floor(Math.random() * 35);
  var littleLetter; 
  var letters;
  var char;
  var finalPass;
// sync password length with math pull
  for (var i = 0; i < passwordLength; i++) {
    //link generate variables to character var's. 
    // string.charAt(number or value);

    if (includeLowercase) {
      littleLetter = Math.floor(Math.random() * 26);
      char = lowercase.charAt(littleLetter); 
    } else if (includeUppercase) {
      bigLetter = Math.floor(Math.random() * 26);
      char = uppercase.charAt(bigLetter);
    } else if (includeNumbers) {
      numb = Math.floor(Math.random() * 9);
      char = numbers.charAt(numbs);
    }
    
   


    //uppercase.charAt(bigLetter);
    //numbers.charAt(numb);
    //specialCharacter.charAt(special);
    finalPass += char;
  } 
//return generated password
return finalPass;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
