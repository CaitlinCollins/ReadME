
const fs = require("fs");
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const badgeData = [`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`, 

`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`, 

`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`, 

`[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`, 

`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
];

function renderLicenseBadge(data) {
  console.log(data.license);
  let newShield;
  if (data.license === "MIT") {
    newShield = badgeData[0];
}
  else if (data.license === "Apache-2.0"){
    newShield = badgeData[1];
}
  else if (data.license == "IBM") {
    newShield = badgeData[2];
}
  else if (data.license == "Eclipse") {
    newShield = badgeData[3];
}
  else if (data.license == "Mozilla") { 
    newShield = badgeData[4];
}
  else {
    newShield = "";
  };
return newShield;
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
let newLicense = "";
function renderLicenseSection(data) {
  const axios = require('axios');

  if (data.license === "MIT") {
    axios.get('https://api.github.com/licenses/mit')
    .then(function (response) {
      // handle success
      console.log(response.data.body);
      newLicense = response.data.body;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
  // else if (data.license === "Apache-2.0"){
  //     newLicense = githubLicense('Apache-2.0');
  // }
  // else if (data.license === "GPL-3.0") {
  //     newLicense = githubLicense('GPL-3.0');
  // }
  // else if (data.license === "Unlicense") {
  //     newLicense = githubLicense('Unlicense');
  // }
  else {
    newLicense = "";
  };
}

// TODO: Create a function to generate markdown for README
  function generateMarkdown(data, newLicense) {
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

module.exports = generateMarkdown, renderLicenseSection