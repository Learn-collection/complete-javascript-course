'use strict';


//-- Call back function --
// const highFive = function (){
//     console.log("Hi");
// }

// document.body.addEventListener('click', highFive);
// ['Jonh', 'Kiki', 'Adam', 'Lolu'].forEach(highFive);

// const oneWord = function (str){
//     return str.replace(/ /g, '').toLowerCase();
// };
// const upperFirstWord = function (str){
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// const transformer = function(str, fn){
//     console.log(`Original string: ${str}`);
//     console.log(`Transform string: ${fn(str)}`);
//     console.log(`Transform by: ${fn.name}`);
// }

// transformer(`JavaScript is the best!`, upperFirstWord);
// transformer(`JavaSrcipt is the best!`, oneWord);

// console.log('---------------------------------');

// // Case 1
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };
// };

// const geeterHey = greet('Hey');
// geeterHey('Kola');
// geeterHey('Bunhor');

// greet('Hello')('me');

// // Convert Case 1 to arrow function
// const geeterArr = greeting => name1 => console.log(`${greeting} ${name1}`);

// geeterArr('Hello')('bunhor');

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    booking: [],
    book(flightNum, name){
        console.log(
            `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
        );
        this.booking.push({
            flight: `${this.iataCode}${flightNum}`, name
        });
    },
};

lufthansa.book(3311, 'Bun Hor');
lufthansa.book(456, 'kid kid');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    booking: [],

}
const book= lufthansa.book;

book.call(eurowings,233, 'Maly');
console.log(eurowings);





























