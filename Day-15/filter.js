function checkNumbers(numbers, condition) {
    for (let i = 0; i < numbers.length; i++) {
        if (condition(numbers[i])) {
            console.log(numbers[i]);
        }
    }
}

function isEven(number) {
    return number % 2 === 0;
}

function isGreaterThanFive(number) {
    return number > 5;
}

const numbers = [2, 4, 6, 7, 9, 10];

console.log("Even numbers:");
checkNumbers(numbers, isEven);
console.log("Numbers greater than 5:");
checkNumbers(numbers, isGreaterThanFive);