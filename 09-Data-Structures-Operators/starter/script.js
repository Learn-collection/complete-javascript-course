'use strict';

// // Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// // Data needed for first part of the section
// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   orderPizza: function(mainIngredient, ...otherIngredient){
//     console.log(mainIngredient);
//     console.log(otherIngredient);
//   }
// };

// // const [name, location, categories] = restaurant;
// // console.log(name, location, categories)

// // const arr = [2,3,4];
// // const [x,y,z] = arr;
// // console.log(x, y, z);

// // let number = [`one`,`two`,`three`,`four`];
// // let [one, two, three, four] = number;
// // console.log(one,two,three,four);

// // let [a, b, c, d] = [four, two, one,three];
// // console.log(a,b,c,d);

// // const nArr = [7,8,9];
// // const newArr = [1, 2, ...nArr];
// // console.log(newArr);

// // -- Rest, because on LEFT side of = 
// const [a,b,...others] = [1,2,3,4,5];
// console.log(a,b,others)

// const add = function (...numbers){
//   console.log(numbers);
// }

// add(1,2);
// add(1,2,3,3,4);
// add(1,2,4,4,4,4,4,4,4,4,);
// add(1,2,5,5,5,6,6,7,7,8,8,9,9,9);

// restaurant.orderPizza('mashrom', 'coca','string', 'abc');


// console.log(3 || 'Bunhor');



const rest1 = {
  name: 'J-kop',
  numGuests: 0,
};
const rest2 = {
  name: 'Kakiya',
  owner: 'Le dav',
};


//-- OR assigment operator

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assigment operator (null or undefined)
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

console.log(rest1);
console.log(rest2);





















