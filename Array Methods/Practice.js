let MDrink = drinks.filter((mdrink) => {
    return mdrink.startsWith("M")
})
console.log(MDrink)

//////////////////////////////

let colordex = colors.map((color, index) => {
    // return{color:color, index:index}
    return{color, index}
})
console.log(colordex)

///////////////////////////////

Pets = pets.map((pet) =>{
    return pet[0].toUpperCase(0) + pet.slice(1)
    // return pet.split("").splice(0,1,pet[0].toUpperCase()).join("")

})
console.log(Pets)

///////////////////////////////