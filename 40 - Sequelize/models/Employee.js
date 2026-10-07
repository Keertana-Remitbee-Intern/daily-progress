const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Employee = sequelize.define(
    "Employee",
    {
        employee_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        employee_name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(70),
            allowNull: false,
            unique: true
        },
        salary: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        joining_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        department_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        tableName: "employees",
        timestamps: false
    }
);
module.exports = Employee;