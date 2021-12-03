/* 
start with Mr. Mrs. Ms. Dr. Er.
has a sapce apart
ends with a word that starts with a cap and has any amount lowercase after
*/
const name1 = 'Mr. E' //yes
const name2 = 'Mrs. Grand' //yes
const name3 = 'ms. jo' // no cap
const name4 = 'WilliamE' // no title

const re = /(Mr|Ms|Mrs|Dr|Er)\. [A-Z][a-z]*/

console.log( 
    re.test(name1),
    re.test(name2),
    re.test(name3),
    re.test(name4),
);
