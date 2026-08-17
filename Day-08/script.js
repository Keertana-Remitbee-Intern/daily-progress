// 1. Even or Odd

let number = 10;
if (number % 2 === 0){
    console.log("Even");
}
else{
    console.log("Odd");
}

// 2. Reverse a String

let text = "hello";
let reversed = text.split("").reverse().join("");
console.log(reversed);

// 3. Largest of three numbers

let a = 10;
let b = 25;
let c = 15;
if (a > b && a > c) {
    console.log("A is largest");
}
else if (b > a && b > c) {
    console.log("B is largest");
}
else {
    console.log("C is largest");
}

// 4. Temperature Converter
let celsius = 30;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log(fahrenheit);


// 5. Count Vowels
let word = "javascript";
let count = 0;
for (let letter of word) {
    if ("aeiou".includes(letter)) {
        count++;
    }
}
console.log("Vowels:", count);

// 6. Simple Calculator
let num1 = 10;
let num2 = 5;
let operator = "+";

if (operator === "+") {
    console.log(num1 + num2);
}
else if (operator === "-") {
    console.log(num1 - num2);
}
else if (operator === "*") {
    console.log(num1 * num2);
}
else if (operator === "/") {
    console.log(num1 / num2);
}
else {
    console.log("Invalid Operator");
}

// 7. FizzBuzz
let n1 = 15;
if (n1 % 3 === 0 && n1 % 5 === 0) {
    console.log("FizzBuzz");
}
else if (n1 % 3 === 0) {
    console.log("Fizz");
}
else if (n1 % 5 === 0) {
    console.log("Buzz");
}
else {
    console.log(n1);
}


// 8. Simple Password Checker
let password = "hello123";

if (password.length >= 8) {
    console.log("Strong enough");
}
else {
    console.log("Password is too short");
}

// 9. Positive, Negative or Zero
let value = -5;
if (value > 0) {
    console.log("Positive");
}
else if (value < 0) {
    console.log("Negative");
}
else {
    console.log("Zero");
}

// 10. Fibonacci Series
let p = 10;
let x = 0;
let y = 1;
for (let i = 0; i < p; i++) {
    console.log(x);

    let next = x + y;
    x = y;
    y = next;
}