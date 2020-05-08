class Employee {
    // Create a constructor for employee with agruments name, id, email
    constructor(name, id, email){
        // Add the properities name, id, title, email
        this.name = name;
        this.id = id;
        this.email = email;
        this.Questions = [
            {
                type: "input",
                message: "name?",
                name: "name"
            },
            {
                type: "input",
                message: "id?",
                name: "id"
            },
            {
                type: "input",
                message: "email address?",
                name: "email"
            }
        ]
        this.html = "";
    }

    // Add methods to return the corresponding properties
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    getEmail(){
        return this.email;
    }
    // Add method getRole to return a new Employee, which you pass name, id, and email
    getRole(){
        return this.role;
    }
}



module.exports = Employee;
