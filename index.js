//packages, libraries and files to include or use
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

// declaration and path to the generateMarkdown script 
const generateMarkdown = require("./assets/js/generateMarkdown");

// array of questions for user
const questions = [
    {
        name: 'firstname',
        message: 'Your first name:',
        type: 'input'
    },
    {
        name: 'username',
        message: 'Your GitHub username:',
        type: 'input'
    },
    {
        name: 'title',
        message: 'Title of this project:',
        type: 'Input'
    },
    {
        name: 'description',
        message: 'Project description:',
        type: 'input'
    },
    {
        name: 'installation',
        message: 'List this apps dependencies:',
        type: 'input'
    },
    {
        name: 'usage',
        message: 'How to run this app',
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
        message: 'Where to go with contributions:',
        type: 'input'
    },
    {
        name: 'tests',
        message: 'Testing this app:',
        type: 'input'
    },
    {
        name: 'questions',
        message: 'Where to go with questions:',
        type: 'input',
    },
    {
        name: 'email',
        message: 'Enter your email address',
        type: 'email'
    }
];

function init() {   // prompt the user with questions, call the generateMarkdown script and store the final results in README.md in the path given below, or error.
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


