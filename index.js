// Required dependencies
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Prompt user for information about the project
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please provide a description of your project:',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide installation instructions:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please provide usage information:',
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please provide contribution guidelines:',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide test instructions:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license do you want to use?',
            choices: ['MIT', 'GPLv2', 'Apache'],
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then((data) => {
        const markdown = generateMarkdown(data);
        
        // Create README file with markdown content
        fs.writeFile('README.md', markdown, (err) =>
            err ? console.log(err) : console.log('README.md file has been created!')
        );
    });
