/*
Day: 15
Date: 2-Sep-2026

Topics Covered:
Advanced JavaScript Concepts - Closures, the "this" keyword, prototypes and prototypal inheritance, higher-order functions,
and an intro to JS modules/bundlers (why we need tools like Vite/webpack).

Practice:
Write 5 small exercises specifically demonstrating closures and higher-order functions.
*/

function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getValue: () => count
  };
}

const counter = createCounter();
counter.increment();
counter.increment();
console.log(counter.getValue()); 