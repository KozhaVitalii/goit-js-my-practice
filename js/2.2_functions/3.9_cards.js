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

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//   // Change code below this line
// credentials[emailInputName]: "henry.carter@aptmail.com",
// credentials[passwordInputName]: "jqueryismyjam",

//   // Change code above this line
// };

// const book = {
//   title: 'The Last Kingdom',
//   author: 'Bernard Cornwell',
//   genres: ['historical prose', 'adventure'],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   // console.log(book[key]);
// }

// 3.19
// Напиши функцию getAllPropValues(propName) которая принимает один параметр propName - имя(ключ) свойства.
// Функция должна вернуть массив всех значений свойства с таким именем из каждого объекта в массиве products.
// Если в объектах нет свойства с таким именем, функция должна вернуть пустой массив.

// Объявлена функция getAllPropValues(propName)
// Вызов getAllPropValues("name") возвращает ["Radar", "Scanner", "Droid", "Grip"]
// Вызов getAllPropValues("quantity") возвращает [4, 3, 7, 9]
// Вызов getAllPropValues("price") возвращает [1300, 2700, 400, 1200]
// Вызов getAllPropValues("category") возвращает []

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {

  for (const key of propName) 
    return key.price;
  
    } 

console.log(getAllPropValues('name')); // возвращает ["Radar", "Scanner", "Droid", "Grip"]
console.log(getAllPropValues('quantity')); // возвращает [4, 3, 7, 9]
console.log(getAllPropValues('price')); // возвращает [1300, 2700, 400, 1200]
console.log(getAllPropValues('category')); // возвращает []