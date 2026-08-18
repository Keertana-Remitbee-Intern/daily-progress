// Simple Calculator

function calculate() {

    let num1Input = document.getElementById("num1").value;
    let num2Input = document.getElementById("num2").value;
    let operator = document.getElementById("operator").value;
    let result = document.getElementById("result");

    if (num1Input === "" || num2Input === "") {
        result.textContent = "Please enter both numbers.";
        return;
    }

    let num1 = Number(num1Input);
    let num2 = Number(num2Input);

    switch (operator) {

        case "+":
            result.textContent = "Result: " + (num1 + num2);
            break;

        case "-":
            result.textContent = "Result: " + (num1 - num2);
            break;

        case "*":
            result.textContent = "Result: " + (num1 * num2);
            break;

        case "/":
            if (num2 === 0) {
                result.textContent = "Cannot be divided by 0";
            }
            else {
                result.textContent = "Result: " + (num1 / num2);
            }
            break;
    }
}

//Number Guessing Game

let secretNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {

    let guessInput = document.getElementById("guess").value;
    let message = document.getElementById("message");
    let playAgainButton = document.getElementById("playAgain");

    if (guessInput === "") {
        message.textContent = "Please enter a number.";
        return;
    }

    let guess = Number(guessInput);

    if (guess < 1 || guess > 100) {
        message.textContent = "Please enter a number between 1 and 100.";
        return;
    }

    if (guess < secretNumber) {
        message.textContent = "Too low! Try again.";
    }
    else if (guess > secretNumber) {
        message.textContent = "Too high! Try again.";
    }
    else {
        message.textContent = "Correct! You guessed the number!";
        playAgainButton.style.display = "block";
    }
}

function playAgain() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById("guess").value = "";
    document.getElementById("message").textContent = "";
    document.getElementById("playAgain").style.display = "none";
}