const number = require('./01-intro')
const log = require('./03-moduleFunctions')
const {kids, num2, num3} = require('./04-globals')
const freeMem = require('./05-os-module')

const {num} = number

//APIKEY is a local variable
//unseeable from the base file
const APIKEY = "gefyusjfusbefi";

log(freeMem)
log(num + ' logging' + num2,) //short
console.log(number.num + 10 + num3); //long