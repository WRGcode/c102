const {readFile,writeFile} = require('fs')

console.log('start');
    //return a promise
readFile('./content/first.txt', 'utf8', (err, result) =>{
    if (err) {
        console.log(err);
        return;
    }
    const first = result;
    readFile('./content/second.txt', 'utf8', (err, result) =>{
        if(err){
            console.log(err);
            return;
        }
        const second = result;
        writeFile('./content/async-result.txt',
        `here is the result: \n${first} \n${second}`,
    {flag: 'w'},
        (err, result)=>{
            if (err) {
                console.log(err);
                return
            }
            console.log("done with task");
        })
    })
})

console.log(first);
console.log('starting next task');
console.log(second);