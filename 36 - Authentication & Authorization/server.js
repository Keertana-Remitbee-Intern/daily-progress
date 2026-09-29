require("dotenv").config();
const express = require("express");
const PORT = 3000;
const { authenticate, authorize } = require("./middleware/authMiddleware");
const authRoutes = require("./routes/authRoutes");
const users = require("./data/users");
const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "Employee API is running" });
});

app.get("/employees", authenticate, authorize("admin", "employee"), (req, res) => {
    const employees = users.filter(user => user.role === "employee");
    res.json(employees);
});

app.get("/employees/:id", authenticate, authorize("admin", "employee"), (req, res) => {
    const id = Number(req.params.id);
    const employee = users.find(user => user.id === id && user.role === "employee");
    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    res.json(employee);
});

app.post("/employees", authenticate, authorize("admin"), (req, res) => {
    const { name, email, password, department } = req.body;
    if (!name || !email || !password || !department) {
        return res.status(400).json({
            message: "Name, email, password and department are required"
        });
    }
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        return res.status(409).json({ message: "Email already exists" });
    }
    const newEmployee = {
        id: users.length + 1,
        name,
        email,
        password,
        department,
        role: "employee"
    };
    users.push(newEmployee);
    res.status(201).json({
        message: "Employee created successfully",
        employee: newEmployee
    });
});

app.put("/employees/:id", authenticate, authorize("admin"), (req, res) => {
    const id = Number(req.params.id);
    const employee = users.find(user => user.id === id && user.role === "employee");
    if (!employee) {
        return res.status(404).json({ message: "Employee not found" });
    }
    const { name, email, password, department } = req.body;
    if (name) employee.name = name;
    if (email) employee.email = email;
    if (password) employee.password = password;
    if (department) employee.department = department;
    res.json({
        message: "Employee updated successfully",
        employee
    });
});

app.delete("/employees/:id", authenticate, authorize("admin"), (req, res) => {
    const id = Number(req.params.id);
    const employeeIndex = users.findIndex(user => user.id === id && user.role === "employee");
    if (employeeIndex === -1) {
        return res.status(404).json({ message: "Employee not found" });
    }
    const deletedEmployee = users.splice(employeeIndex, 1);
    res.json({
        message: "Employee deleted successfully",
        employee: deletedEmployee[0]
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});