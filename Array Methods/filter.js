let kaines = people.filter((person) => {
    const {name} = person;
    // return name.split(" ")[0] === "Kaine"
    return name.startsWith("Kaine")
})
console.log(kaines)
