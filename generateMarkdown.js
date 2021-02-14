// TODO: Create a function that returns a license badge based on which license is passed in
const githubLicense = require("@danieldietrich/github-license");
const getLicense = require('./index.js');

// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
    response = "MIT";
    break;
    case "Apache 2.0":
    response = "Apache 2.0";
    break;
    case "GPL 3.0":
    response = "GPL 3.0";
    break;
    case "Unlicense":
    response = "Unlicense";
    break;
    default:
    response = "";
    break;
  };
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
    response = "MIT";
    break;
    case "Apache 2.0":
    response = "Apache 2.0";
    break;
    case "GPL 3.0":
    response = "GPL 3.0";
    break;
    case "Unlicense":
    response = "Unlicense";
    break;
    default:
    response = "";
    break;
  };
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
    response = "MIT";
    break;
    case "Apache 2.0":
    response = "Apache 2.0";
    break;
    case "GPL 3.0":
    response = "GPL 3.0";
    break;
    case "Unlicense":
    response = "Unlicense";
    break;
    default:
    response = "";
    break;
  };
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let title = data.title;
    let description = data.description;
    let installation = data.installation;
    let usage = data.usage;
    let contributing = data.contributing;
    let tests = data.tests;
    let license = data.license;
    let github = data.github;
    let email = data.email;

    fileBody = 
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

    fs.writeFile("README.md", fileBody, (err) =>
      err ? console.log(err) : console.log("File Written!")
    )
};

module.exports = generateMarkdown;
