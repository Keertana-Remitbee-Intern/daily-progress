const sequelize = require("./config/database");
const {Department,Employee,LeaveRequest} = require("./models");
async function start() {
    try {
        await sequelize.authenticate();
        console.log("Database connected successfully!");
        console.log("Models loaded successfully!");
        console.log("Department model:", Department.name);
        console.log("Employee model:", Employee.name);
        console.log("LeaveRequest model:", LeaveRequest.name);
    } catch (error) {
        console.error("Unable to connect to the database:", error.message);
    }
}
start();