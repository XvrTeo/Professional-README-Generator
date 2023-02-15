// Dependencies needed for this application

const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Create writeToFile function to write README file

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log(`File '${filename}' created successfully!`);
        }
    });
}

// Create function to initialize app followed by array of questions for user input

function init() {

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'title',
                message: "What is your project's title?",
            },
            {
                type: 'input',
                name: 'description',
                message: 'Please provide a brief description of your project:',
            },
            {
                type: 'input',
                name: 'installation',
                message: 'Please provide installation instructions:',
            },
            {
                type: 'input',
                name: 'usage',
                message: 'Please provide usage instructions:',
            },
            {
                type: 'input',
                name: 'contributing',
                message: 'Please provide contribution guidelines:',
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Please provide testing instructions:',
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please choose a license for your project:',
                choices: ['MIT', 'Apache', 'GPL'],
            },
        ])

        .then((answers) => {
            const markdown = generateMarkdown(answers);
            writeToFile('README.md', markdown);
        });
}

// Function call to initialize app
init();
