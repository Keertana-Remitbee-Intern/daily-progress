const { body } = require("express-validator");

exports.createEmployeeValidator = [
    body("name")
        .trim()
        .notEmpty()
        .withMessage("Name is required")
        .isLength({ min: 2 })
        .withMessage("Name must be at least 2 characters"),

    body("email")
        .trim()
        .notEmpty()
        .withMessage("Email is required")
        .isEmail()
        .withMessage("Enter a valid email"),

    body("department")
        .trim()
        .notEmpty()
        .withMessage("Department is required"),

    body("salary")
        .notEmpty()
        .withMessage("Salary is required")
        .isFloat({ min: 0 })
        .withMessage("Salary must be a positive number")
];

exports.updateEmployeeValidator = [
    body("name")
        .optional()
        .trim()
        .isLength({ min: 2 })
        .withMessage("Name must be at least 2 characters"),

    body("email")
        .optional()
        .trim()
        .isEmail()
        .withMessage("Enter a valid email"),

    body("department")
        .optional()
        .trim()
        .notEmpty()
        .withMessage("Department cannot be empty"),

    body("salary")
        .optional()
        .isFloat({ min: 0 })
        .withMessage("Salary must be a positive number")
];