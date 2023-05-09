const strings = ["a", "b", "c", "d"];
// 4 items * 4 shelves of memory = 16 Bytes of Storage
strings.splice(2, 0, "z")



class Player {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }

    introduce() {
        console.log(`Hi I am ${this.name} and I am a ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type, wizardType) {
        super(name, type)
        this.wizardType = wizardType
    }
    wizard_introduce() {
        console.log(`Hi I am ${this.name} and I am a ${this.type}. I am a ${this.wizardType} wizard.`)
    }
}

const gamer = new Player("Max", "Knight");

const wizardGamer = new Wizard("Josh", "Wizard", "Healer");
wizardGamer.introduce()