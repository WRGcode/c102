const str = 'test1 test_01.js coding.css script.js testing-coding'
// const re = /test/ //single search
const reg = /test/g // global search

// console.log(re.test(str));
// console.log(re.exec(str));
// console.log(str.match(re));
// console.log(str.replace(re, 'scriptin'));

console.log(reg.test(str));
console.log(reg.exec(str));
console.log(str.match(reg));
console.log(str.replace(reg, 'scriptin'));