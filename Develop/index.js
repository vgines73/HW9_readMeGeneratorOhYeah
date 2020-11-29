const { log } = require("console");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        message: "Enter the title of the project.",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a brief description (1-2 sentences) about the project.",
        name: "description"
    },
    {
        type: "input",
        message: "Enter installation instructions",
        name: "installationInstructions"
    },
    {
        type: "input",
        message: "Enter usage information",
        name: "usageInfo"
    },
    {
        type: "input",
        message: "Enter contribution guidelines.",
        name: "contribution"
    },
    {
        type: "input",
        message: "Enter test instructions.",
        name: "testInstructions"
    },
    {
        type: "list",
        message: "Choose a License.",
        choices: ["MIT", "Apache", "GNU GPLv3"],
        name: "license"
    },
    {
        type: "input",
        message: "Enter your GitHub username.",
        name: "gitHub"
    },
    {
        type: "input",
        message: "Enter your Email Address.",
        name: "email"
    },
    // {
    //     type: "input",
    //     message: "Enter the link for your screenshot image",
    //     name: "screenshot"
    // }

];

// function to initialize program
function init() {
    const inquirer = require("inquirer")
    const fs = require("fs")
    
    inquirer.prompt(questions).then((data) => {
        //console.log(data);
        data.licenseImg = userChoice(data.license)
        //console.log(licenseImg)
        fs.writeFile("readme.md", generateMarkdown(data), (err) => {
            //console.log(licenseImg);
            if (err) throw err;
            console.log("complete")
        }) 
    })
}

// Switch Statement to Return License Image
function userChoice(choice){
    switch (choice) {
        case "MIT":
            return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        
        case "Apache":
            return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

        case "GNU GPLv3":
            return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    
        default:
            break;
    }
    console.log(choice)
}
// function call to initialize program
init();
