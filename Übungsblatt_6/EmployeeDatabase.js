var employeeDatabase = (function() {
    
	var employees = [];
	
    function createEmployee(name,email,room) {
		var id = createId();
		var nextEmployee = new Employee(id, name, email, room);
		employees.push(nextEmployee);
        return nextEmployee;
    }
    
	function createId(){
		var id = 0; 
		
		for(var i=0; i < employees.length; i++){
			if(employees[i].id === id){
				id++;
			}
		}
		
		return id;
	}
	
	function idExists(id,name){
		
		for(var i = 0; i < employees.length; i++){
			if(employees[i].id === id && employees[i].name === name){
				return i;
			} else {
				console.log("Not a legitimate ID");
				return 1;
			}
		}
	}
	
	
    function updateEmployee(id, name, email, room) {
		
		var id = idExists(id,name);
		if(id != 1){
			var newEmployee = new Employee(id, name, email, room);
			employees[id] = newEmployee;
			return newEmployee;
		} 
        return 0;
    }
    
    return {
        createEmployee: createEmployee,
        updateEmployee: updateEmployee
    };
})();
