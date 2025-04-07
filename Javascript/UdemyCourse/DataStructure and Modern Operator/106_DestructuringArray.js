'use strict';

const restaurant ={
    name : 'Classico Italiano',
    location : 'Via Angelo Tavanti 23, Firenze, Italy',
    categories : ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu : ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu : ['Pizza', 'Pasta', 'Risotto'],
    openingHours:{
        thu:{
            open: 12,
            close: 22,
        },
        fri:{
            open: 11,
            close: 23,
        },
        sat:{
            open: 0,   
            close: 24,
        },
    },
    order: function(starterIndex, mainIndex){
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },

    orderDelivery: function({
        time,
        address,
        mainIndex,
        starterIndex,
    }){
        console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);
    }
}

//**  == Destructurinng Array == **/
const arr = [1,2,3,4,5,6,7,8,9];

const [a,b,c] = arr; // Destructuring array
console.log(a,b,c);


//? First and Second element of array
const [first, second] = restaurant.categories; // Destructuring array from object
console.log(first, second);

//? First and Third element of array
const [firstCategory, ,thirdCategory] = restaurant.categories; // Destructuring array from object
console.log(firstCategory, thirdCategory);

//? Swapping variables
let [main, ,secondary] = restaurant.categories;

[main, secondary] = [secondary, main]; // Swapping variables
console.log(main, secondary);

let [starter,mainOrder] = restaurant.order(2,0); // Destructuring array from object
[mainOrder, starter] = [starter, mainOrder]; // Swapping variables
console.log(mainOrder, starter);

//? Nested array destructuring
const nested = [2,4,[5,6]]; // Nested array
const [i, , j] = nested; // Destructuring array
console.log(i, j); // 2 [5,6]
const [h, , [m,n]] = nested; // Destructuring array in destructuring array
console.log(h, m, n); // 2 5 6

//? default values
const [p = 1,q = 1,r = 1] = [8,9]; // Destructuring array
console.log(p,q,r); // 8 9 undefined

//**  == Destructurinng Object == **/
const {name, openingHours, categories} = restaurant; // Destructuring object
console.log(name, openingHours, categories); // Classico Italiano { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

const {name: restaurantName, openingHours: hours, categories: tags} = restaurant; // Destructuring object with renaming
console.log(restaurantName, hours, tags); // Classico Italiano { thu: { open: 12, close: 22 }, fri: { open: 11, close: 23 }, sat: { open: 0, close: 24 } } [ 'Italian', 'Pizzeria', 'Vegetarian', 'Organic' ]

//? Default values
const {
    menu = [],
    starterMenu: starters = [],
} = restaurant; // Destructuring object with default values
console.log(menu, starters); // [] [ 'Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad' ]

//? Mutating variables
let a1 = 111;
let b1 = 999; // Declaring variables
const obj = {a1: 23, b1: 7, c1: 14}; // Object
({a1,b1} = obj) // Destructuring object
console.log(a1, b1); // 111 999

//? Nested object destructuring
const {fri: {
  open: open,
  close: close
}} = openingHours; // Destructuring object
console.log(open, close); // { open: 11, close: 23 }

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

//? Practice Assignment 
const books = [
    {
      title: 'Algorithms',
      author: ['Robert Sedgewick', 'Kevin Wayne'],
      publisher: 'Addison-Wesley Professional',
      publicationDate: '2011-03-24',
      edition: 4,
      keywords: ['computer science', 'programming', 'algorithms', 'data structures', 'java', 'math', 'software', 'engineering'],
      pages: 976,
      format: 'hardcover',
      ISBN: '9780321573513',
      language: 'English',
      programmingLanguage: 'Java',
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.41,
          ratingsCount: 1733,
          reviewsCount: 63,
          fiveStarRatingCount: 976,
          oneStarRatingCount: 13
        }
      },
      highlighted: true
    },
    {
      title: 'Structure and Interpretation of Computer Programs',
      author: ['Harold Abelson', 'Gerald Jay Sussman', 'Julie Sussman (Contributor)'],
      publisher: 'The MIT Press',
      publicationDate: '2022-04-12',
      edition: 2,
      keywords: ['computer science', 'programming', 'javascript', 'software', 'engineering'],
      pages: 640,
      format: 'paperback',
      ISBN: '9780262543231',
      language: 'English',
      programmingLanguage: 'JavaScript',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.36,
          ratingsCount: 14,
          reviewsCount: 3,
          fiveStarRatingCount: 8,
          oneStarRatingCount: 0
        }
      },
      highlighted: true
    },
    {
      title: 'Computer Systems: A Programmer\'s Perspective',
      author: ['Randal E. Bryant', 'David Richard O\'Hallaron'],
      publisher: 'Prentice Hall',
      publicationDate: '2002-01-01',
      edition: 1,
      keywords: ['computer science', 'computer systems', 'programming', 'software', 'C', 'engineering'],
      pages: 978,
      format: 'hardcover',
      ISBN: '9780130340740',
      language: 'English',
      programmingLanguage: 'C',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 4.44,
          ratingsCount: 1010,
          reviewsCount: 57,
          fiveStarRatingCount: 638,
          oneStarRatingCount: 16
        }
      },
      highlighted: true
    },
    {
      title: 'Operating System Concepts',
      author: ['Abraham Silberschatz', 'Peter B. Galvin', 'Greg Gagne'],
      publisher: 'John Wiley & Sons',
      publicationDate: '2004-12-14',
      edition: 10,
      keywords: ['computer science', 'operating systems', 'programming', 'software', 'C', 'Java', 'engineering'],
      pages: 921,
      format: 'hardcover',
      ISBN: '9780471694663',
      language: 'English',
      programmingLanguage: 'C, Java',
      onlineContent: false,
      thirdParty: {
        goodreads: {
          rating: 3.9,
          ratingsCount: 2131,
          reviewsCount: 114,
          fiveStarRatingCount: 728,
          oneStarRatingCount: 65
        }
      }
    },
    {
      title: 'Engineering Mathematics',
      author: ['K.A. Stroud', 'Dexter J. Booth'],
      publisher: 'Palgrave',
      publicationDate: '2007-01-01',
      edition: 14,
      keywords: ['mathematics', 'engineering'],
      pages: 1288,
      format: 'paperback',
      ISBN: '9781403942463',
      language: 'English',
      programmingLanguage: null,
      onlineContent: true,
      thirdParty: {
        goodreads: {
          rating: 4.35,
          ratingsCount: 370,
          reviewsCount: 18,
          fiveStarRatingCount: 211,
          oneStarRatingCount: 6
        }
      },
      highlighted: true
    },
    {
      title: 'The Personal MBA: Master the Art of Business',
      author: 'Josh Kaufman',
      publisher: 'Portfolio',
      publicationDate: '2010-12-30',
      keywords: ['business'],
      pages: 416,
      format: 'hardcover',
      ISBN: '9781591843528',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.11,
          ratingsCount: 40119,
          reviewsCount: 1351,
          fiveStarRatingCount: 18033,
          oneStarRatingCount: 1090
        }
      }
    },
    {
      title: 'Crafting Interpreters',
      author: 'Robert Nystrom',
      publisher: 'Genever Benning',
      publicationDate: '2021-07-28',
      keywords: ['computer science', 'compilers', 'engineering', 'interpreters', 'software', 'engineering'],
      pages: 865,
      format: 'paperback',
      ISBN: '9780990582939',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.7,
          ratingsCount: 253,
          reviewsCount: 23,
          fiveStarRatingCount: 193,
          oneStarRatingCount: 0
        }
      }
    },
    {
      title: 'Deep Work: Rules for Focused Success in a Distracted World',
      author: 'Cal Newport',
      publisher: 'Grand Central Publishing',
      publicationDate: '2016-01-05',
      edition: 1,
      keywords: ['work', 'focus', 'personal development', 'business'],
      pages: 296,
      format: 'hardcover',
      ISBN: '9781455586691',
      language: 'English',
      thirdParty: {
        goodreads: {
          rating: 4.19,
          ratingsCount: 144584,
          reviewsCount: 11598,
          fiveStarRatingCount: 63405,
          oneStarRatingCount: 1808
        }
      },
      highlighted: true
    }
  ];

  //? 1.1
  const [firstBook, secondBook] = books;
  console.log(firstBook.title, secondBook.title); 
  console.log(firstBook.author, secondBook.author);

  //? 1.2
  const [ , , thirdBook] = books;
  console.log(thirdBook.title, thirdBook.author, thirdBook.publisher);
  
  //? 1.3
  const ratings = [['rating', 4.19], ['ratingsCount', 144584]];
  const [[,rating], [, ratingCount]] = ratings;
  console.log(rating, ratingCount); // 4.19 144584

  //? 1.4
  const ratingStars = [63405, 1808];
  const [fiveStarRatingCount, oneStarRatingCount, threeStarRatings = 0] = ratingStars;
  console.log(fiveStarRatingCount, oneStarRatingCount, threeStarRatings); // 63405 1808 0


