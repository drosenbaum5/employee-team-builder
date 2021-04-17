const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, gitUserName) {
    super(name, id, email);
    this.gitUserName = gitUserName;
  }

  getGitHub() {
      return this.gitUserName;
  }

  getRole() {
      return "Engineer";
  }


}


module.exports = Engineer;