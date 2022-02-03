
//! class deco
// function Logger(constructor: Function) {
//     console.log(constructor);
// }

//! u can change an required param to _ to skip it in compiling
// function Logger(_: Function){
//     console.log("this works");

// }
//! Logger Factory
function Logger(toLog: string) {
    console.log("Logger factory")
    return function (constructor: Function) {
        console.log(toLog);
        console.log(constructor);


    }
}

//! this creates a decorate that will add the template string to whatever hook we pass though as long as the id exists
function WithTemplate(template: string, hookId: string) {
    console.log("TEMP FACTORY");
    return function (_: Function) {
        const hookEl = document.getElementById(hookId)
    const p = new Person()
        if (hookEl) {
            hookEl.innerHTML = template
            hookEl.querySelector("h1")!.textContent = p.name;
        }
    }
}

@Logger("CREATING PERSON DECORATOR")
@WithTemplate("<h1>Person Class Placeholder</h1>", "app")
class Person {
    name = "Max"

    constructor() {
        console.log("created person");

    }
}

const max = new Person()

console.log(max);
