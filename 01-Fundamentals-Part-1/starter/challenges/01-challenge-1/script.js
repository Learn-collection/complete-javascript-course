let massMark;
let heightMark;
let massJonh;
let heightJonh;

massMark = 78;
heightMark = 1.69;
massJonh = 92;
heightJonh = 1.95;

let BMIMark = massMark / (heightMark * heightMark);
let BMIJonh = massJonh / (heightJonh * heightJonh);

console.log(BMIMark);
console.log(BMIJonh);

let markHigherBMI = (BMIMark > BMIJonh);

console.log('If BMIMark higher than BMIJonh? Answer: ' + markHigherBMI);


