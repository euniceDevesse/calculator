const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};

const handleKeyPress = (event) => {
    const key = event.key;

    // Check if the pressed key is a number or a special character
    if (!isNaN(key) || specialChars.includes(key)) {
        calculate(key);
    } else if (key === "Enter") {
        calculate("=");
    } else if (key === "Backspace") {
        calculate("DEL");
    }
};

// Listen for keyboard events on the document
document.addEventListener("keydown", handleKeyPress);

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
