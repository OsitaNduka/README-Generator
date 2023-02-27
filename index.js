const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
// function to initialize program
function init() {
inquirer
  .prompt([
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
           name: 'title',
           message: 'What is the name/title of your project?',
      },
      {
           type: 'input',
           name: 'description',
           message: 'Please provide a short description explaining your project?'
      },
      {
           type: 'list',
           message: 'What kind of license should your project have?',
           name: 'license',
           choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'BSD 2', 'None'],
      },
      {
          type: 'input',
          name: 'installation',
          message: 'What command should be run to install dependencies?',
      },
      {
          type: 'input',
          name: 'test',
          message: 'What is the command to run test?',
      },
      {
          type: 'input',
          name: 'usage',
          message: 'What does the user need to know about using the repo?',
      },
      {
         type: 'input',
         name: 'contributing',
         message: 'What does the user need to know about contributing to the repo?'
      },
      {
         type: 'input',
         name: 'questions',
         message: 'If you have any questions about the repo. please contact me',
      },
  ])
  .then((answer) => {
      console.log(answer.Title, answer.installation)
      var res = generateMarkdown(answer)
      fs.writeFile('generatedREADME.md', `${res}`, function(err, file){
            if (err) throw err;
            console.log('success!')
      })
  })
};

// function to write README file
function writeToFile(fileName, data) {
}




// function call to initialize program
init();
