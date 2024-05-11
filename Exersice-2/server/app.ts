// function greet(person: string) {
//     return "Hello, " + person;
// }
//
// console.log(greet("TypeScript"));

interface Animal {
    run(): void;
}
class Human implements Animal {
    get noOfLegs(): number {
        return this._noOfLegs;
    }

    set noOfLegs(value: number) {
        this._noOfLegs = value;
    }

    get noOfHands(): number {
        return this._noOfHands;
    }

    set noOfHands(value: number) {
        this._noOfHands = value;
    }

    private _noOfLegs: number;
    private _noOfHands: number;
    constructor(noOfLegs: number, noOfHands: number) {
        this._noOfLegs = noOfLegs;
        this._noOfHands = noOfHands;
    }
    run() {
        console.log("Human is running");
    }
}

class Employee extends Human {

}
class Dog implements Animal {
    run() {
        console.log("Dog is running");
    }
}