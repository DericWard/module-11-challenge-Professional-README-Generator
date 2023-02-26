import inquirer from 'inquirer';
import fs from 'fs';

inquirer.prompt([
    {
        name: 'title',
        message: 'What is your project title?',
        type: 'Input'
    },
    {
        name: 'description',
        message: 'Describe your project:',
        type: 'input'
    },
    {
        name: 'bio',
        message: 'Please input your bio',
        type: 'input'
    },
    {
        name: 'LinkedIn',
        message: 'What is your LinkedIn profile address/URL?',
        type: 'input'
    },
    {
        name: 'GitHub',
        message: 'What is your GutHub address/URL?',
        type: 'input'
    },
])

.then((response) => {
    console.log(response);
    fs.writeFile('test.txt', JSON.stringify(response), (error) => {
        return error
        ? console.error(error) 
        : console.log('Write file operation succeeded!');
    });
});