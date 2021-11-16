const os = require('os');
const {type, release, totalmem, freemem} = os

const user = os.userInfo();
// console.log(user);

console.log(`the system up time is ${os.uptime()} seconds`);

const currentOS = {
    name: type(),
    release: release(),
    totalmem: totalmem(),
    freemem: freemem(),
}

console.log(currentOS);

module.exports.freemem = os.freemem()