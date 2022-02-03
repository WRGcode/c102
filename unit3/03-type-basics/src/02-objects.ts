enum Role {
    "ADMIN",
    "READ_ONLY",
    "AUTHOR"
}

const person: {
    name: string,
    age: number,
    hobbies: string[],
    role: Role;
} = {
name: 'timmy',
age: 50,
hobbies: ['soccer', 'cooking'],
role: Role.ADMIN
}

console.log(person);


const product: {
    name: string,
    age: number,
    hobbies: string[],
    description: [number, string];
} = {
name: 'timmy',
age: 50,
hobbies: ['soccer', 'cooking'],
description: [1234, 'soccer ball']
}
product.description= [345, "testing"]
//! pushing to tuples skips length and type
//! checking
// product.description.push["testing"]

console.log(product);

