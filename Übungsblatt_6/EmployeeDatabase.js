//Todo: Implement this file as a module according to the revealing module pattern

var employeeDatabase = (function(){
	var employees = [];
	
	function createEmployee(name, email, room) {
		var newEmployee = new Employee(employees.length, name, email, room);
		employees.push(newEmployee);
		return newEmployee;
	}
	
	return {
		create: createEmployee
	};
	
})();
