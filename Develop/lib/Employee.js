class Employee {
    constructor (name, id, email) {
        this.role = `Employee`;
        if (name) {
            if (typeof(name) != `string`) {
                throw Error(`name has to be a string`);
            }
            this.name = name;
        }

        if (id) {
            if (typeof(id) != `number`) {
                throw Error(`id has to be a number`);
            }
            this.id = id;
        }
        
        if (email) {
            this.email = email;
        }
    }

    getName () {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return this.role;
    }
}

module.exports = Employee;