let min = 1027;
let max = 0;
let dugHoles = []
let rows = []
let cols =[]

input.forEach((line) => {
  let rmin = 0;
  let rmax = 127;

  let cmin = 0;
  let cmax = 7;

  for (letter of line) {
    if (letter === "F") {
      rmax = Math.floor((rmax + rmin) / 2);
    } else if (letter === "B") {
      rmin = Math.ceil((rmax + rmin) / 2);
    } else if (letter === "R") {
      cmin = Math.ceil((cmax + cmin) / 2);
    } else if (letter === "L") {
      cmax = Math.floor((cmax + cmin) / 2);
    }
  }

  const sqNumber = rmax * 8 + cmax;
dugHoles.push(sqNumber)
  if (sqNumber > max) max = sqNumber;
  if (sqNumber < min) min = sqNumber;

  cols.push(cmax);
  rows.push(rmax);
});

console.log(min, max);

let missingSquare;
for(let i = min; i<= max; i++){
  if(dugHoles.some(hole => hole == i)) {
    continue;
  }else {
    missingSquare = i;
    console.log(i); //517
    break;
  }
}

let col = 0 //5
let row = 0 //64
while ( missingSquare % 8 != 0) {
  col++;
  missingSquare--;
  }
row = missingSquare / 8;

let rmin = 0;
let rmax = 127;
let cmin = 0;
let cmax = 7;
let codedHole = ""

while (rmax != rmin) {
  let middle = (rmax + rmin ) / 2
  if(row > middle) {
    codedHole += "B"
    rmin = Math.ceil(middle)
}
if(row < middle){
  codedHole += "F"
  rmax = Math.floor(middle)
}}

while (cmax != cmin) {
  let middle = (cmax + cmin ) / 2
  if(col > middle) {
    codedHole += "R"
    cmin = Math.ceil(middle)
}
if(col < middle){
  codedHole += "L"
  cmax = Math.floor(middle)
}
}

console.log(codedHole) //BFFFFFFRLR
let rowTotal = rows.reduce((total, row) => total + row, 0);
let colTotal = cols.reduce((total, col) => total + col, 0);

console.log((rowTotal * colTotal)) //116964000