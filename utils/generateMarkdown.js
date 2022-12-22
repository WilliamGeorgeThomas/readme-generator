// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `<img src="https://img.shields.io/badge/license-${license}-green.svg">\n`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `* [License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `This project is licensed under ${license}`;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description 
  ${data.description}
  # Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation 
  ${data.installation}
  # Usage 
  ${data.usage}
  # License
  ${renderLicenseBadge(data.license)}
  ${renderLicenseSection(data.license)}
  # Contributing 
  ${data.contributing}
  # Tests 
  ${data.tests}
  # Questions 
  If you have please further questions please vist my [GitHub](https://github.com/${data.username}) or contact me via email at
  ${data.email}
`;
}

module.exports = generateMarkdown;

//TODO add screenshot section
