//packages, libraries and files to include or use
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateMarkdown = require("./assets/js/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'firstname',
        message: 'Enter your first name:',
        type: 'input'
    },
    {
        name: 'username',
        message: 'Enter your GitHub username:',
        type: 'input'
    },
    {
        name: 'title',
        message: 'What is the title of this project?',
        type: 'Input'
    },
    {
        name: 'description',
        message: 'Enter the project description:',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'Install the following dependencies before trying to run this app:',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'Describe how to use the app',
        type: 'input'
    },
    {
        name: 'license',
        message: 'Select the project license type:',
        type: 'list',
        choices: ["MIT", "Apache", "GNU"],
    },
    {
        name: 'contributing',
        message: 'To contribute to this project please clone the repo and contact me regarding any updates or improvements you have created:',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'List any tests for this app',
        type: 'input'
    },
    {
        name: 'questions',
        message: 'Enter any questions',
        type: 'input',
    },
    {
        name: 'email',
        message: 'Enter your email address',
        type: 'email'
    }
];

function init() {
    inquirer.prompt(questions).then(function(responses) {
        console.log(responses);
        fs.writeFile('./assets/generated-files/README.md', generateMarkdown(responses), (error) => {
            return error
            ? console.error(error) 
            : console.log('Write file operation succeeded!');
        });
    });
};

init();


