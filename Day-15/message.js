function createMessage(message) {
    return function () {
        console.log(message);
    };
}

const message1 = createMessage("Hi!");
const message2 = createMessage("Hello!");

message1();
message2();
message1();