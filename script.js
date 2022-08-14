// Assignment code here
var pass = {
  length: 0,
  spec: false,
  num: false,
  lowcase: false,
  upcase: false,
  word: NaN
};

var generatePassword = function() {
  while (!pass.length) {
    pass.length = window.prompt("How many characters would you like your password to be?");
    pass.length = parseInt(pass.length);
    if (pass.length > 128 || pass.length < 8 || !pass.length) {
      window.alert("The value must be an integer between 8 and 128 characters. Please try again.");
      pass.length = 0;
    }
  }
  while (!pass.spec && !pass.num && !pass.lowcase && !pass.upcase) {
    pass.spec = window.confirm("Do you want your password to contain special characters?");
    pass.num = window.confirm("Do you want your password to contain numeric characters?");
    pass.lowcase = window.confirm("Do you want your password to contain lower case characters?");
    pass.upcase = window.confirm("Do you want your password to contain upper case characters?");
    if (!pass.spec && !pass.num && !pass.lowcase && !pass.upcase) {
      window.alert("You must select at least one character type to continue. Please try again.")
    }
  }
  console.log(pass);
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
