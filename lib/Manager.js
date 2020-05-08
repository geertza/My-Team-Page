const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email, officeNumber)

    //   * officeNumber 
    this.officeNumber = officeNumber;
    this.role = "manager"
    this.questions = [...this.Questions, 
      {
        type: "input",
        message: "What is your office number?",
        name: "officeNumber"
    }]}
     getOfficeNumber(){
      return this.officeNumber
  }
 
  getRole(){
      this.role = "Manager";
      return this.role;
  }
}

module.exports = Manager;