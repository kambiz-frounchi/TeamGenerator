class Employee {
    constructor (name, id, email) {
        this.role = `Employee`;
        if (name) {
            this.name = name;
        }

        if (id) {
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