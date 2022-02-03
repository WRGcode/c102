"use strict";
//! type casting
const button1 = document.querySelector("button");
const button2 = document.querySelector("#input");
const button3 = document.querySelector("#input");
const button4 = document.querySelector("#input");
button4.value;
let names;
// let lames: Array<string> // old
const promise = new Promise((resolve, reject) => {
    setTimeout(() => { resolve("10 shellings"); }, 2000);
    reject();
});
promise.then((data) => {
    data.split(" ");
});
//! Generics
function merge(objA, objB) {
    return Object.assign(objA, objB);
}
const mergeObj = merge({ name: "himmy" }, { age: 30 });
mergeObj.age;
function countAndDexcribe(value) {
    let descText = 'got no value';
    if (value.length === 1) {
        descText = 'got 1 value';
    }
    else if (value.length > 1) {
        descText = "got" + value.length + "values";
    }
    return [value, descText];
}
