const Position = {
    JUNIOR: 'Junior',
    MIDDLE: 'Middle',
    SENIOR: 'Senior'
}

class Developer {
    constructor(fullName, age, position) {
        this.fullName = fullName;
        this.age = age;
        if(!Object.values(Position).includes(position)) {
            throw new Error('Position must be included in Position type');
        }
        this.position = position;
        this.technologies = []
    }

    code() {
    }

    learnNewTechnologies(technology) {
        this.technologies.push(technology);
    }
}

class JuniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, Position.JUNIOR);
        this.technologies = ['HTML', 'CSS', 'JavaScript'];
    }

    code() {
        console.log("Junior-разработчик пишет код...")
    }
}

class MiddleDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, Position.MIDDLE);
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React'];
    }

    code() {
        console.log("Middle-разработчик пишет код...")
    }
}

class SeniorDeveloper extends Developer {
    constructor(fullName, age) {
        super(fullName, age, Position.SENIOR);
        this.technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];
    }

    code() {
        console.log("Senior-разработчик пишет код...")
    }
}


const developer = new Developer("Alex", 34, Position.SENIOR);

console.log(developer);