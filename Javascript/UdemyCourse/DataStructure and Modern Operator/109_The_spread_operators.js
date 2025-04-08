'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

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
  ordersPasta: function(ing1,ing2,ing3){
    console.log(`Here is your declicious pasta with ${ing1}, ${ing2}, ${ing3}`)
  }
};


//?Spread Operators
const arr = [7,8,9];
const spreadArr = [1,2,...arr]; // Spread operator

console.log(spreadArr); // [1,2,7,8,9]

console.log(...spreadArr); // 1 2 7 8 9

const newMenu = [...restaurant.mainMenu, 'Gnocchi']; // Spread operator to add 'Gnocchi' to the mainMenu array
console.log(newMenu); // ['Pizza', 'Pasta', 'Risotto', 'Gnocchi']


//? Copy Array
const mainMenuCopy = [...restaurant.mainMenu]; // Spread operator to copy the mainMenu array
console.log(mainMenuCopy); // ['Pizza', 'Pasta', 'Risotto']


//? Join 2 arrays

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]; // Spread operator to join the starterMenu and mainMenu arrays
console.log(menu);


//? Iterables :  arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, ' ', 'S.']; // Spread operator to convert the string into an array of letters
console.log(letters); // ['J', 'o', 'n', 'a', 's', ' ', 'S.']


// const ingredients = [ prompt(' let\'s make pasta! Ingredient 1?'), prompt('Ingredient 2?'), prompt('Ingredient 3?') ];
// console.log(ingredients); // ['Ingredient 1', 'Ingredient 2', 'Ingredient 3']

// restaurant.ordersPasta(...ingredients); // Spread operator to pass the ingredients array as arguments to the ordersPasta function

//? Object 
const newRestaurant = {...restaurant, founder: 'Giuseppe Rossi', foundedIn: 1998}; // Spread operator to create a new object with the properties of the restaurant object and add new properties
console.log(newRestaurant); // {name: 'Classico Italiano', location: 'Via Angelo Tavanti 23, Firenze, Italy', categories: Array(4), starterMenu: Array(4), mainMenu: Array(3), …}

const restaurantCopy = {...restaurant}; // Spread operator to create a copy of the restaurant object
restaurantCopy.name = 'Ristorante Roma'; // Change the name of the restaurantCopy object
console.log(restaurantCopy.name);
console.log(restaurant.name);