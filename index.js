// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "what is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "please enter a description of your project",
    name: "description",
  },
  {
    type: "input",
    message: "installation instructions?",
    name: "installation",
  },
  {
    type: "input",
    message: "usage information?",
    name: "usage",
  },
  {
    type: "input",
    message: "who contibuted to this project?",
    name: "contributing",
  },
  {
    type: "checkbox",
    choices: ["APM", "AUR license", "Bower", "Cocoapods", "Conda - License", "CPAN", "CRAN/METACRAN", "Crates.io", "CTAN", "DUB", "Eclipse Marketplace", "GitHub", "GitLab", "GitLab (self-managed)", "Greasy Fork", "Hex.pm", "NPM", "Ore License", "Packagist License", "Packagist License (custom server)", "PyPI - License", "REUSE Compliance", "Weblate component license"],
    name: "license",
  },
  {
    type: "input",
    message: "tests?",
    name: "tests",
  },
  {
    type: "input",
    message: "what is your github username?",
    name: "username",
  },
  {
    type: "input",
    message: "what is your email address?",
    name: "email",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const exportData = generateMarkdown(data);
  return fs.writeFileSync(fileName, exportData);
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
    writeToFile("README.md", response);
  });
}

// Function call to initialize app
init();
