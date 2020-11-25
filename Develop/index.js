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
        type: "choices",
        message: "Choose a License.",
        choices: ["MIT", "GNU", "GPLv3"],
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

];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
