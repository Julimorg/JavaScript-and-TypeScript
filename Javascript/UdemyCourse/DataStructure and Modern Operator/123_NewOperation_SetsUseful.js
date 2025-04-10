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

//? Intersection of Sets
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection: ', commonFoods); // Set(3) { 'tomatoes', 'garlic' }
console.log([...commonFoods]);

//? Union of Sets
const italianMexicanFusion = italianFoods.union(mexicanFoods);
console.log('Union: ', italianMexicanFusion); // Set(8) { 'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'avocado' }

console.log([...new Set([...italianFoods, ...mexicanFoods])]); // Set(8) { 'pasta', 'gnocchi', 'tomatoes', 'olive oil', 'garlic', 'basil', 'tortillas', 'beans', 'rice', 'avocado' }

//? Difference of Sets
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log('Difference: ', uniqueItalianFoods); // Set(5) { 'pasta', 'gnocchi', 'olive oil', 'basil' }

const uniqueMexicanFoods = mexicanFoods.difference(italianFoods);
console.log('Difference: ', uniqueMexicanFoods); // Set(5) { 'tortillas', 'beans', 'rice', 'avocado' }

//? Symmetric Difference of Sets
const symmetricDifference = italianFoods.symmetricDifference(mexicanFoods);
console.log('Symmetric Difference: ', symmetricDifference); // Set(10) { 'pasta', 'gnocchi', 'olive oil', 'basil', 'tortillas', 'beans', 'rice', 'avocado' }