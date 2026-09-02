function repeatAction(times, action) {
    for (let i = 0; i < times; i++) {
        action();
    }
}

function sayHello() {
    console.log("Hello!");
}

function showNumber() {
    console.log("Hola!!");
}

repeatAction(3, sayHello);
repeatAction(2, showNumber);