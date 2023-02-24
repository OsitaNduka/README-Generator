const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => 
   
 inquirer.prompt([
       {
        type: 'input',
        name: 'Title',
        message: 'What is the Title of Your Project?',
       },

       {
        type: 'input',
        name: 'Description',
        message: 'Provide a short description explaining the what, why, and how'
       },
]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
