// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

  function generatePassword() {
    
    getPasswordLength();
    getPasswordCriteria();

    function getPasswordLength() {
      var passwordLength = parseInt(prompt("Enter length of password"));
      
      if(!Number.isInteger(passwordLength)) { //means if "passwordLength is not an "Integer" (i.e. a number);
      alert("Enter an Integer");
      getPasswordLength();

      } else if(passwordLength < 8 || passwordLength > 128) {
      alert("Password needs to be between 8 and 128 characters");
      getPasswordLength();
      }
    
    }

    function getPasswordCriteria() {
      
      var criteriaCount = 0;

      lowercase = confirm("Do you want lowercase letters?");
      if(lowercase) {
        criteriaCount += 1;
      }

      uppercase = confirm("Do you want uppercase letters?");
      if(uppercase) {
        criteriaCount += 1;
      }

      numericCharacters = confirm("Do you want numeric characters?");
      if(numericCharacters) {
        criteriaCount += 1;
      }

      specialCharacters = confirm("Do you want special charaters?");
      if(specialCharacters) {
        criteriaCount += 1;
      }

      if(criteriaCount < 1) {
      alert("You must select at least 1 criterium");
      getPasswordCriteria();
      }
      
      
    }
    
  }

  let genPassword = [];
  let lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  let numericCharactersArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let specialCharactersArray = ['!', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '^', ']', '_', '`', '{', '|', '~', '}'];

  let criteriaArray = [];

  if(lowercase && uppercase && numericCharacters && specialCharacters) {
  criteriaArray = lowerCaseArray.concat(upperCaseArray, numericCharactersArray, specialCharactersArray);

  } else if(lowercase && uppercase && numericCharacters) {
    criteriaArray = lowerCaseArray.concat(upperCaseArray, numericCharactersArray);
    
  //} else if(lowercase && uppercase && specialCharacters) {
   // criteriaArray = lowerCaseArray.concat(upperCaseArray, specialCharactersArray);
    
  } else if (lowercase && specialCharacters) {
    criteriaArray = lowerCaseArray.concat(specialCharactersArray);

  } else if(lowercase && uppercase) {
      criteriaArray = lowerCaseArray.concat(upperCaseArray);
  
  } else if (lowercase) {
      criteriaArray = lowerCaseArray;

  } else if(uppercase && numericCharacters) {
      criteriaArray = upperCaseArray.concat(numericCharacters);
  
  } else if(uppercase && specialCharactersArray) {
      criteriaArray = upperCaseArray.concat(specialCharactersArray);
  
  } else if(uppercase) {
      criteriaArray = upperCaseArray;

  } else if(numericCharacters && specialCharactersArray) {
      criteriaArray = numericCharactersArray.concat(specialCharactersArray);

  } else if(numericCharacters) {
      criteriaArray = numericCharactersArray;

  } else {
      criteriaArray = specialCharactersArray;
  }

  criteriaArray.sort(() => Math.random() - 0.5);
  genPassword = criteriaArray.join('');

  console.log(typeof (genPassword));

  return genPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
