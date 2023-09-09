// 'use strict';
// let f;

// const g = function () {
//     const a = 23;
//     f = function () {
//         console.log(a * 2);
//     };
// };

// const h = function () {
//     const b = 777;
//     f = function () {
//         console.log(b * 2);
//     };

// };

// g();
// f();
// console.dir(f);

// //Re-assigning f function
// h();
// f();
// console.dir(f);

// -- Coding Challeng
(function () {
    const header = document.querySelector('h1');
    header.style.color = 'red';
  
    document.querySelector('body').addEventListener('click', function () {
      header.style.color = 'blue';
    });
  })();

