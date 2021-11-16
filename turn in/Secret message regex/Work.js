const fs = require("fs");
const input = fs.readFileSync("./reader.txt", "utf8");

// const tester1 = "@d"; // d
// const tester2 = "@denver"; // denver
// const tester3 = "@Den3ver"; // Den
// const tester4 = "@#den"; // "none"

const re1 = /@([A-Za-z]+)/g;
// ✔️✔️

let cities = "";

let match = re1.exec(input);
while (match) {
  cities += `${match[1]}`;
  match = re1.exec(input);
}
cities = cities.match(/\w{18}/g);
console.log(cities);

// const tester1v2 = "0spy1kids3°"; //PASS - 013°
// const tester2v2 = "95GrA4UTa’"; //PASS - 54’
// const tester3v2 = "Ht2hgo0qqq."; //PASS - 20.
// const tester4v2 = "4Ppou”ggkkW"; //PASS - 4”W
// const tester5v2 = "144°"; //FAIL - no letters
// const tester6v2 = "32bf’"; //FAIL - only 2 letters
// const tester7v2 = "280°"; //FAIL - greater than 255
// const tester8v2 = "9”E"; //FAIL - greater than 8
// const tester9v2 = "4.T"; //FAIL - Ends in an invalid letter

const re2Deg = /([0-9])[A-Za-z]{3,}([0-9])[A-Za-z]{3,}([0-9])[a-zA-Z]{3,}(°)/g;
// ✔️ 
const re2Dots = /([0-9])[A-Za-z]{3,}([0-9])[A-Za-z]{3,}(['\.])/g;
// ✔️ 
const re2doubledot = /([0-9])[A-Za-z]{3,}(")[a-z]{3,}([NEWS])/g;
// ✔️ 

match = re2Deg.exec(input)

// function tempcontrol(match) {
//     if (/([001-255]/g) {
while (match) {
    // console.log(match.index);

        console.log(match[1] + match[2] + match[3] + match[4]);
  match = re2Deg.exec(input);
    

}
//✔️

match = re2Dots.exec(input);
while (match) {
    // console.log(match.index);
  console.log(match[1] + match[2] + match[3]);
  match = re2Dots.exec(input);
}
//✔️

match = re2doubledot.exec(input);
// console.log(match);
while (match) {
  console.log(match[1] + match[2] + match[3]);
  match = re2doubledot.exec(input);
}
//✔️

// °’”
// console.log(
// re2Deg.exec(tester1v2),
// re2Dots.exec(tester2v2),
// re2Dots.exec(tester3v2),
// re2doubledot.exec(tester4v2),
// re2Deg.exec(tester5v2),
// re2Dots.exec(tester6v2),
// re2Deg.exec(tester7v2),
// re2doubledot.exec(tester8v2),
// re2Dots.exec(tester9v2),
// );

// const tester1v3 = "a[this"; //this
// const tester2v3 = "This]za2"; //This
// const tester3v3 = "[other."; //other.
// const tester4v3 = "!not]"; //FAILS
// const tester5v3 = "[nothing!"; //FAILS
// const tester6v3 = "[41 saf"; //Null
// const tester7v3 = "[S2om345"; //Som

// const re3 = /\[|\!|([A-Za-z]{1,7})|\! |\]/g;

const re3 = /(\[([a-zA-Z0-9]+\.?) | ([a-zA-Z0-9]+\.?)\])/g

match = re3.exec(input);

while (match) {
  console.log(match[2], match[3]);
  match = re3.exec(input);
}

// console.log( re3.exec(tester1v3),
// re3.exec(tester2v3),
// re3.exec(tester3v3),
// re3.exec(tester4v3),
// re3.exec(tester5v3),
// re3.exec(tester6v3),
// re3.exec(tester7v3),);
