
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const shields = require('shields')();
const githubLicense = require("@danieldietrich/github-license");

function renderLicenseBadge(data) {
  var newShield = "";
  if (data.license === "MIT") {
    newShield = `[![license](https://img.shields.io/github/license/DAVFoundation/captain-n3m0.svg?style=flat-square)](https://github.com/DAVFoundation/captain-n3m0/blob/master/LICENSE)`
}
  else if (data.license === 'Apache-2.0'){
    newSheild = `[![license](https://img.shields.io/hexpm/l/plug)`
}
//   else if (data.license == "GPL-3.0") {
//     newSheild = shields("GPL-3.0", {repo: "README.md"});
// }
//   else if (data.license == "Unlicense") {
//     newSheild = shields("Unlicense", {repo: "README.md"});
// }
  else {
    newSheild = '';
};
return newShield;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let newLicense = "";
function renderLicenseSection(data) {
  if (data.license === "MIT") {
      newLicense = githubLicense('MIT');
      console.log(newLicense);
  }
  else if (data.license === "Apache-2.0"){
      newLicense = githubLicense('Apache-2.0');
      console.log(newLicense);
  }
    else if (data.license === "GPL-3.0") {
      newLicense = githubLicense('GPL-3.0');
      console.log(newLicense);
  }
    else if (data.license === "Unlicense") {
      newLicense = githubLicense('Unlicense');
      console.log(newLicense);
  }
    else {
    newLicense = "";
    console.log(newLicense);
  };
  return newLicense;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data)}

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
  ${renderLicenseSection(data)}
  ## Contact
  GitHub: @${data.github}

  Email: ${data.email}
`;
};

module.exports = generateMarkdown, renderLicenseBadge(shields), renderLicenseSection;
