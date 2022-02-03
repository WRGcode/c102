
//* if you everadding an interface for a function you should ALWAYS include Fn in the name
interface AddFn {
    (a:number, b:number): number
}

// let add: AddFn;

// add = (n1: number, n2:number) =>{
//     return n1+n2
// }

//! alternative

const add:AddFn = (n1,n2) =>{
return n1+n2
}



interface Named {
readonly name?:string,
outputName?: string
}

interface Greetable extends Named {
    greet(phrase: string): void
}

class Person implements Greetable {
    name?: string
    age = 30

    constructor(n?:string){
        if(n) this.name = n
    }

    greet(phrase: string): void{
        if (this.name) {
            console.log(phrase + " " + this.name);
        } else {
            console.log("welcome");
            
        }
    }
}

let user1: Greetable = new Person

user1.greet("My name is")
console.log(user1);
