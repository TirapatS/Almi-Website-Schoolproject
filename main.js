/**
 * E-mail validation
*/

const checkEmail = document.querySelector("#checkEmail")
const userEmail = document.querySelector("#email")

const symbols = [
	"@", "$", "%", "*", "^", "<", ">", "?", "!", "(", ")", "[", "]", "{", "}", "'"
];

function validation() {
    let emailInput = userEmail.value;

    let containsSymbol = false;

    for(let i = 0; i < symbols.length; i++) {
        if(emailInput.includes(symbols[i]) && emailInput.length > 8) {
            alert("Tack för att du prenumererade!")
            return true;
        } else {
            alert("E-posten är inte giltig")
            return false;
        }
    }
}

checkEmail.addEventListener('click', () => {
    validation()
})