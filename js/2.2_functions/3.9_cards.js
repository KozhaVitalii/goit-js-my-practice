// if (ordered === 0) {
//     return "Your order is empty!";
//   } else if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//     return "The order is accepted, our manager will contact you";

// const checkStorage = function (available, ordered) {
//   let message;

//   if (ordered === 0) {
//     message = 'Your order is empty!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, not enough goods in stock!';
//   } else {
//     message = 'The order is accepted, our manager will contact you';
//   }

//   return message;
// }

// const checkStorage = function (available, ordered) {

//   if (ordered === 0) {
//     return 'Your order is empty!';
//   } else if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//     return 'The order is accepted, our manager will contact you';

// };

// const checkStorage = function (available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   else if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// };

// const checkStorage = function (available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//     }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// };

// console.log(checkStorage(100, 50)); //"The order is accepted, our manager will contact you"
// console.log(checkStorage(100, 130)); //"Your order is too large, not enough goods in stock!"
// console.log(checkStorage(70, 0)); //"Your order is empty!"
// console.log(checkStorage(200, 20)); //"The order is accepted, our manager will contact you"
// console.log(checkStorage(200, 250)); //"Your order is too large, not enough goods in stock!"
// console.log(checkStorage(150, 0)); //"Your order is empty!"

// const getExtremeElements = function (array) {
//     const array1 = array.splice(0, 1);
//     const lastElement = array.length - 1;
//     const array2 = array[lastElement];

//     const array3 = array1.concat(array2);

//   return array3;
// };

// console.log(getExtremeElements([1, 2, 3, 4, 5]));
// console.log(getExtremeElements(['Earth', 'Mars', 'Venus']));
// console.log(getExtremeElements(['apple', 'peach', 'pear', 'banana']));

// const calculateEngravingPrice = function (message, pricePerWord) {
//     const words = message.split(' ');
//     const wordsCount = words.length;
//   let totalPrice = wordsCount * pricePerWord;

//   return totalPrice;
// }

// console.log(calculateEngravingPrice('JavaScript is in my blood', 10));

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0,2); // ["apple", "plum"]
// const nonExtremeEls = fruits.slice(1,4); // ["plum", "pear", "orange"]
// const lastThreeEls = fruits.slice(2, 5); // ["pear", "orange", "banana"]

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);

// const firstArray = ["Mercury", "Venus", "Earth"];
// const secondArray = ["Mars", "Jupiter"];
// const thirdArray = ["Saturn", "Uranus", "Neptune"];
// const allPlanets = firstArray.concat(secondArray, thirdArray);

// console.log(firstArray); // ['Mercury', 'Venus', 'Earth'];
// console.log(allPlanets); // ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'];

// 2.22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// Объявлена функция createArrayOfNumbers(min, max)
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// В цикле for использовался метод push

function createArrayOfNumbers(min, max) {
const numbers = [min, max];
  // Change code below this line
  for (const number of numbers) {
    let array = min + i;
    console.log(array);
  }
  // Change code above this line
  return numbers;
}

console.log(createArrayOfNumbers(1, 3)); // возвращает [1, 2, 3]
console.log(createArrayOfNumbers(1, 3)); // возвращает [14, 15, 16, 17]
console.log(createArrayOfNumbers(1, 3)); // возвращает [29, 30, 31, 32, 33, 34]
