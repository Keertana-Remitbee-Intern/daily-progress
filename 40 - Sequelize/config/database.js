require("dotenv").config();
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize(
    "employee_management",
    "root",
    process.env.DB_PASSWORD,
    {
        host: "localhost",
        port: 3306,
        dialect: "mysql"
    }
);
module.exports = sequelize;