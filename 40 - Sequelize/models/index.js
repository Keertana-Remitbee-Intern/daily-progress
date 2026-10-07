const Department = require("./Department");
const Employee = require("./Employee");
const LeaveRequest = require("./LeaveRequest");

Department.hasMany(Employee, {
    foreignKey: "department_id"
});

Employee.belongsTo(Department, {
    foreignKey: "department_id"
});

Employee.hasMany(LeaveRequest, {
    foreignKey: "employee_id"
});

LeaveRequest.belongsTo(Employee, {
    foreignKey: "employee_id"
});

module.exports = {Department,Employee,LeaveRequest};