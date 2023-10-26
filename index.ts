import inquirer from "inquirer";

class Person {
    interact() {
        throw new Error("Method not implemented.");
    }
    name: string;
    personality: string;

    constructor(name: string, personality: string) {
        this.name = name;
        this.personality = personality;
    }

    greetUser(howAreYou: string) {
        if (howAreYou === "good") {
            return `${this.name} says: I am also good.`;
        } else if (howAreYou === "bad") {
            return `${this.name} says: I am feeling the bad.`;
        } else {
            return `${this.name} says: My day goes well as well.`;
        }
    }

    location(city: string) {
        return `${this.name} says: I live in India.`;
    }

    talkAbout(topic: string) {
        return `${this.name} says: I also want to talk about ${topic}.`;
    }

    getPersonality() {
        return `You mentioned that ${this.name} is an ${this.personality}.`;
    }
}

class Student extends Person {
    constructor(name: string, personality: string) {
        super(name, personality);
    }

    async interact() {
        const howAreYou = await inquirer.prompt([
            {
                type: "list",
                name: "howAreYou",
                message: `${this.name}: How are you today?`,
                choices: ["good", "bad", "normal"],
            },
        ]);

        console.log(this.greetUser(howAreYou.howAreYou));

        const whereDoYouLive = await inquirer.prompt([
            {
                type: "input",
                name: "whereDoYouLive",
                message: `${this.name}: Where do you live?`,
            },
        ]);

        console.log(this.location(whereDoYouLive.whereDoYouLive));

        const whatDoYouWant = await inquirer.prompt([
            {
                type: "input",
                name: "whatDoYouWant",
                message: `${this.name}: What do you want to talk about?`,
            },
        ]);

        if (whatDoYouWant.whatDoYouWant.trim() !== "") {
            console.log(this.talkAbout(whatDoYouWant.whatDoYouWant));
        } else {
            console.log(this.talkAbout("acting"));
        }

        const urveshiPersonality = await inquirer.prompt([
            {
                type: "list",
                name: "urveshiPersonality",
                message: "What is Urveshi's personality?",
                choices: ["Extrovert", "Introvert", "Ambivert"],
            },
        ]);

        this.personality = urveshiPersonality.urveshiPersonality;

        console.log(this.getPersonality());
    }
}

const urveshi = new Student("Urveshi", "Extroverted");

const programStart = async (persons: Person[]) => {
    console.log("Welcome guest");
    await urveshi.interact();
}

programStart([urveshi]);
