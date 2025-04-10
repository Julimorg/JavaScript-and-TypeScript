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
  ordersPast(ing1, ing2, ing3) {
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
  //? ES6 enhanced object literals
  italianFoods,
  mexicanFoods,
  
  orderPizza(mainIngredient, secondIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(secondIngredient);
    console.log(otherIngredients);
  },
};

//? Property Names
const properties = Object.keys(restaurant.openingHours);
console.log(properties); // ['thu', 'fri', 'sat']

let openStr = `We are open on ${properties.length} days: `;

for( const day of  Object.keys(restaurant.openingHours)){
    openStr += `${day}, `;

}
console.log(openStr); // We are open on 3 days: thu, fri, sat,

//? Property Values
const values = Object.values(restaurant.openingHours);
console.log(values); // [ { open: 12, close: 22 }, { open: 11, close: 23 }, { open: 0, close: 24 } ]


//? Property Entries

const valuesEntries = Object.entries(restaurant.openingHours);
console.log(valuesEntries); // [ [ 'thu', { open: 12, close: 22 } ], [ 'fri', { open: 11, close: 23 } ], [ 'sat', { open: 0, close: 24 } ] ]


for( const [day, {open,close}] of valuesEntries){
    const openStr = open ? `${open}am` : 'Open 24 hours';
    console.log(`On ${day}, we open at ${openStr} and close at ${close}pm`);
}