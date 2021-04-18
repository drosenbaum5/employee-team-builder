const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const {
  managerQuestions,
  teamQuestions,
  engineerQuestions,
  internQuestions,
  idArray
} = require("./questions");
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

console.log(uuidv4())

// Starts the app
menu = () => {
  createManager = () => {
    inquirer.prompt(managerQuestions).then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      idArray.push(id);
      console.log(idArray)
      console.log(manager);
      addTeamMembers();
    });
    addTeamMembers = () => {
      inquirer.prompt(teamQuestions).then((choice) => {
        console.log(choice.memberChoice);
        switch (choice.memberChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            createIntern();
            break;

          default:
            // buldTeam();
            break;
        }
      });
    };

    createEngineer = () => {
      inquirer.prompt(engineerQuestions).then(({ name, id, email, github }) => {
        const engineer = new Engineer(name, id, email, github);
        idArray.push(id);
        console.log(engineer);
      });
    };

    createIntern = () => {
      inquirer.prompt(internQuestions).then(({ name, id, email, school }) => {
        const intern = new Intern(name, id, email, school);
        idArray.push(id);
        console.log(intern);
      });
    };
  };

  // Called after menu. Starts inquirer prompt.
  createManager();
};

// Start the application
menu();
