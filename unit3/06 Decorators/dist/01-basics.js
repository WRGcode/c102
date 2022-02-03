"use strict";
//! class deco
// function Logger(constructor: Function) {
//     console.log(constructor);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//! u can change an required param to _ to skip it in compiling
// function Logger(_: Function){
//     console.log("this works");
// }
//! Logger Factory
function Logger(toLog) {
    console.log("Logger factory");
    return function (constructor) {
        console.log(toLog);
        console.log(constructor);
    };
}
//! this creates a decorate that will add the template string to whatever hook we pass though as long as the id exists
function WithTemplate(template, hookId) {
    console.log("TEMP FACTORY");
    return function (_) {
        const hookEl = document.getElementById(hookId);
        const p = new Person();
        if (hookEl) {
            hookEl.innerHTML = template;
            hookEl.querySelector("h1").textContent = p.name;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = "Max";
        console.log("created person");
    }
};
Person = __decorate([
    Logger("CREATING PERSON DECORATOR"),
    WithTemplate("<h1>Person Class Placeholder</h1>", "app")
], Person);
const max = new Person();
console.log(max);
