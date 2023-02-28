//
function createBadge(license) {
  if(license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  };
  if(license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  };
  if(license === "GNU") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  };
};

// function to generate markdown for README

function generateMarkdown(data) {
  return `# ${data.title}

${createBadge(data.license)}

***
## Description
${data.description}
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
## Installation
Install the following dependencies before trying to run this app:<br>  
~~~
${data.installation}
~~~
## Usage
To use this app: 
~~~ 
${data.usage}
~~~
## License
This application is covered under the following license:<br>  
${createBadge(data.license)} <br>  
Click the license button for further information on this license type.
## Contributing
${data.contributing}
## Tests
Perform the following to test the app:
${data.tests}
## Questions
Visit this application's GitHub page:<br>
https://github.com/${data.username}/${data.title}<br>
If you have further questions please contact 
${data.firstname} at 
${data.email}
`;
}

module.exports = generateMarkdown;
