const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employee.controller");
const{createEmployeeValidator, updateEmployeeValidator} = require("../validators/employee.validator");
const validate = require("../middleware/validation.middleware");

router.get("/", employeeController.getEmployees);
router.get("/:id", employeeController.getEmployee);
router.post(
    "/",
    createEmployeeValidator,
    validate,
    employeeController.createEmployee
);
router.patch(
    "/:id",
    updateEmployeeValidator,
    validate,
    employeeController.updateEmployee
);
router.delete(
    "/:id",
    employeeController.deleteEmployee
);
module.exports = router;