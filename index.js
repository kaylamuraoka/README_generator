// Declaring the required dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
// Convert callback based methods to promise based methods
const writeFileAsync = util.promisify(fs.writeFile);

// Require Internal modules
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "Enter installation instructions:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "usageInfo",
    message: "Enter usage information:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Enter contribution guidelines:",
    validate: validateInput,
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Enter test instructions:",
    validate: validateInput,
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["Apache", "GNU", "ISC", "MIT", "Mozilla", "Open Data Commons"],
    default: "MIT",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your Github username:",
    default: "kaylamuraoka",
    validate: validateInput,
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:",
    default: "kmurs98@gmail.com",
    validate: validateInput,
  },
];

// function validates that user input is valid and not blank
function validateInput(input) {
  if (input.trim() == "") {
    console.log("Please Answer All Required Questions");
  } else {
    return true;
  }
}

// function to write README file
function writeToFile(fileName, data) {
  writeFileAsync(fileName, data)
    .then(console.log("Successfully created " + fileName + "."))
    .catch((err) => {
      console.log(err);
    });
}

// function to initialize program
async function init() {
  try {
    // Prompt Inquirer questions
    const userResponses = await inquirer.prompt(questions);

    // Pass Inquirer responses to generateMarkdown
    let fileName = `${userResponses.title
      .toLowerCase()
      .split(" ")
      .join("_")}.md`;

    // write markdown to file
    writeToFile(fileName, generateMarkdown(userResponses));
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
