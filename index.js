const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');
const fs = require('fs');
const employees = [];

const addManager = () => {
    console.log(`
    
           Add Manager

        `);

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is their name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is their id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is their email?"
            },
            {
                type: 'input',
                name: 'office',
                message: 'What is their office number?'
            }
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
            employees.push(manager);
            addEmployee()
        });
}

const addEmployee = employeeData => {
    console.log(`
    
     Add New Employee
    
    `);

    inquirer
        .prompt([

            {
                type: 'list',
                name: 'role',
                message: "What is this employees' role? (Select 'Finished' when you are done adding employees)",
                choices: ['Engineer', 'Intern', 'Finished']
            }
        ]).then(({ role }) => {
            if (role === 'Engineer') {
                addEngineer();
            } else if (role === 'Intern') {
                addIntern();
            } else {
                writeFile();
            }
        });
}

const addEngineer = () => {
    console.log(`
        
           Add Engineer
        
        `);

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is their name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is their id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is their email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is their github username?"
            }
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            employees.push(engineer);
            addEmployee();
        });
}

const addIntern = () => {
    console.log(`
    
        Add Intern
    
    `);

    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is their name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is their id number?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is their email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What school do they go to?"
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
            employees.push(intern);
            addEmployee();
        });
}

function writeFile (){
    fs.writeFile('./dist/index.html', generatePage(employees), err =>{
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team page has been generated!");
            copyFile();
        }
    });
 
}

function copyFile (){
    fs.copyFile('./src/style.css', './dist/style.css/', err =>{
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Stylesheet created!");
        }
    })
}

addManager()