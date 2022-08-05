// Assignment code here

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

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = [
  " ",
  '"',
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "]",
];

function generatePassword() {
  //prompt for length of password
  var numChars = prompt("How many characters do you want your password to be?");
  //checks for at least 8 and no more than 128
  if (numChars < 8) {
    alert("Password must have at least 8 characters!");
    exit();
  } else if (numChars > 128) {
    alert("Password must have less than 129 characters!");
    exit();
  }
  //prompt for do you want special characters, numbers, lowercase and uppercase
  wantsSpecial = confirm(
    "Click 'OK' if you want to include special characters in your password."
  );
  wantsNumbers = confirm(
    "Click 'OK' if you want to include numbers in your password."
  );
  wantsLowercase = confirm(
    "Click 'OK' if you want to include lowercase letters in your password."
  );

  wantsUppercase = confirm(
    "Click 'OK' if you want to include uppercase letters in your password."
  );

  //check for selecting at least one of the above
  if (
    wantsSpecial === false &&
    wantsNumbers === false &&
    wantsLowercase === false &&
    wantsUppercase === false
  ) {
    alert(
      "Password must include at least one of the following:\nSpecial Characters\nNumbers\nLowercase Letters\nUppercase Letters"
    );
    exit();
  }

  console.log(wantsSpecial);
  console.log(wantsNumbers);
  console.log(wantsLowercase);
  console.log(wantsUppercase);
  console.log(numChars);
  // create password from these arrays
  array = [];
  //create array including all possible character values based on user preferences
  function createArray(special, nums, lower, upper) {
    if (special) {
      var array = specialChars;
      return array;
    }
    console.log(array);
    if (nums) {
      array = array.concat(numbers);
      return array;
    }
    console.log(array);
    if (lower) {
      array = array.concat(lowercase);
      return array;
    }
    console.log(array);
    if (upper) {
      array = array.concat(uppercase);
      return array;
    }
  }
  console.log(array);

  //create actual password when given final array
  function randomIndex(anyArray) {
    var result = " ";
    for (var i = 0; i < numChars; i++) {
      var randIndex = Math.floor(Math.random() * anyArray.length);
      result = result + anyArray[randIndex];
    }
    return result;
  }

  var finalArray = createArray(
    wantsSpecial,
    wantsNumbers,
    wantsLowercase,
    wantsUppercase
  );
  //make sure checks pick up where left off instead of quitting
  password = randomIndex(finalArray);
  // console.log(password);
  // console.log(numChars);
  return password;
}

var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var specialChars = [
  " ",
  '"',
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  "<",
  "=",
  ">",
  "?",
  "@",
  "[",
  "]",
  "^",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
  "]",
];
// //write password to page
