const employeeService = require("../services/employee.service");
exports.getEmployees = (req, res) => {
    const employees = employeeService.getAllEmployees();
    res.status(200).json({
        count: employees.length,
        employees
    });
};

exports.getEmployee = (req, res) => {
    const employee = employeeService.getEmployeeById(
        req.params.id
    );
    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }
    res.status(200).json(employee);
};

exports.createEmployee = (req, res) => {
    const employee = employeeService.createEmployee(req.body);
    res.status(201).json({
        message: "Employee created successfully",
        employee
    });
};

exports.updateEmployee = (req, res) => {
    const employee = employeeService.updateEmployee(
        req.params.id,
        req.body
    );
    if (!employee) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }
    res.status(200).json({
        message: "Employee updated successfully",
        employee
    });
};

exports.deleteEmployee = (req, res) => {
    const deleted = employeeService.deleteEmployee(
        req.params.id
    );
    if (!deleted) {
        return res.status(404).json({
            message: "Employee not found"
        });
    }
    res.status(204).send();
};