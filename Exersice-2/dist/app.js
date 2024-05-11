"use strict";
// function greet(person: string) {
//     return "Hello, " + person;
// }
//
// console.log(greet("TypeScript"));
class Human {
    get noOfLegs() {
        return this._noOfLegs;
    }
    set noOfLegs(value) {
        this._noOfLegs = value;
    }
    get noOfHands() {
        return this._noOfHands;
    }
    set noOfHands(value) {
        this._noOfHands = value;
    }
    constructor(noOfLegs, noOfHands) {
        this._noOfLegs = noOfLegs;
        this._noOfHands = noOfHands;
    }
    run() {
        console.log("Human is running");
    }
}
class Employee extends Human {
}
class Dog {
    run() {
        console.log("Dog is running");
    }
}
let human = new Human(2, 2);
console.log(human.noOfLegs);
human.run();
