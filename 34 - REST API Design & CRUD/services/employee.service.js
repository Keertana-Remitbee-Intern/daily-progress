let employees = [
    {
        id: 1,
        name: "Anu",
        email: "anu@gmail.com",
        department: "Engineering",
        salary: 50000
    },
    {
        id: 2,
        name: "Banu",
        email: "banu@gmail.com",
        department: "Medical",
        salary: 60000
    }
];

let nextId = 3;

exports.getAllEmployees = () => {
    return employees;
};

exports.getEmployeeById = (id) => {
    return employees.find(
        employee => employee.id === Number(id)
    );
};

exports.createEmployee = (data) => {
    const employee = {
        id: nextId++,
        name: data.name,
        email: data.email,
        department: data.department,
        salary: data.salary
    };
    employees.push(employee);
    return employee;
};

exports.updateEmployee = (id,data) => {
    const employee = employees.find(
        employee => employee.id === Number(id)
    );
    if (!employee) {
        return null;
    }
    Object.assign(employee, data);
    return employee;
};

exports.deleteEmployee = (id) => {
    const index = employees.findIndex(
        employee => employee.id === Number(id)
    );
    if (index === -1){
        return false;
    }
    employees.splice(index, 1);
    return true;
};