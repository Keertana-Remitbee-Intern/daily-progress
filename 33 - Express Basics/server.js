/*
Day: 33
Date: 24-Sep-2026

Topics Covered:
Express Basics - Routing, middleware (built-in, custom, third-party),
request/response objects, error-handling middleware.

Practice:
Build a server with 3–4 routes and a custom logging middleware.
*/

const express = require("express");
const app = express();
const PORT = 8000;

const logger = (req, res, next) =>{
    console.log(`${req.method} ${req.url}`);
    next();
};
app.use(logger);

app.get("/", (req,res) => {
    res.send("Welcome to the Express Server") 
});

app.get("/about", (req,res) => {
    res.json({
        message: "ABout Page"
    });
});

app.get("/users", (req,res) => {
    res.json([
        {id:1, name: "Anu"},
        {id:2, name: "Banu"} 
    ]);
});

app.get("/products", (req,res) => {
    res.json([
        {id:1, name: "Laptop", price: 75000},
        {id:2, name: "Headphones", price: 2000}
    ]);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});