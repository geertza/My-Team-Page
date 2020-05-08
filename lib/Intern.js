const Employee = require("./Employee");

//  employee +  also :
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email, school)
    this.school = school;
    this.role = "intern"
    this.questions = [...this.Questions, 
      {
        type: "input",
        message: "What school does this intern attend?",
        name: "school"
    },
   ]}
    
  getSchool(){
      return this.school
  }
   getRole(){
      this.role = "Intern";
      return this.role;
  }
}

module.exports = Intern;

