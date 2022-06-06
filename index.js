const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

// TODO: Create an array of questions for user input

const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: nameInput => {
            if(nameInput) {
                return true;
            }else {
                console.log("Enter a valid preject title")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'description',
        message: 'Describe your project',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log("Enter a valid description")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log("Enter valid instructions for installation")
                return false;
            }
        }
      },
      {
        type: 'checkbox',
        name: 'license',
        message: 'Choose a license for you application (Choose all that apply)',
        choices: ['MIT', 'Apache', 'Boost', 'Bash'],
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter instructions and examples for use',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log("Enter valid usage information")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contrubuting guidelines',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log("Enter valid guidelines")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter tests for your application',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log("Enter valid tests")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log("Enter valid username")
                return false;
            }
        }
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email',
        validate: nameInput => {
            if (nameInput) {
                return true;
            }else {
                console.log("Enter valid email")
                return false;
            }
        }
      },
    ]);
  };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    questions()
        .then
}

// Function call to initialize app
init();
