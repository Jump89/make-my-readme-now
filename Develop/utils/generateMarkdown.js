// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
else if (license === "Apache License 2.0") {
  return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
}
else if (license === "Mozilla Public License 2.0") {
  return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
}
else if (license === "GNU LGPLv3") {
  return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)"
}
else if (license === "GNU GPLv3") {
  return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT License") {
    return "https://opensource.org/licenses/MIT"
  }
else if (license === "Apache License 2.0") {
  return "https://opensource.org/licenses/Apache-2.0"
}
else if (license === "Mozilla Public License 2.0") {
  return "https://opensource.org/licenses/MPL-2.0"
}
else if (license === "GNU LGPLv3") {
  return "https://www.gnu.org/licenses/lgpl-3.0"
}
else if ( license === "GNU GPLv3") {
  return "https://www.gnu.org/licenses/gpl-3.0"
}

 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}  ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Content

* [Contribution](#contribution)
* [License](#license)
* [Usage](#usage)
* [Test](#test)
* [Installation](#installation)
* [Questions](#questions)

## Contribution

${data.contribution}

## License 

${renderLicenseSection(data.license)}

## Usage

${data.usage}

## Test

${data.test}

## Installation

${data.installation}

## Questions

Email: ${data.email}

Github: https://www.github.com/${data.username}
`;
}

module.exports = generateMarkdown;
