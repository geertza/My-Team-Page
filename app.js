const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
intern = require("./templates/internTemplate")
mainBody = require ("./templates/mainTemplate")
css = require ("./templates/cssTemplate")
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


layout=[]
function initialQuestions(){
    const tempManager = new Manager;
    inquirer
        .prompt(tempManager.questions)
        .then(answers => {
         const {name, id, email, officeNumber} = answers
        layout= mainBody.mainBody(name, id, email, officeNumber);
            
        // mainQuestionStr()
        writeFile()
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
           EngTemplate.push(answers);
           mainQuestionStr()
           });
              break;
            case 'Intern':
                const tempIntern = new Intern;
                inquirer
                    .prompt(tempIntern.questions)
                    .then(answers => {
                       InternTemplate =answers;
                        
                       mainQuestionStr()
                       });
              break;
            case "Done":
              return
    }}


    function writeFile(){
    x=css.css();
    layout += x
      console.log(layout)
      fs.writeFile("./output/team.html", layout, function(){
        console.log("Team file created! Check ./output folder!")
    })
    }
