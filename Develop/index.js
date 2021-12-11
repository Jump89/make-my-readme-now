// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const questions = require('./utils/questions');
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
// in questions.js
// add more questions 

// fs.writeFileSync('myfile.txt', "stuff to save")
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        }

        console.log("Success! Your README.md file has been generated")
    });
}
// const writeFileAsync = util.promisify(writeToFile);  /// promisify call back used in node and javascript 
// // writeFile("/myfile.txt", () =>  {
// //     console.log("done saving !")
// // })
// // TODO: Create a function to initialize app
async function init() {
    try {
        inquirer.prompt(questions)
            .then(answers => writeToFile("README.md", generateMarkdown(answers)))
        // // Prompt Inquirer questions
        // const userResponses = await inquirer.prompt(questions);
        // console.log("Your responses: ", userResponses);
        // console.log("Thank you for your responses! Fetching your GitHub data next...");

        // // Call GitHub api for user info
        // const userInfo = await api.getUser(userResponses);
        // console.log("Your GitHub user info: ", userInfo);

        // // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        // console.log("Generating your README next...")
        // const markdown = generateMarkdown(userResponses, userInfo);
        // console.log(markdown);

        // // Write markdown to file
        // await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

// Function call to initialize app
init();

// const generatePage = require('./src/page-template');

// const pageHTML = generatePage(name, github);

// fs.writeFile('./index.html', pageHTML, err => {
//   if (err) throw err;

//   console.log('Portfolio complete! Check out index.html to see the output!');
// });


