// places html elements into js
var generateBtn = document.querySelector("#generate");
// global variables holding all possible password results
var finalUpperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var finalLowerCase = finalUpperCase.toLowerCase();
var finalNumbers = "1234567890"
var finalSpecialChars = "?<>!$+^%@~)(*=-`;:"

// click / start questionnaire
generateBtn.addEventListener("click", writePassword);

// called upon click
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// questionaire for user to confirm what criteria to include in password
function questions() {
  var lowerCaseConfirm = confirm("Would you like lowercase letters included in your password?");
  var upperCaseConfirm = confirm("Would you like uppercase letters included in your password?");
  var numbersConfirm = confirm("Would you like numbers included in your password?");
  var specialCharsConfirm = confirm("Would you like special characters included in your password?");

  return {
    lowerCase: lowerCaseConfirm,
    upperCase: upperCaseConfirm,
    numbers: numbersConfirm,
    specialChars: specialCharsConfirm
  };
}

function generatePassword() {
  // initialize password results
  var result = "";
  var passwordLength = 0;
  var lowerCase;
  var upperCase;
  var numbers;
  var specialChars;
  // collect password length
  passwordLength = prompt("How many characters would you like your password to include? Please choose at least 8 characters and no more than 128 characters.");
  if (passwordLength <= 8 || passwordLength > 128) {
    alert("Please choose at least 8 characters and no more than 128 characters.");
    return generatePassword();
  } else {
    alert("Your password will be " + passwordLength + " characters long.");
  }
  // collect password criteria
  var userSelection = questions();
  if (!userSelection.lowerCase && !userSelection.upperCase && !userSelection.numbers && !userSelection.specialChars) {
    alert("You must choose at least 1 character type.");
    return generatePassword();
  }
  if (userSelection.lowerCase) {
    lowerCase = finalLowerCase;
  }
  if (userSelection.upperCase) {
    upperCase = finalUpperCase;
  }
  if (userSelection.numbers) {
    numbers = finalNumbers;
  }
  if (userSelection.specialChars) {
    specialChars = finalSpecialChars;
  }
  // input user selections into password
  for (var i = 0; i < passwordLength; i++) {
    var charSet = "";
    if (lowerCase) charSet += finalLowerCase;
    if (upperCase) charSet += finalUpperCase;
    if (numbers) charSet += finalNumbers;
    if (specialChars) charSet += finalSpecialChars;
    // input random global variables / ensure no decimals
    result += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  // show results
  return result;
};
