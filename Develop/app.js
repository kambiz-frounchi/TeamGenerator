const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const util = require("util");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const Employee = require("./lib/Employee");

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

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

const employees = [];

//ask what time of employee the user intends to add
//ask questions regarding employee
//ask whether the user intends to add any more employees

ask = async () => {
    const { employeeType } = await inquirer.prompt(typeOfEmployeeQuestion);
    const { employeeName, employeeId, employeeEmail } = await inquirer.prompt(employeeQuestions);
    if (employeeType === `Manager`) {
        const { officeNumber } = await inquirer.prompt(managerQuestions);
        const manager = new Manager(employeeName, employeeId, employeeEmail, officeNumber);
        employees.push(manager);
    } else if (employeeType === `Engineer`) {
        const { githubUsername } = await inquirer.prompt(engineerQuestions);
        const engineer = new Engineer(employeeName, employeeId, employeeEmail, githubUsername);
        employees.push(engineer);
    } else if (employeeType === `Intern`) {
        const { school } = await inquirer.prompt(internQuestions);
        const intern = new Intern(employeeName, employeeId, employeeEmail, school);
        employees.push(intern);
    }

    inquirer.prompt(anotherEmployeeQuestion).
    then((answers) => {
        if (answers.anotherEmployee) {
            ask();
        } else {
            const html = render(employees);
            writeFile(outputPath, html).catch((err) => {
                console.log(err);
            });
        }
    });
};

ask();
