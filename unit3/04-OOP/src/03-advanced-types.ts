//! type casting

const button1 = document.querySelector("button")
const button2 = document.querySelector("#input") as HTMLInputElement
const button3 = <HTMLInputElement>document.querySelector("#input")
const button4: HTMLInputElement = document.querySelector("#input")!

button4.value

let names: string[]
// let lames: Array<string> // old

const promise: Promise<string> = new Promise((resolve: any, reject: any) => {
    setTimeout(() => { resolve("10 shellings") }, 2000)

    reject()
})

promise.then((data)=>{
    data.split(" ")
})

//! Generics
function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergeObj = merge({name:"himmy"}, {age: 30})

mergeObj.age;

interface HasLenght {
    length: number
}

function countAndDexcribe<T extends HasLenght>(value:T) : [T, string] {
    let descText = 'got no value'
    if(value.length === 1) {
        descText = 'got 1 value'
    }else if (value.length > 1) {
        descText = "got" + value.length + "values"
    }

    return [value, descText]
}