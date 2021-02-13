const fs = require("fs");
const inquirer = require('inquirer');

const questions = [];

inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?'
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write a short description of your project.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Are there any installation instructions for your project?'

    },
    {
        type: 'input',
        name: 'usage',
        message: 'Is there any usage information for your project?'

    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Are there any contribution guidelines for your project?'

    },
    {
        type: 'input',
        name: 'tests',
        message: 'Are there any test instructions for your project?'

    },
    {
      type: 'list',
      name: 'license',
      message: 'What license would you like for your project?',
      choices: ['MIT', 'Apache 2.0', 'ISC', 'Artistic 2.0']
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'

    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'

    },
    
  ])


