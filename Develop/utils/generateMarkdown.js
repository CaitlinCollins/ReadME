// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${title}
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

  Email: ${email}
`;
};

module.exports = generateMarkdown;
