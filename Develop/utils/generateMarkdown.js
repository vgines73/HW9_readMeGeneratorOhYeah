// function to generate markdown for README
function generateMarkdown(data) {
  return `# **${data.title}**
## Description:
  ${data.description}

## Table of Contents:

  * [Installation](#Installation)

  * [Usage](#Usage)

  * [License](#License)

  * [Contributing](#Contributing) 

  * [Test Instructions](#Test-Instructions)

  * [Screenshots](#Screenshots)

  * [Questions](#Questions)


## Installation:
  ${data.installationInstructions}

## Usage:
  ${data.usageInfo}

## License:
  ${data.licenseImg}

## Contributing:
  ${data.contribution}

## Test Instructions:
  ${data.testInstructions}

  ---
## Questions:
  Link to my GitHub profile: https://github.com/${data.gitHub}

  You can reach me by email at: ${data.email}
`;
}

module.exports = generateMarkdown;
