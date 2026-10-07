const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const LeaveRequest = sequelize.define(
    "LeaveRequest",
    {
        leave_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true 
        },
        employee_id: {
            type: DataTypes.INTEGER,
            allowNull: false 
        },
        leave_type: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        start_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        end_date: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING(20),
            allowNull: false,
            defaultValue: "PENDING"
        }
    },
    {
        tableName: "Levae_requests",
        timestamps: false
    }
);
module.exports = LeaveRequest;