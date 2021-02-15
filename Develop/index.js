// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("../Develop/utils/generateMarkdown.js");
const renderLicenseSection = require("../Develop/utils/generateMarkdown.js");
const renderLicenseBadge = require("../Develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
    'Write a short description of your project.',
    'Are there any installation instructions for your project?',
    'Is there any usage information for your project?',
    'Are there any contribution guidelines for your project?',
    'Are there any test instructions for your project?',
    'What license would you like for your project?',
    'What is your GitHub username?',
    'What is your email address?',
];
    
inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: questions[0],
    },
    {
      type: 'input',
      name: 'description',
      message: questions[1],
    },
    {
      type: 'input',
      name: 'installation',
      message: questions[2],
    },
    {
      type: 'input',
      name: 'usage',
      message: questions[3],
    },
    {
      type: 'input',
      name: 'contributing',
      message: questions[4],
    },
    {
      type: 'input',
      name: 'tests',
      message: questions[5],
    },
    {
      type: 'list',
      name: 'license',
      message: questions[6],
      choices: ['MIT', 'Apache-2.0', 'GPL-3.0', 'Unlicense', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: questions[7],
    },
    {
      type: 'input',
      name: 'email',
      message: questions[8],
    },
  ]).then((data) => {
    console.log(data.license);
    renderLicenseSection(data);
    renderLicenseBadge(data);
    generateMarkdown(data);
    

// TODO: Create a function to write README file
function writeToFile(){
fs.writeFile("README.md", generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("File Written!"))
};
// TODO: Create a function to initialize app
function init() {
    writeToFile();
}
// Function call to initialize app
init();
});