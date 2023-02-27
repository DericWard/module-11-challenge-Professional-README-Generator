//
function createbadge(license) {
  if(license === "MIT") {
    return "";
  }
  if(license === "Apache") {
  
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  }
  if(license === "GNU") {
    return "";
  }
  if(license === "No license") {
    return "";
  }  
};

function createSection(license) {
  if(license === "Apache") {
    
    return `## license
insert license info text here `;
  }
  if(license === "MIT") {
    return `## license
    insert license info text here `;
  }
  if(license === "GNU") {
    return `## license
    insert license info text here `;
  }
  if(license === "No license") {
    return "";
  }  
}

function createLink() {
  if (license !== "no license") {
    return `## license`
  }
}


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${createbadge(data.license)}
https://github.com/${data.Username}/${data.title}
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
${createSection}
- [Contributing](#contributors)
- [Tests](#tests)
- [Questions](#questions)

## Installation
Install the following dependcies before trying to run this app
${data.installation}
## Usage
To use this app ${data.usage}
${createSection(data.license)}
## Contributors: ${data.contributors}
## Tests
Perform the following to test the app: ${data.tests}
## Questions
~~~
Please contact ${data.user} with any questions
~~~

`;
}

module.exports = generateMarkdown;
