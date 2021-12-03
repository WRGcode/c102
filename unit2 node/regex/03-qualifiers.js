//phone numbers
const str1 = '(123) 123 1232'
const str2 = '123-123-1232'
const str3 = '1231231232'
const str4 = '(123)123-1232'

const re1 = /^\(?[0-9]{3}[\)-]?[0-9]{3}[ -]?[0-9]{4}$/



// 1-100 only
const num = '3'
const num2 = '92'
const num3 = '100'
const num4 = '101'
const num5 = '04'
const re2 = /^[0-9]$|^[1-9][0-9]$|^100$/

console.log(
    re2.test(num),
    re2.test(num2),
    re2.test(num3),
    re2.test(num4),
    re2.test(num5));

//start with 3 letters 1 optional any special character end with 2-4 even numbers
const password = 'jac_2468'
const password2 = 'az'
const password3 = '1320094'

const re3 =/^[a-zA-Z]{3}[^a-zA-Z0-9\n\t]?[02468]{2,4}/
// console.log(
        // re3.test(password),
        // re3.test(password2),
        // re3.test(password3),)