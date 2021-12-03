const re1 = /M[rs]\. [A=Z][a=z][a=z][a=z]$/
//refactored
const re1 = /M[rs]\. [A=Z][a=z]{3}$/



const re2 = /^\(?[0-9]{3}[\)-]?[0-9]{3}[ -]?[0-9]{4}/
//refactored
const re2 = /\W?\d{3}\W?\d{3}\W?\d{4}/



const re3 =/^[a-zA-Z]{3}[^a-zA-Z0-9 \n\t]?[02468]{2,4}$/
//refactored
const re3 =/^[\w\D^_]{3}\W?[02468]+$/