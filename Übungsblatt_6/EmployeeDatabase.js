var employeeDatabase = (function() {
    
	var employees = [];
	
    function createEmployee(name,email,room) {
		var newEmployee = new Employee(employees.length, name, email, room);
		employees.push(newEmployee);
        return newEmployee();
    }
    
    function updateEmployee() {
        return 0;
    }
    
    return {
        createEmployee: createEmployee,
        updateEmployee: updateEmployee
    };
})();
