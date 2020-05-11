const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");

const fs = require("fs");
intern = require("./templates/internTemplate")
mainBody = require ("./templates/mainTemplate")
css = require ("./templates/cssTemplate")
eng = require("./templates/engTemplate")



layout=[]
function initialQuestions(){
    const tempManager = new Manager;
    inquirer
        .prompt(tempManager.questions)
        .then(answers => {
         const {name, id, email, officeNumber} = answers
        layout= mainBody.mainBody(name, id, email, officeNumber);
            
        mainQuestionStr()
        
           });}
initialQuestions();

let roleChioce=""
function mainQuestionStr(){
    inquirer
    .prompt([
      {
        type: 'list',
        name:'role',
        message: 'What do you want to do?',
        choices: ['Engineer','Intern',"Done"]
      },
     
    ])
    .then(answers => {
      roleChioce = answers.role;
        promptbranch()
    })};
    
    async function promptbranch(){
        switch (roleChioce) {
            case 'Engineer':
                const tempEngineer = new Engineer;
    inquirer
        .prompt(tempEngineer.questions)
        .then(answers => {
          const {name, id, email, github} = answers
        layout += eng.eng(name, id, email,github);
           mainQuestionStr()
           });
              break;
            case 'Intern':
                const tempIntern = new Intern;
                inquirer
                    .prompt(tempIntern.questions)
                    .then(answers => {
                      const {name, id, email, school} = answers
                      layout += intern.intern(name, id, email,school);
                        
                       mainQuestionStr()
                       });
              break;
            case "Done":
              writeFile()
    }}


    function writeFile(){
    x=css.css();
    layout += x
      console.log(layout)
      fs.writeFile("./output/team.html", layout, function(){
        console.log("Team file created! Check ./output folder!")
    })
    }
