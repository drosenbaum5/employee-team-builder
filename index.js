const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const {
  managerQuestions,
  teamQuestions,
  engineerQuestions,
  interQuestions,
} = require("./questions");
const path = require("path");
const fs = require("fs");

// Starts the app
menu = () => {
  createManager = () => {
    inquirer.prompt(managerQuestions).then(({ name, id, email, officeNumber }) => {
      const manager = new Manager(name, id, email, officeNumber);
      console.log(manager);
      buildTeam();
    });
    buildTeam = () => {
      inquirer.prompt(teamQuestions).then((choice) => {
        console.log(choice.memberChoice);
        switch (choice.memberChoice) {
          case "Engineer":
            createEngineer();
            break;
          case "Intern":
            // createIntern();
            break;

          default:
            // buldTeam();
            break;
        }
      });
      createEngineer = () => {
        inquirer.prompt(engineerQuestions).then(({ name, id, email, github }) => {
          const engineer = new Engineer(name, id, email, github);
          console.log(engineer);
        });
      };
    };
  };

  createManager();
};

menu();
