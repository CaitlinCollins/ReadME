// TODO: Create a function that returns a license badge based on which license is passed in
const fs = require("fs");
const githubLicense = require("@danieldietrich/github-license");
let get = require('./index.js');

  fs.writeFile("README.md", get.fileBody, (err) =>
      err ? console.log(err) : console.log("File Written!")
    );
// If there is no license, return an empty string
function renderLicenseBadge() {
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


