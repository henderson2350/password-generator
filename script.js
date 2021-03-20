// STUFF HE WROTE
var generateBtn = document.querySelector("#generate")

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword())

// STUFF IM WRITING
function generatePassword() {
    var numberChar = window.prompt("How many characters would you like?")
    if (numberChar < 8 || numberChar > 128) {
        numberChar = window.prompt("Please choose a number between 8 and 128.")
    }
    var numbers = window.confirm("Would you like to include numbers?")
    var letters = window.confirm("Would you like to include letters?")
    var special = window.confirm("Would you like to include special characters?")
    

    //TODO: Use those parameters to generate a new password
    lettersArray = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
    numbersArray = [0,1,2,3,4,5,6,7,8,9]
    specialArray = "!#$%&()*+,-./:;<=>?@[]^_`{|}~".split("")
    
    lettersAndNumbers = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",1,2,3,4,5,6,
    7,8,9,0]

    numbersAndSpecial = [1,2,3,4,5,6,7,8,9,0, "a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    
    
    lettersAndSpecial = ["a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g","h", "i", "j", "k", "l",
    "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    allThree = ["a", "b", "c", "d", "e", "f", "g","h", "i", 
    "j", "k", "l", "m", "n", "o", "p", "q", "r", 
    "s", "t", "u", "v", "w", "x", "y", "z",1,2,3,4,5,6,7,8,9,0,"!", "#", "$", "%", "&", "(", ")", "*",
    "+", ",", "+", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "~"]


    console.log(lettersAndNumbers)

    newPassword = ""

    for (i = 0; i < numberChar; i++) {

        if (numbers && letters && special) {
            newPassword += allThree[Math.floor(Math.random() * allThree.length)]
        }

        else if (numbers && letters) {
            newPassword += lettersAndNumbers[Math.floor(Math.random() * lettersAndNumbers.length)]
        }

        else if (numbers && special) {
            newPassword += numbersAndSpecial[Math.floor(Math.random() * numbersAndSpecial.length)]
        }

        else if (letters && special) {
            newPassword += lettersAndSpecial[Math.floor(Math.random() * lettersAndSpecial.length)]
        }
    
        else if (numbers) {
                newPassword += numbersArray[Math.floor(Math.random() * numbersArray.length)]
        }

        else if (letters) {
            newPassword += lettersArray[Math.floor(Math.random() * lettersArray.length)]
        }

        else if (special) {
            newPassword += specialArray[Math.floor(Math.random) * specialArray.length]
        }
    
        

    }
    //TODO: Return that password
    return newPassword
  }

