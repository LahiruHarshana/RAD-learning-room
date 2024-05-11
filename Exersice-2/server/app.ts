// function greet(person: string) {
//     return "Hello, " + person;
// }
//
// console.log(greet("TypeScript"));

interface Animal {
    run(): void;
}
class Human implements Animal {
    run() {
        console.log("Human is running");
    }
}
class Dog implements Animal {
    run() {
        console.log("Dog is running");
    }
}