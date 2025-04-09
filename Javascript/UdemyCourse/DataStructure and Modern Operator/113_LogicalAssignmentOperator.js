"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const italianFoods = new Set([
  "pasta",
  "gnocchi",
  "tomatoes",
  "olive oil",
  "garlic",
  "basil",
]);

const mexicanFoods = new Set([
  "tortillas",
  "beans",
  "rice",
  "tomatoes",
  "avocado",
  "garlic",
]);

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  ordersPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  orderPizza: function(mainIngredient, secondIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(secondIngredient);
    console.log(otherIngredients);
  },
};

const rest1 = {
    name: 'Carpi',
    // numGuests: 20,
    numGuests: 0,

}

const rest2 =  {
    name: 'La Piazza',
    owner: 'Giovanni Rossi',
}
//? OR assigment operator
//? Cach 1
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//? Cach 2
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//? Cach 1 nullish assignment operator
rest1.numGuests = rest1.numGuests ?? 10;
rest2.numGuests = rest2.numGuests ?? 10;

//? Cach 2 nullish assignment operator
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;


//? AND assignment operator
//? Cach 1
rest1.owner = rest1.owner && '<ANONYMOUS>';
rest2.owner = rest2.owner && '<ANONYMOUS>';
//? Cach 2
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

console.log(rest1);
console.log(rest2);


