const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

const typeOfEmployeeQuestion = [
    {
        type: `list`,
        name: `employeeType`,
        message: `What type of employee do you intend to add?`,
        choices: [`Manager`, `Engineer`, `Intern`]
    },
]

const anotherEmployeeQuestion = [
    {
        type: `confirm`,
        name: `anotherEmployee`,
        message: `Do you intend to add another employee (just hit enter for YES)?`,
        default: true
    },    

]
const employeeQuestions = [
    {
        type: `input`,
        name: `employeeName`,
        message: `What is the employee's name?`
    },
    {
        type: `number`,
        name: `employeeId`,
        message: `What is the employee's ID (must be a unique number)?`
    },
    {
        type: `input`,
        name: `employeeEmail`,
        message: `What is the employee's email?`
    }    
]

const managerQuestions = [
    {
        type: `input`,
        name: `officeNumber`,
        message: `what is the manager's office number?`
    }
]

const engineerQuestions = [
    {
        type: `input`,
        name: `githubUsername`,
        message: `What is the engineer's github username?`
    }
]

const internQuestions = [
    {
        type: `input`,
        name: `school`,
        message: `What is the intern's school name?`
    }
]

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

//ask what time of employee the user intends to add
//ask questions regarding employee
//ask whether the user intends to add any more employees

/*
handleEmployee = async (employeeType) => {
    const {employeeName, employeeId, employeeEmail} = await inquirer.prompt(employeeQuestions);
    console.log(employeeType);
    if (employeeType === `Manager`) {
        const { officeNumber } = await inquirer.prompt(managerQuestions);
        const manager = new Manager(employeeName, employeeId, employeeEmail, officeNumber);
        console.log(manager);
    } else if (employeeType === `Engineer`) {
        const { githubUsername } = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(employeeName, employeeId, employeeEmail, githubUsername);
        console.log(engineer);
    } else if (employeeType === `Intern`) {
        const { school } = await inquirer.prompt(internQuestions);
        const intern = new Intern(employeeName, employeeId, employeeEmail, school);
        console.log(intern);
    }
};
*/

ask = async () => {
    const { employeeType } = await inquirer.prompt(typeOfEmployeeQuestion);
    const { employeeName, employeeId, employeeEmail } = await inquirer.prompt(employeeQuestions);
    if (employeeType === `Manager`) {
        const { officeNumber } = await inquirer.prompt(managerQuestions);
        const manager = new Manager(employeeName, employeeId, employeeEmail, officeNumber);
        console.log(manager);
    } else if (employeeType === `Engineer`) {
        const { githubUsername } = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(employeeName, employeeId, employeeEmail, githubUsername);
        console.log(engineer);
    } else if (employeeType === `Intern`) {
        const { school } = await inquirer.prompt(internQuestions);
        const intern = new Intern(employeeName, employeeId, employeeEmail, school);
        console.log(intern);
    }

    inquirer.prompt(anotherEmployeeQuestion).
    then((answers) => {
        if (answers.anotherEmployee) {
            ask();
        }
    });
};

ask();

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

