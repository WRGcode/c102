"use strict";
// let add: AddFn;
// add = (n1: number, n2:number) =>{
//     return n1+n2
// }
//! alternative
const add = (n1, n2) => {
    return n1 + n2;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n)
            this.name = n;
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + " " + this.name);
        }
        else {
            console.log("welcome");
        }
    }
}
let user1 = new Person;
user1.greet("My name is");
console.log(user1);
