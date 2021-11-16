let PreOrderedDrinks = {}

people.forEach((person) => {
    const { drink } = person
    PreOrderedDrinks[drink] ? 
        PreOrderedDrinks[drink] += 1 :
            PreOrderedDrinks[drink] = 1
})
 console.log(PreOrderedDrinks)