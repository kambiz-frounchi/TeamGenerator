const Employee = require(`./Employee`);

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        super(name, id, email);
        this.role = `Manager`;
        if (officeNumber) {
            this.officeNumber = officeNumber;
        }
    }

    getOfficeNumber() {
        return this.officeNumber;
    }
}

module.exports = Manager;