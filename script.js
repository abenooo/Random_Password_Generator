const inputSlider = document.getElementById("inputSlider");
const sliderValue = document.getElementById("sliderValue");
const passBox = document.getElementById("passBox");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("getBtn");

// copy icon
const copyIcon = document.getElementById("copyIcon");
const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz"
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersLetter = "0123456789"
const symbolsletter = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";

// assign the range value as password  length
sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input", () => {
    sliderValue.textContent = inputSlider.value;
})

// assign the random password to input filed
generateBtn.addEventListener("click", () => {
    passBox.value = generatePassword();
})

// function to generate random pasword
function generatePassword() {
 const length = inputSlider.value;
 let character = "";
 let password = "";

// add condition for checkbox
 character += lowercase.checked ? lowercaseLetters : "";
 character += uppercase.checked ? uppercaseLetters : "";
 character += numbers.checked ? numbersLetter : "";
 character += symbols.checked ? symbolsletter : "";

 for (let i = 0; i < length; i++) {
   password += character.charAt(Math.floor(Math.random() * character.length))
    console.log(password)
 }
return password;
}

copyIcon.addEventListener("click",()=>{

    if(passBox.value !="" || passBox.value.length>=10){

        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check";


        setTimeout(()=>{

            copyIcon.innerHTML = "content_copy";

        },3000);

    }
});