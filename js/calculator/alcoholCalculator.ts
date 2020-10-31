class Person {
    gender: string;
    age: number;
    weight: number;

    constructor(gender: string, age: number, weight: number) {
        this.gender = gender;
        this.age = age;
        this.weight = weight;
    }
}

class Drink {
    name: string;
    abv: number; // Alcohol by volume
    volume: number;

    constructor(name: string, abv: number, volume: number) {
        this.name = name;
        this.abv = abv;
        this.volume = volume;
    }
}

function newDrink(name: string, abv: number, volume: number) {
    let drink = new Drink(name,abv,volume);
    console.log(drink.name);
}