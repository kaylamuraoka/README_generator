# README.md Generator Using Node.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

When creating an open source project on Github, it’s important to have a high-quality README for the app. README (as the name suggests "read me") is the first file Github or any Git hosting site displays when someone opens your repository. It contains a set of useful instructions and information about a project, such as what the app is for, how to use the app, how to install it, how to report issues, and how to make contributions-this last part increases the likelihood that other developers will contribute to the success of the project. You can quickly and easily create a README file by using a command-line application to generate one. This allows the project creator to devote more time to working on the project.

Therefore, this is a command-line application that dynamically generates a professional README.md file from user's input using Node.js.

### New Concepts

Functions running in parallel with other functions are called asynchronous functions (ex: `setTimeout(printMessage, 3000) `). A callback function is passed as a parameter to another function, and then called back right after something has happened or some task is completed. A promise is a returned object to which you attach callbacks, instead of passing callbacks into a function.

### Demonstration

![demonstration of application](./demo.gif)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

To install the necessary dependencies, run the following commands:

```
npm init
npm i inquirer
npm i axios
```

The [**axios**](https://www.npmjs.com/package/axios) module is a Promise based HTTP client for the browser and node.js.

The [**inquirer**](https://www.npmjs.com/package/inquirer) module is a collection of common interactive command line user interfaces.

## Usage

To use this app, run the index.js file in the project folder. A series of prompts will be generated, answer each question and press enter.

This can be invoked by the following command:

```
node index.js
```

## License

This project is licensed under the [**MIT**](https://opensource.org/licenses/MIT) license.

## Contributing

All comments and suggestions regarding improvements to this project are welcomed. To contribute to this project, clone this [**project repository**](https://github.com/kaylamuraoka/README_generator) locally and commit your code on a separate branch. You may then modify the code to your liking, submit well-formed pull requests and open useful issues. For steps on how to clone a repository using the command line, read this section of the Github Docs [**about cloning a repository**](https://docs.github.com/en/free-pro-team@latest/github/creating-cloning-and-archiving-repositories/cloning-a-repository#about-cloning-a-repository).

## Tests

Tests were performed, this README.md was created using this tool.

## Questions

Please use the contact information below if you would like to reach me with any questions:

- Github Profile: [**@kaylamuraoka**](https://github.com/kaylamuraoka)
- Email: **kmurs98@gmail.com**
