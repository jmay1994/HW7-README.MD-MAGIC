// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type:'input',
        message: "Please enter your project title!",
        name: 'title'
    },
    {
        type:'input',
        message: "Please enter your project description!",
        name: 'description'
    },
    {
        type:'input',
        message: "Please enter your project installation instructions!",
        name: 'installation'
    },
    {
        type:'input',
        message: "Please enter your project usage instructions!",
        name: 'usage'
    },
    {
        type:'input',
        message: "Please enter your project contribution guidelines!",
        name: 'contribution'
    },
    {
        type:'input',
        message: "Please enter your project test instructions!",
        name: 'test'
    },
    {
        type:'checkbox',
        message: "Please choose a license for the upcoming project:",
        name: 'licenses',
        choices: ['MIT','Mozilla-Public','GNU-General-Public','Common-Development-and Distribution'],
    },
    {
        type:'input',
        message: "Please enter your email!",
        name: 'email'
    },
    {
        type:'input',
        message: "Please enter your GitHub username!",
        name: 'username'
    },
    {
        type:'input',
        message: "Any questions?",
        name: 'questions'
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
        throw err;
        console.log("All good! Doc written.")
    })
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (questions){
        writeToFile("README.md", generateMarkdown(questions));
    });
};

// Function call to initialize app
init();

