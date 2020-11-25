// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
## Description:
  ${data.description}

## Table of Contents:

  *Installation 
  *Usage 
  *License 
  *Contributing 
  *Tests
  *Questions

## Installation:
  ${data.installationInstructions}

## Usage:
  ${data.usageInfo}

## License:
  ${data.license}

## Contributing:
  ${data.contribution}

## Test Instructions:
  ${data.testInstructions}

## Questions:
  Link to my GitHub profile <a href="https://github.com/${data.gitHub}">${data.gitHub}</a>
  You can reach me by email at: ${data.email}
`;
}

module.exports = generateMarkdown;
