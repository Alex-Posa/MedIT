class Employee {
    constructor(id, name, email, room) {
		this.id = id;
		this.name = name;
		this.email = email;
		this.room = room;
    }
    
    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }
    
    getRoom() {
        return this.room;
    }
    
    getEmail() {
        return this.email;
    }
    
    toString() {
		
		var string = "";
		string += this.getId() + " ";
		string += this.getName() + " ";
		string += this.getEmail() + " ";
		string += this.getPosition() + " ";
		
        return string
    } 
}
