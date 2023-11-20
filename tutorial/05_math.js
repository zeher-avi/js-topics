const randomNumber = 1000;

//? logs the data type
// console.log(typeof randomNumber);

//? turns into a string
// console.log(typeof randomNumber.toString());

//? turns it into a readable number
const profit = 1000000000;
// console.log(profit.toLocaleString('en-IN')); //! output would be in Indian number system

//? setup decimal
const pie = 3.145686876;
// console.log(pie.toFixed(1));

// ++++++++++++++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++++

//? Round of default
const numberNew = 23.3;
// console.log(Math.round(numberNew));

// // // round to the greater number
// console.log(Math.ceil(numberNew));

// // // round to the lower number
// console.log(Math.floor(numberNew));

//?gets random number
const min = 1;
const max = 33;
let result = Math.floor(Math.random() * (max - min + 1) + min);
console.log(result);
