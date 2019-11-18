//Todo: Implement the class Employee here (class syntax)

class Employee{
	constructor(id, name, email, position){
		this.id = id;
		this.name = name;
		this.email = email;
		this.position = position;
	}
	
	getId(){
		return this.id;
	}
	getName(){
		return this.name;
	}
	getEmail(){
		return this.email;
	}
	getPosition(){
		return this.position;
	}
	
	
	toString (){
		var string = "";
		string += this.getId() + " ";
		string += this.getName() + " ";
		string += this.getEmail() + " ";
		string += this.getPosition() + " ";
		
		return string;
	}
}
