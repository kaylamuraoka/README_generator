// Declaring the required dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

// Require Internal modules
const generateMarkdown = require("./utils/generateMarkdown");
const getRepos = require("./utils/getRepos");
const { connect } = require("http2");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project:",
  },
  {
    type: "input",
    name: "installationInstructions",
    message: "Enter installation instructions:",
  },
  {
    type: "input",
    name: "usageInfo",
    message: "Enter usage information:",
  },
  {
    type: "input",
    name: "contributionGuidelines",
    message: "Enter contribution guidelines:",
  },
  {
    type: "input",
    name: "testInstructions",
    message: "Enter test instructions:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["Apache", "GNU", "ISC", "MIT", "Mozilla", "Open Data Commons"],
  },
  {
    type: "input",
    name: "username",
    message: "Enter your Github username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email:",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  writeFileAsync(fileName, data, (err) =>
    err
      ? console.log(err)
      : console.log(
          "Success! The following markdown file has been generated: " +
            fileName +
            "."
        )
  );
}

// function to initialize program
async function init() {
  try {
    // Prompt Inquirer questions
    const userResponses = await inquirer.prompt(questions);

    console.log(getRepos(userResponses.username));

    // Pass Inquirer responses to generateMarkdown
    const markdownContent = generateMarkdown(userResponses);

    // write markdown to file
    let fileName = `${userResponses.title
      .toLowerCase()
      .split(" ")
      .join("_")}.md`;

    await writeToFile(fileName, markdownContent);
  } catch (err) {
    console.log(err);
  }
}

// function call to initialize program
init();
