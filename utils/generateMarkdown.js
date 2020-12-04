// const axios = require("axios");

// function to generate markdown for README
function generateMarkdown(data, repoName) {
  // switch case to determine the license badge at the top of the markdown file
  var licenseBadge;
  switch (data.license) {
    case "Apache":
      licenseBadge =
        "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
      licenseInfo =
        "[**Apache 2.0**](https://opensource.org/licenses/Apache-2.0)";
      break;
    case "GNU GPL":
      licenseBadge =
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
      licenseInfo =
        "[**GNU General Public License**](https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "ISC":
      licenseBadge =
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
      licenseInfo = "[**ISC**](https://opensource.org/licenses/ISC)";
      break;
    case "MIT":
      licenseBadge =
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
      licenseInfo = "[**MIT**](https://opensource.org/licenses/MIT)";
      break;
    case "Mozilla":
      licenseBadge =
        "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
      licenseInfo = "[**MPL 2.0**](https://opensource.org/licenses/MPL-2.0)";
      break;
    case "Open Data Commons":
      licenseBadge =
        "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
      licenseInfo =
        "[**Open Data Commons Attribution**](https://opendatacommons.org/licenses/by/)";
      break;
  }

  // axios
  //   .get(`https://api.github.com/repos/${data.username}/${data.repo}`)
  //   .then((res) => {
  //     console.log("Link to repository: " + res.data.html_url);
  //     console.log("Description: " + res.data.description);
  //     console.log("Demo Link: " + res.data.homepage);
  //   });

  return `# ${data.title}

  ${licenseBadge}

  ## Description
  ${data.description}

  ## Table of Contents
  - [**Installation**](#installation)
  - [**Usage**](#usage)
  - [**License**](#license)
  - [**Contributing**](#contributing)
  - [**Tests**](#tests)
  - [**Questions**](#questions)
  
  ## Installation
  ${data.installationInstructions}

  ## Usage
  ${data.usageInfo}

  ## License
  This project is licensed under the ${licenseInfo} license.

  ## Contributing
  ${data.contributionGuidelines}

  ## Tests
  ${data.testInstructions}

  ## Questions

  Please use the contact information below if you would like to reach me with any questions.

  Github Profile: [**@${data.username}**](https://github.com/${data.username})
  Email: [**${data.email}**]`;
}

module.exports = generateMarkdown;
