var questions = [{
    type: "input", // Not ness inpit is default value
     message: "What is your github username?", 
     name: "username", 
     validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub username is required.");
        }
        return true;
    }
}, {
    type: "input", 
    message: "What's the name of your GitHub Repo?", 
    name: "repo", 
    default: "potential-enigma", 
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("A valid GitHub repo is required.");
        }
        return true;
    }
}, {
    type: 'list',
    message: "Choose a license for your project.",
    choices: ['GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License'],
    name: 'license'
},
{
    type: "input", 
    message: "Please enter any contribution?", 
    name: "contribution", 
    default: "No Contribution is allowed!", 
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Allow and wha type of contruibution .");
        }
        return true;
    }
   },

   {
    type: "input", 
    message: "What is your projects title ?", 
    name: "title",  
    validate: function (answer) {
        if (answer.length < 1) {
            return console.log("Not a valid name for project, please write a valid project name");
        }
        return true;
   }
},
    {
        type: "input", 
        message: "What is your email?", 
        name: "email",  
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid email.");
            }
            return true;
       }
    },
    {
        type: "input", 
        message: "What is the description for your project?", 
        name: "description",  
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter a valid description.");
            }
            return true;
       }
    },
    {
        type: "input", 
        message: "Do you have any test?", 
        name: "test",  
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter a valid description.");
            }
            return true;
       }
    },
    {
        type: "input", 
        message: "What is the use of this repo?", 
        name: "usage",  
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter a valid usage detail.");
            }
            return true;
       }
    },
    {
        type: "input", 
        message: "Is there any installation requirements?", 
        name: "installation",  
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("Enter a valid answer.");
            }
            return true;
       }
    }
    
    
]
    


module.exports = questions 