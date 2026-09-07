function createScore() {
    let score = 0;

    return function (points, operation) {
        score = operation(score, points);
        console.log("Score:", score);
    };
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

const updateScore = createScore();

updateScore(10, add);
updateScore(5, add);
updateScore(3, subtract);