const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");


let teamManager=[]
tempEngineerTemplate=[]
tempInternTemplate=[]
function initialQuestions(){
    const tempManager = new Manager;
    inquirer
        .prompt(tempManager.questions)
        .then(answers => {
           teamManager =answers
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
           tempEngineerTemplate =answers;
           console.log(tempEngineerTemplate); 
           mainQuestionStr()
           });
              break;
            case 'Intern':
                const tempIntern = new Intern;
                inquirer
                    .prompt(tempIntern.questions)
                    .then(answers => {
                       tempInternTemplate =answers;
                       console.log(tempInternTemplate) 
                       mainQuestionStr()
                       });
              break;
            case "Done":
              return
    }}
