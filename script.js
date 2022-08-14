// Assignment code here
// password object
var pass = {
  amount: 0,
  spec: false,
  num: false,
  lowcase: false,
  upcase: false,
  pool: [],
  word: NaN,
  reset: function () {
    this.amount = 0;
    this.spec = pass.num = pass.lowcase = pass.upcase = false;
    this.pool.length = 0;
    this.word = NaN;
  }
};
// constants - strings spread into arrays
const special = [..." !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"];
const numeral = [..."0123456789"];
const upAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
const lowAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
// console.log(special);
// console.log(numeral);
// console.log(upAlpha);
// console.log(lowAlpha);


// main function to generate password
var generatePassword = function() {
  // loops until an acceptable length is given
  while (!pass.amount) {
    pass.amount = window.prompt("How many characters would you like your password to be?");
    pass.amount = parseInt(pass.amount);
    if (pass.amount > 128 || pass.amount < 8 || !pass.amount) {
      window.alert("The value must be an integer between 8 and 128 characters. Please try again.");
      pass.amount = 0;
    }
  }
  // loops until at least one character option is selected
  while (!pass.spec && !pass.num && !pass.lowcase && !pass.upcase) {
    pass.spec = window.confirm("Do you want your password to contain special characters?");
    pass.num = window.confirm("Do you want your password to contain numeric characters?");
    pass.lowcase = window.confirm("Do you want your password to contain lower case characters?");
    pass.upcase = window.confirm("Do you want your password to contain upper case characters?");
    if (!pass.spec && !pass.num && !pass.lowcase && !pass.upcase) {
      window.alert("You must select at least one character type to continue. Please try again.")
    }
  }
  if (pass.spec) {
    pass.pool = pass.pool.concat(special);
  }
  if (pass.num) {
    pass.pool = pass.pool.concat(numeral);
  }
  if (pass.lowcase) {
    pass.pool = pass.pool.concat(lowAlpha);
  }
  if (pass.upcase) {
    pass.pool = pass.pool.concat(upAlpha);
  }
  console.log(pass.pool);
  pass.reset();
  // console.log(pass);
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
