const {readFileSync, writeFileSync} = require('fs')
console.log('start');
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

writeFileSync(
    './content/snyc-result.txt',
    `here is the result: \n${first}, \n${second}`,
        //oppions go here  
    {flag: 'a'}
)

console.log(second);
console.log('finished');
console.log(first);