let baddrink = ["Beer", "Martini", "Margarita", "Wine", "Daiquari"];
let party = people.map((person) => {
  const { age, drink } = person;
  //person.age, person.drink
  if (age <= 20 && baddrink.includes(drink)) {
    return { ...person, ejected: true };
  }
  return { ...person, ejected: false };
});
console.log(party)
