const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

layout={}
// start by asking inquirer for manager
function initialQuestion(){
    const tempManager = new Manager;
 inquirer.prompt(tempManager.questions)
        .then(answers => {
        x = answers
            module.exports = x
        const HTMLrender = require("./lib/htmlrender");
          layout=HTMLrender 
          mainQuestionStr()
           });}
           initialQuestion();


          