const str = 'test1 test_01.js coding.css script.js testing-coding'
const str2 = 'xf.'
const str3 = 'Mr. Jane'

// const re = /[a-z]/g  //all lowercase
// const re = /[a-z ]/g  //all lowercase and spaces
// const re2 = /[akx][d-m]\./ //starts with a,k,x next letter is d-m ends with .
const re3 = /M[rs]\. [A=Z][a=z][a=z][a=z]/ //starts with Mr. or Ms. then a space then a 4 letter name letter is caps


// console.log(str.match(re));
// console.log(str2.match(re2));
console.log(str3.match(re3));

