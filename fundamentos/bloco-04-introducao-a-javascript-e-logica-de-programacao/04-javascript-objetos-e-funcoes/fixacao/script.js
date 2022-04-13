// Requisito 1
let player = {
    name: 'Marta',
    lastName: 'Silva',
    age: 34,
    medals: {
        golden: 2,
        silver: 3
    }
};

// Requisito 2
console.log(`A jogadora ${player.name + " " + player.lastName} tem ${player.age} anos de idade`);

// Requisito 3
player['bestInTheWorld'] = [2006, 2007, 2008, 2009, 2010, 2018];

// Requisito 4
const fullName = player.name + " " + player.lastName;
const manyTimesBest = player.bestInTheWorld.length;
console.log(`A jogadora ${fullName} foi eleita a melhor do mundo por ${manyTimesBest} vezes`);

// Requisito 5
console.log(`A jogadora possui ${player.medals.golden} medalhas de ouro e ${player.medals.silver} medalhas de prata`);

// Requisito 1 - for/in
let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
};

for (let index in names) {
    console.log(`Olá ${names[index]}`);
}

// Requisito 2 - for/in
let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};
for (let key in car) {
    console.log(key + ": " + car[key]);
}