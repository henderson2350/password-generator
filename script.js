// Selecting the button with ID generate and linking it to the variable generateBtn
var generateBtn = document.querySelector("#generate")

// Adding an event listener to the generate button; when it's clicked, write the password
generateBtn.addEventListener("click", writePassword())

// This function prompts the user to ask what sort of characters they would like to use. 
// Then it generates a random password by choosing randomly from arrays based on their choices.
// It then returns the newPassword.
function generatePassword() {
    // These prompts ask the user what type of characters they would like to use.
    // If they choose a number that's outside of the range 8-128, they are prompted to
    // choose another number within the range.
    var numberChar = window.prompt("How many characters would you like?")
    if (numberChar < 8 || numberChar > 128) {
        numberChar = window.prompt("Please choose a number between 8 and 128.")
    }
    var numbers = window.confirm("Would you like to include numbers?")
    var letters = window.confirm("Would you like to include letters?")
    var special = window.confirm("Would you like to include special characters?")
    
    // These arrays list out all of the characters. I've created several arrays that
    // cover all of the possible combinations of characters that the user can choose.
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

    // I initialize the newPassword as a blank string, to be added to in the following for loop.
    newPassword = ""

    // These if statements test for which combination of characters the user has chooses, then 
    // randomly selects characters from the appropriate list. We iterate as many times as the 
    // user specified they would like the length of the password to be. We concatenate each character
    // to the end of the newPassword with each loop-through.
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

    // We return the new password
    return newPassword
  }

// This function assigns the value returned from generatePassword to the variable password, 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}


