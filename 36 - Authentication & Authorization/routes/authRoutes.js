const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../data/users")
const router = express.Router();

router.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find(
        user => user.email === email && user.password === password
    );
    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }
    const token = jwt.sign(
        {
            id: user.id,
            email: user.email,
            role: user.role
        },
        process.env.JWT_SECRET,
        {
            expiresIn: "1h"
        }
    );
    res.json({
        message: "Login successful",
        token
    });
});
module.exports = router;