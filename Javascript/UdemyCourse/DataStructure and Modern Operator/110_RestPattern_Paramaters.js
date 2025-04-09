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
  }
};

//? Spread, because on right side of assignment operator
const arr = [1, 2, ...[3, 4]];
console.log(arr); // [1, 2, 3, 4]

//? Rest, because on left side of assignment operator
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // 1 2 [3, 4, 5]

const [pizza, pasta, risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, pasta, risotto, otherFood); // Pizza Risotto [Focaccia, Bruschetta, Garlic Bread, Caprese Salad]

//? Object
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 } }

//? Function
const add = function (...numbers) {
    let sum = 0;
    for(let i = 0 ; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log(sum);
};


add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 7, 2, 9);

const x = [23, 5, 7];
add(...x); 

//? Order Pizza
restaurant.orderPizza("Mushrooms", "Spinach", "Olives", "Cheese");
