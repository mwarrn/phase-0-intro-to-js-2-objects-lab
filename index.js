const employee = {
    name: "Michael",
    streetAddress: "11710 118th Ave NE",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {
        ...employee
    };
    employees[key] = value;
    return employees;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {
        ...employee
    };
    delete newEmployee[key];
    return newEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
};
