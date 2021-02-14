const fs = require("fs");
const inquirer = require('inquirer');

inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Are there any installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Is there any usage information for your project?',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Are there any contribution guidelines for your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Are there any test instructions for your project?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like for your project?',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'Unlicense', 'None']
    },
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
  ]).then((data) => {

    const title = data.title;
    const description = data.description;
    const installation = data.installation;
    const usage = data.usage;
    const contributing = data.contributing;
    const tests = data.tests;
    const license = data.license;
    const github = data.github;
    const email = data.email;

    const fileBody = 
    `# ${title}
  ## Table of Contents
  [Description](https://github.com/${github}/${title}#description)

  [Installation](https://github.com/${github}/${title}#installation)

  [Usage](https://github.com/${github}/${title}#usage)

  [Contributing](https://github.com/${github}/${title}#contributing)

  [Tests](https://github.com/${github}/${title}#tests)

  [License](https://github.com/${github}/${title}#license)

  [Contact](https://github.com/${github}/${title}#contact)

  ## Description
  ${description}
  ## Installation
  ${installation}
  ## Usage
  ${usage}
  ## Contributing
  ${contributing}
  ## Tests
  ${tests}
  ## License
  ${license}
  ## Contact
  GitHub: @${github}

  Email: ${email}`

    // fs.writeFile("README.md", fileBody, (err) =>
    //   err ? console.log(err) : console.log("File Written!")
    // )
});

module.exports = 
fileBody,
license;


   
  
