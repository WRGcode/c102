console.log(
people.some((person) => person.pet === "lizard"),
people.some((person) => person.pet === "fish"),
people.some((person) => person.pet === "bird"),
people.some((person) => person.pet === "hamster")
)

console.log(
    people.every((person) => person.age >= 10 && person.age <=25),
    people.every((person) => person.age >= 15 && person.age <=30),
    people.every((person) => person.age >= 20 && person.age <=35)
)