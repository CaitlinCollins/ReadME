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
  return `# ${data.title}
  ## Table of Contents
  [Description](https://github.com/${data.github}/${data.title}#description)

  [Installation](https://github.com/${data.github}/${data.title}#installation)

  [Usage](https://github.com/${data.github}/${data.title}#usage)

  [Contributing](https://github.com/${data.github}/${data.title}#contributing)

  [Tests](https://github.com/${data.github}/${data.title}#tests)

  [License](https://github.com/${data.github}/${data.title}#license)

  [Contact](https://github.com/${data.github}/${data.title}#contact)

  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contributing
  ${data.contributing}
  ## Tests
  ${data.tests}
  ## License
  ${data.license}
  ## Contact
  GitHub: @${data.github}

  Email: ${data.email}
`;
};

module.exports = generateMarkdown;
