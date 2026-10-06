USE employee_management;

-- SQL Queries

-- Display employees along with their department names

SELECT
    e.employee_id,
    e.employee_name,
    e.email,
    d.department_name
FROM employees AS e
INNER JOIN departments AS d
    ON e.department_id = d.department_id;

-- Display all departments and their employees

SELECT
    d.department_name,
    e.employee_name
FROM departments AS d
LEFT JOIN employees AS e
    ON d.department_id = e.department_id
ORDER BY d.department_name;
  
-- Count the number of employees in each department

SELECT
    d.department_name,
    COUNT(e.employee_id) AS employee_count
FROM departments AS d
LEFT JOIN employees AS e
    ON d.department_id = e.department_id
GROUP BY
    d.department_id,
    d.department_name;

-- Calculate the average salary for each department

SELECT
    d.department_name,
    AVG(e.salary) AS average_salary
FROM departments AS d
INNER JOIN employees AS e
    ON d.department_id = e.department_id
GROUP BY
    d.department_id,
    d.department_name;

-- Find the highest salary in each department

SELECT
    d.department_name,
    MAX(e.salary) AS highest_salary
FROM departments AS d
INNER JOIN employees AS e
    ON d.department_id = e.department_id
GROUP BY
    d.department_id,
    d.department_name;

-- Count leave requests for each department

SELECT
    d.department_name,
    COUNT(l.leave_id) AS leave_request_count
FROM departments AS d
LEFT JOIN employees AS e
    ON d.department_id = e.department_id
LEFT JOIN leave_requests AS l
    ON e.employee_id = l.employee_id
GROUP BY
    d.department_id,
    d.department_name;

-- Count approved leave requests for each department

SELECT
    d.department_name,
    COUNT(l.leave_id) AS approved_leave_count
FROM departments AS d
LEFT JOIN employees AS e
    ON d.department_id = e.department_id
LEFT JOIN leave_requests AS l
    ON e.employee_id = l.employee_id
    AND l.status = 'APPROVED'
GROUP BY
    d.department_id,
    d.department_name;

-- Find departments having more than one employee

SELECT
    d.department_name,
    COUNT(e.employee_id) AS employee_count
FROM departments AS d
INNER JOIN employees AS e
    ON d.department_id = e.department_id
GROUP BY
    d.department_id,
    d.department_name
HAVING COUNT(e.employee_id) > 1;
