const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = () => {
  return inquirer.prompt([
      {
           type: 'input',
           name: 'github',
           message: 'What is your GitHub username?',
      },
      { 
           type: 'input',
           name: 'email',
           message: 'What is your email address?',
      },
      {
           type: 'input',
           name: 'Title',
           message: 'What is the name/title of your project?',
      },
      {
           type: 'input',
           name: 'Description',
           message: 'Please provide a short description explaining your project'
      },
      {
           type: 'list',
           message: 'What kind of license should your project have?',
           name: 'license',
           choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
          type: 'input',
          name: 'Installation',
          message: 'What command should be run to install dependencies?',
      },
      {
          type: 'input',
          name: 'Test',
          message: 'What command should be run to run test?',
      },
      {
          type: 'input',
          name: 'Usage',
          message: 'What does the user need to know about using the repo?',
      },
      {
         type: 'input',
         name: 'Contributing',
         message: 'What does the user need to know about contributingto the repo?'
      }
  ]);
};

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
