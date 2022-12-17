// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `this will be a badge`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # Description 
  ${data.description}
  ${renderLicenseBadge(data.license)}
  # Table of Contents 
  ### Installation
  ### Usage
  ### Contributing
  ### Tests
  ### Questions
  # Installation 
  ${data.installation}
  # Usage 
  ${data.usage}
  # Contributing 
  ${data.contributing}
  # Tests 
  ${data.tests}
  # Questions 
  If you have please further questions please contact me via GitHub or email using the address below
  ${data.username}
  ${data.email}
`;
}

module.exports = generateMarkdown;
