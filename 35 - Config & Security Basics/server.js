const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bcrypt = require("bcrypt");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());

const users =[];

//signup
app.post("/signup", async(req,res) => {
    const {name, email, password} = req.body;
    if (!name || !email || !password) {
        return res.status(400).json({
            message: "All fields are required"
        });
    }

    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.status(409).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = {
        id: users.length + 1,
        name,
        email,
        password: hashedPassword
    };
    users.push(newUser);
    res.status(201).json({
        message: "Signup successful",
        user: {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        }
    });
});

//login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({
            message: "Email and password are required"
        });
    }

    const user = users.find(user => user.email === email);
    if (!user) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }

    const passwordMatch = await bcrypt.compare(
        password,
        user.password
    );
    if (!passwordMatch) {
        return res.status(401).json({
            message: "Invalid email or password"
        });
    }
    res.json({
        message: "Login successful",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

app.get("/", (req, res) => {
    res.json({
        message: "Auth API is running"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
