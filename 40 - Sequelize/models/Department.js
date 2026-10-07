const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Department = sequelize.define(
    "Department",
    {
        department_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        department_name: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true
        }
    },
    {
        tableName: "departments",
        timestamps: false
    }
);
module.exports = Department;