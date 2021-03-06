const questions = {
  idArray: [],
  managerQuestions: [
    {
      type: "input",
      name: "name",
      message: "What is the team manager's name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is the team manager's id?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return "Please enter a positive number greater than zero.";
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the team manager's email?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return "Please enter a valid email address.";
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the team manager's office number?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          return true;
        }
        return "Please enter a positive number greater than zero.";
      },
    },
  ],
  engineerQuestions: [
    {
      type: "input",
      name: "name",
      message: "What is your engineer's name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your engineer's id?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          if (questions.idArray.includes(answer)) {
            return "This ID is already taken. Please enter a different number.";
          } else {
            return true;
          }
        }
        return "Please enter a positive number greater than zero.";
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your engineer's email?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return "Please enter a valid email address.";
      },
    },
    {
      type: "input",
      name: "github",
      message: "What is your engineer's GitHub username?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
  ],
  internQuestions: [
    {
      type: "input",
      name: "name",
      message: "What is your intern's name?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
    {
      type: "input",
      name: "id",
      message: "What is your intern's id?",
      validate: (answer) => {
        const pass = answer.match(/^[1-9]\d*$/);
        if (pass) {
          if (questions.idArray.includes(answer)) {
            return "This ID is already taken. Please enter a different number.";
          } else {
            return true;
          }
        }
        return "Please enter a positive number greater than zero.";
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is your intern's email?",
      validate: (answer) => {
        const pass = answer.match(/\S+@\S+\.\S+/);
        if (pass) {
          return true;
        }
        return "Please enter a valid email address.";
      },
    },
    {
      type: "input",
      name: "school",
      message: "What is your intern's school?",
      validate: (answer) => {
        if (answer !== "") {
          return true;
        }
        return "Please enter at least one character.";
      },
    },
  ],
  teamQuestions: [
    {
      type: "list",
      name: "memberChoice",
      message: "Which type of team member would you like to add?",
      choices: ["Engineer", "Intern", "I don't want to add any more team members"],
    },
  ],
};

module.exports = questions;
