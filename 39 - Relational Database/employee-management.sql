-- Create database

CREATE DATABASE IF NOT EXISTS employee_management;
USE employee_management;

-- Create Tables

CREATE TABLE IF NOT EXISTS departments(
    department_id INT PRIMARY KEY AUTO_INCREMENT,
    department_name VARCHAR(30) NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS employees(
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    employee_name VARCHAR(50) NOT NULL,
    email VARCHAR(70) NOT NULL UNIQUE,
    salary DECIMAL(10,2) NOT NULL,
    joining_date DATE NOT NULL,
    department_id INT NOT NULL,
    FOREIGN KEY (department_id)
        REFERENCES departments(department_id)
);

CREATE TABLE IF NOT EXISTS leave_requests(
    leave_id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    employee_id INT NOT NULL,
    leave_type VARCHAR(30) NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL DEFAULT 'PENDING',
    FOREIGN KEY (employee_id)
        REFERENCES employees(employee_id)
);

-- Insert data

INSERT INTO departments (department_name) 
VALUES
('IT'),
('Human Resources'),
('Finance'),
('Marketing');

INSERT INTO employees (employee_name, email, salary, joining_date, department_id)
VALUES
('Kamal', 'kamal@gmail.com', 45000.00, '2025-06-10', 1),
('Arun', 'arun@gmail.com', 55000.00, '2024-03-15', 1),
('Priya', 'priya@gamil.com', 40000.00, '2025-01-20', 2),
('Rahul', 'rahul@gmail.com', 60000.00, '2023-08-05', 3),
('Divya', 'divya@gmail.com', 48000.00, '2024-11-12', 4);

INSERT INTO leave_requests
(employee_id, leave_type, start_date, end_date, status)
VALUES
(1, 'Casual', '2026-10-10', '2026-10-11', 'PENDING'),
(2, 'Sick', '2026-09-20', '2026-09-21', 'APPROVED'),
(3, 'Casual', '2026-10-15', '2026-10-16', 'PENDING'),
(4, 'Annual', '2026-11-01', '2026-11-05', 'APPROVED'),
(5, 'Sick', '2026-09-25', '2026-09-26', 'REJECTED');

-- SQL Queries

SELECT * FROM employees;

SELECT employee_name, email, salary FROM employees;

INSERT INTO employees
(employee_name, email, salary, joining_date, department_id)
VALUES
('Vikram', 'vikram@gmail.com', 52000.00, '2026-01-10', 1);

UPDATE employees
SET salary = 58000.00
WHERE employee_id = 2;

DELETE FROM employees
wHERE employee_id = 6;

SELECT employee_name, salary
FROM employees
WHERE salary>50000;

SELECT employee_name, email
FROM employees
WHERE department_id = 1;

SELECT employee_name, email
FROM employees
WHERE employee_name LIKE 'K%';

SELECT employee_name, salary
FROM employees
WHERE salary BETWEEN 40000 AND 50000;

SELECT employee_name, salary
FROM employees
ORDER BY salary DESC;

