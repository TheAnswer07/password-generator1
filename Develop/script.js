// Assignment code here

// Get references to the #generate element
const generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = getPassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//getPasswordLen asks the user to specify the length of the password
//if the password is not an int it will throw an alert and call the function again
//if the length is less than 8 or greater than 128 it will throw an alert and call the function again
//it returns the length of the password which is an int

const getPasswordLen = () => {
  let len = +prompt("how long would you like your password")
   if (isNaN(len)){
    alert("Please use an int")
    return getPasswordLen()
   }

   if (len < 8 || len > 128) {
     alert("Please make sure the length is between 8 and 128")
    return getPasswordLen()
   }
   return len
 };
 
 const getUserChoices = () => {  
   const lowerChoice = confirm("Would you like to use lower case?")
   const upperChoice = confirm("would you like to use uppercase?")
   const specialChoice = confirm("would you like to use special Character?")
   const numChoice = confirm("would you like to use numbers?")
 
   const lowerCase = "abcdefghijklmnopqrstuvwxyz";
   const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const numbers = "1234567890"
   const specialChar = "!@#$%^&*()+_?<>:;'{}[]`~`'\|"
   
  //Here what we're doing is checking if "lowerChoice" is true. If it's the case,
  //lower is set to lowerChoice. If it's false, lower is set to an empty ""."

   return {
     lower: lowerChoice ? lowerCase : '',
     upper: upperChoice ? upperCase : '',
     numbers: numChoice ? numbers : '',
     specialChar: specialChoice? specialChar : '' 
   }
 }
 
 //createValsFromChoices takes object as an argument, loops throught the object
 // and then combines the values of the object into 1 string.
 // returns a string

 const createValsFromChoices = (obj) => {
   let res = ''
   for (let i in obj) {
   res = res + obj[i]
 }
   return res
 }
 
  //vals is a string 
 //passwordLen is an int
 //generatePassword while the length of the result is less than the password length
 //we will randomly select an charachter from vals and assign it to the result
 //this returns a string

 const generatePassword = (vals, passwordLen) => {
   let res = ''
   while (res.length < passwordLen) {
   res = res + vals[Math.floor(Math.random() * vals.length)]
 }
   return res
 }

function getPassword() {
    
  let len = getPasswordLen()
 
  const choices = getUserChoices()

  let vals = createValsFromChoices(choices)

  return generatePassword(vals, len)
  
}

// // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
