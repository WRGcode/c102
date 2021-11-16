
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


const re3 = /(\[([a-zA-Z0-9]+\.?) | ([a-zA-Z0-9]+\.?)\])/g

match = re3.exec(input);

while (match) {
  console.log(match[2], match[3]);
  match = re3.exec(input);
}

