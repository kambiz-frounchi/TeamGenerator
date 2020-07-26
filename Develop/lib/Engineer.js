const Employee = require (`./Employee`);

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.role = `Engineer`;
        if (github) {
            this.github = github;
        }
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;