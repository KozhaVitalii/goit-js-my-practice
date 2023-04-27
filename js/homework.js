// // 1.1
// // Change code below this line
// const productName = 'Droid';
// // console.log(productName);
// // 'Droid'

// const pricePerItem = 2000;
// // console.log(pricePerItem);
// // 2000

// // 1.2
// let productName = 'Droid';
// let pricePerItem = 2000;

// // Change code below this line
// productName = 'Repair droid';
// pricePerItem = 3500;

// // 1.3
// // Change code below this line
// const topSpeed = 160;
// const distance = 617.54;
// const login = 'mango935';
// let isOnline = true;
// let isAdmin = false;

// // 1.4
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// // Change code below this line
// const totalPrice = pricePerItem * orderedQuantity;

// // 1.5
// const productName = 'Droid';
// const pricePerItem = 3500;

// // Change code below this line
// const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// // 1.6
// // Change code below this line
// let pricePerDroid = 800;
// let orderedQuantity = 6;
// let deliveryFee = 50;
// let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
// const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// // 1.7
// // Change code below this line
// function sayHi() {
//   console.log('Hello, this is my first function!');
// }

// sayHi();

// // 1.8
// // Change code below this line
// function add(a, b, c) {
//   console.log(`Addition result equals ${a + b + c}`);
//   // Change code above this line
// }

// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);

// // 1.9
// function add(a, b, c) {
//   // Change code below this line
//   return a + b + c;
// }

// // Change code above this line

// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));

// // 1.10

// function makeMessage(name, price) {
//   // Change code below this line
//   const message = `You picked ${name}, price per item is ${price} credits`;
//   // Change code above this line
//   return message;
// }

// // 1.11

// function calculateTotalPrice(orderedQuantity, pricePerItem) {
//   // Change code below this line
//   const totalPrice = orderedQuantity * pricePerItem;

//   // Change code above this line
//   return totalPrice;
// }

// // 1.12
// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Change code below this line
//   let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
//   const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

//   // Change code above this line
//   return message;
// }

// // 1.13
// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;

//   // Change code above this line
//   return passed;
// }

// // 1.14
// function isValidPassword(password) {
//   const SAVED_PASSWORD = 'jqueryismyjam';
//   // Change code below this line
//   const isMatch = password === SAVED_PASSWORD;

//   // Change code above this line
//   return isMatch;
// }

// // 1.15
// function checkAge(age) {
//   let message;

//   if (age >= 18) {
//     // Change this line
//     message = 'You are an adult';
//   } else {
//     message = 'You are a minor';
//   }

//   return message;
// }

// // 1.16
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line
//   if (ordered === 50) {
//     message = 'Order is processed, our manager will contact you.';
//   } else if (ordered === 130) {
//     message = 'Not enough goods in stock!';
//   } else if (ordered === 20) {
//     message = 'Order is processed, our manager will contact you.';
//   } else if (ordered === 150) {
//     message = 'Order is processed, our manager will contact you.';
//   } else if (ordered === 180) {
//     message = 'Not enough goods in stock!';
//   }
//   // Change code above this line
//   return message;
// }
// checkStorage(100, 50);
// checkStorage(100, 130);
// checkStorage(200, 20);
// checkStorage(200, 150);
// checkStorage(150, 180);

// // 1.17
// let a = 5;
// let b = 10;
// let c = 15;
// let d = 20;

// // Change code below this line
// a += 2;
// b -= 4;
// c *= 3;
// d /= 10;

// // 1.18
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
//   let totalPrice = pricePerDroid * orderedQuantity;
//   if (customerCredits >= totalPrice) {
//     customerCredits -= totalPrice;
//     message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
//   } else if (customerCredits < totalPrice) {
//     message = 'Insufficient funds!';
//   }
//   // Change code above this line

//   return message;
// }

// makeTransaction(3000, 5, 23000);
// makeTransaction(1000, 3, 15000);
// makeTransaction(5000, 10, 8000);
// makeTransaction(2000, 8, 10000);
// makeTransaction(500, 10, 5000);

// // 1.19
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password === null) {
//     // Change this line
//     message = 'Canceled by user!';
//   } else if (password === ADMIN_PASSWORD) {
//     // Change this line
//     message = 'Welcome!';
//   } else {
//     message = 'Access denied, wrong password!';
//   }

//   return message;
// }

// // 1.20
// function checkStorage(available, ordered) {
//   let message;
//   let order = ordered;
//   // Change code below this line
//   if (order === 0) {
//     message = 'There are no products in the order!';
//   } else if (ordered > available) {
//     message = 'Your order is too large, there are not enough items in stock!';
//   } else if (ordered <= available) {
//     message = 'The order is accepted, our manager will contact you';
//   }
//   return message;
// }

// // 1.21
// function isNumberInRange(start, end, number) {
//   const isInRange = number >= start && number <= end; // Change this line

//   return isInRange;
// }

// // 1.22

// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

//   return canAccessContent;
// }

// // 1.23

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !(number >= start && number <= end); // Change this line

//   return isNotInRange;
// }

// // 1.24

// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Change code below this line
//   if (totalSpent >= 50000) {
//     console.log('GOLD_DISCOUNT, скидка 10 %');
//     discount = GOLD_DISCOUNT;
//   } else if (totalSpent >= 20000 && totalSpent < 50000) {
//     console.log('BRONZE_DISCOUNT, скидка 5 %');
//     discount = SILVER_DISCOUNT;
//   } else if (totalSpent >= 5000 && totalSpent < 20000) {
//     console.log('BRONZE_DISCOUNT, скидка 2 %');
//     discount = BRONZE_DISCOUNT;
//   } else {
//     discount = BASE_DISCOUNT;
//     console.log('У Вас ещё нет партнерской скидки');
//   }
//   // Change code above this line
//   return discount;
// }

// // 1.25
// function checkStorage(available, ordered) {
//   let message;
//   // Change code below this line

//   message =
//     ordered > available
//       ? 'Not enough goods in stock!'
//       : 'The order is accepted, our manager will contact you';

//   // Change code above this line
//   return message;
// }

// // 1.26
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line
//   message =
//     ADMIN_PASSWORD === password
//       ? 'Access is allowed'
//       : 'Access denied, wrong password!';
//   // Change code above this line
//   return message;
// }

// // 1.27
// function getSubscriptionPrice(type) {
//   let price;
//   // Change code below this line

//   switch (
//     type // Change this line
//   ) {
//     case 'starter': // Change this line
//       price = 0; // Change this line
//       break;

//     case 'professional': // Change this line
//       price = 20; // Change this line
//       break;

//     case 'organization': // Change this line
//       price = 50; // Change this line
//       break;
//   }

//   // Change code above this line
//   return price;
// }

// // 1.28

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Change code below this line

//   // if (password === null) {
//   //   message = "Canceled by user!";
//   // } else if (password === ADMIN_PASSWORD) {
//   //   message = "Welcome!";
//   // } else {
//   //   message = "Access denied, wrong password!";
//   // }

//   switch (password) {
//     case null:
//       message = 'Canceled by user!';
//       break;
//     case ADMIN_PASSWORD:
//       message = 'Welcome!';
//       break;
//     default:
//       message = 'Access denied, wrong password!';
//   }

//   // Change code above this line
//   return message;
// }

// // 1.29

// function getShippingCost(country) {
//   let message;
//   // Change code below this line
//   switch (country) {
//     case 'Australia':
//       message = `Shipping to ${country} will cost 170 credits`;
//       break;
//     case 'Jamaica':
//       message = `Shipping to ${country} will cost 120 credits`;
//       break;
//     case 'Chile':
//       message = `Shipping to ${country} will cost 250 credits`;
//       break;
//     case 'China':
//       message = `Shipping to ${country} will cost 100 credits`;
//       break;
//     default:
//       message = 'Sorry, there is no delivery to your country';
//   }
//   // Change code above this line
//   return message;
// }

// // 1.30
// function getNameLength(name) {
//   const message = `Name ${name} is ${name.length} characters long`; // Change this line

//   return message;
// }

// // 1.31
// const courseTopic = 'JavaScript essentials';
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length - 1];

// // 1.32
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Change this line

//   return substring;
// }

// // 1.33
// function formatMessage(message, maxLength) {
//   let result;
//   // Change code below this line
//   if (message.length <= maxLength) {
//     result = message;
//   } else if (message.length > maxLength) {
//     result = message.slice(0, maxLength) + '...';
//   }
//   /// Change code above this line
//   return result;
// }

// // 1.34
// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Change this line

//   return normalizedInput;
// }

// // 1.35
// function checkForName(fullName, name) {
//   const result = fullName.includes(name); // Change this line
//   return result;
// }

// // 1.36
// function checkForSpam(message) {
//   let result;
//   const blacklistedWord1 = 'spam';
//   const blacklistedWord2 = 'sale';
//   // Change the code below this line
//   if (
//     message.toLocaleLowerCase().includes(blacklistedWord1) ||
//     message.toLocaleLowerCase().includes(blacklistedWord2)
//   ) {
//     result = true;
//   } else {
//     result = false;
//   }
//   // Change code above this line
//   return result;
// }

// // 2.1
// function checkAge(age) {
//   if (age >= 18) {
//     // Change this line
//     return 'You are an adult';
//   }

//   return 'You are a minor';
// }

// // 2.2
// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   // Change code below this line

//   if (password === ADMIN_PASSWORD) {
//     return 'Welcome!';
//   }

//   return 'Access denied, wrong password!';
//   // Change code above this line
// }

// // 2.3

// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return 'Your order is empty!';
//   }
//   if (ordered > available) {
//     return 'Your order is too large, not enough goods in stock!';
//   }
//   return 'The order is accepted, our manager will contact you';
// }

// // 2.4

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// // 2.5

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[3];

// // 2.6

// const fruits = ['apple', 'plum', 'pear', 'orange'];
// fruits[1] = 'peach';
// fruits[3] = 'banana';

// // 2.7

// const fruits = ['apple', 'peach', 'pear', 'banana'];
// const fruitsArrayLength = fruits.length;

// // 2.8
// const fruits = ['apple', 'peach', 'pear', 'banana'];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// // 2.9

// function getExtremeElements(array) {
//   const array1 = array.splice(0, 1);
//   const lastElement = array.length - 1;
//   const array2 = array[lastElement];

//   const array3 = array1.concat(array2);

//   return array3;
// }

// // 2.10

// function splitMessage(message, delimiter) {
//   let words;
//   words = message.split(delimiter);

//   return words;
// }

// // 2.11

// function calculateEngravingPrice(message, pricePerWord) {
//   const words = message.split(' ');
//   const wordsCount = words.length;
//   let totalPrice = wordsCount * pricePerWord;

//   return totalPrice;
// }

// // 2.12

// function makeStringFromArray(array, delimiter) {
//   let string;
//   string = array.join(delimiter);

//   return string;
// }

// // 2.13

// function slugify(title) {
//   // Change code below this line
//   const slug = title.toLocaleLowerCase().split(' ').join('-');

//   return slug;
//   // Change code above this line
// }

// // 2.14

// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// // Change code below this line
// const firstTwoEls = fruits.slice(0, 2); // ["apple", "plum"]
// const nonExtremeEls = fruits.slice(1, 4); // ["plum", "pear", "orange"]
// const lastThreeEls = fruits.slice(2, 5); // ["pear", "orange", "banana"]

// // 2.15

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// // 2.16

// // 2.17
// // Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма
// // елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму
// // довжину нового масиву.

// // Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву
// // довжиною maxLength елементів.В іншому випадку функція повинна повернути новий масив повністю.

// // Оголошена функція makeArray(firstArray, secondArray, maxLength)
// // Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// // Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// // Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// // Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// // Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// // Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// // Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// const makeArray = function (firstArray, secondArray, maxLength) {
//   let newArray = firstArray.concat(secondArray);
//   console.log(newArray.length > maxLength);
//   console.log(newArray.slice(0, maxLength));
//   if (newArray.length > maxLength) {
//     newArray = newArray.slice(0, maxLength);
//   } else {
//   }

//   return newArray;
// };

// console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); //["Mango", "Poly", "Ajax"]
// console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"];
// console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// // 2.18

// // Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і повертає суму всіх цілих
// // чисел від одиниці і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// // Оголошена функція calculateTotal(number)
// // Виклик функції calculateTotal(1) повертає 1
// // Виклик функції calculateTotal(3) повертає 6
// // Виклик функції calculateTotal(7) повертає 28
// // Виклик функції calculateTotal(18) повертає 171
// // Виклик функції calculateTotal(24) повертає 300
// // Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// const calculateTotal = function (number) {
//   let total = 0;
//   for (let i = 0; i <= number; i += 1) {
//     total += i;
//   }
//   return total;
// };

// console.log(calculateTotal(1)); // повертає 1
// console.log(calculateTotal(3)); // повертає 6
// console.log(calculateTotal(7)); // повертає 28
// console.log(calculateTotal(18)); // повертає 171
// console.log(calculateTotal(24)); // повертає 300

// // 2.19
// // Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// // Оголошена змінна fruits
// // Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// // Оголошена змінна i - лічильник циклу
// // Початкове значення змінної i дорівнює 0
// // Умова циклу приводиться до true доти, доки i менше за 4
// // На кожній ітерації значення змінної i збільшується на одиницю
// // В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// // В тілі циклу for використовується виведення у консоль змінної fruit

// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i += 1) {
//   const fruit = fruits[i];
//   console.log(fruit);
// }

// // 2.20
// // Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює
// // загальну суму його елементів.Загальна сума елементів повинна зберігатися у змінній total, яка
// // повертається як результат роботи функції.

// // Оголошена функція calculateTotalPrice(order)
// // Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// // Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// // Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// // Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// const calculateTotalPrice = function (order) {
//   // v1:
//   // let total = 0;
//   // for (let i = 0; i < order.length; i += 1) {

//   //   total += order[i];
//   // }
//   // return total;

//   // v2:
//   let total = 0;

//   for (const value of order) {
//     total += value;
//   }
//   return total;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

// // 2.21
// // Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
// // розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// // Оголошена функція findLongestWord(string)
// // Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// // Виклик функції findLongestWord("Google do a roll") повертає Google
// // Виклик функції findLongestWord("May the force be with you") повертає force
// // Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// // Шаг 1 - преобразовать строку в массив
// // Шаг 2 - посчитать для каждого элемента массива кол - во символов
// // Шаг 3 - выбрать элемент с максимальным значением символов

// // v1
// // const findLongestWord = function (string) {
// //   let words = string.split(' '); // Шаг 1 - преобразуем строку в массив
// //   let indexWord = 0; // исходная длина элемента
// //   let maxWord; // переменная в которую запишем

// //   for (let i = 0; i < words.length; i += 1) {
// //     indexWord = words[1].length; // Шаг 2 - считаем кол-во символов для каждого элемента массива

// //     //   Условие проверки, если длина элемента больше предыдущего, обновляем значение переменной
// //     // Шаг 3
// //     if (words[i].length > indexWord) {
// //       maxWord = words[i];
// //       return maxWord;
// //     }
// //   }
// // };

// // console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// // console.log(findLongestWord('Google do a roll')); // Google
// // console.log(findLongestWord('May the force be with you')); // force

// // v2
// // const findLongestWord = function (string) {
// //   const words = string.split(' '); // Шаг 1 - преобразуем строку в массив
// //   let maxLengthWord = words[0].length; // исходная максимальная длина элемента
// //   let maxWord;
// //   //   console.log(maxWord);
// //   for (const word of words) {
// //     let wordLength = word.length;
// //     //   console.log(wordIndex);
// //     if (wordLength > maxLengthWord) {
// //       // console.log(wordIndex);
// //         maxLengthWord = wordLength;
// //         maxWord = word[wordLength];
// //         console.log(maxWord);
// //     }
// //   }
// //   return maxLengthWord;
// // };

// // // v3
// // const findLongestWord = function (string) {
// //   const words = string.split(' '); // Шаг 1 - преобразуем строку в массив
// //   let maxLengthWord = words[0].length; // исходная максимальная длина элемента
// //   let maxWord;
// //   //   console.log(maxWord);
// //   for (let i = 0; i < words.length; i += 1) {
// //     let wordLength = words[i].length;

// //     if (wordLength > maxLengthWord) {
// //       maxLengthWord = wordLength;
// //       maxWord = words[i];
// //       console.log(maxWord);
// //     }
// //   }
// //     return maxLengthWord;

// // };
// // console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// // console.log(findLongestWord('Google do a roll')); // Google
// // console.log(findLongestWord('May the force be with you')); // force

// // Шаг 1 - преобразовать строку в массив
// // Шаг 2 - посчитать для каждого элемента массива кол - во символов
// // Шаг 3 - выбрать элемент с максимальным значением символов

// // function findLongestWord(string) {
// // // Шаг 1
// //   let words = string.split(' ');
// //   let indexWord = 0;
// //   let maxWord;
// //   // Шаг 2
// //   for (let i = 0; i < words.length; i += 1) {
// //     indexWord = words[1].length;
// // // Шаг 3
// //       if (words[i].length > indexWord) {
// //       maxWord = words[i];
// //       return maxWord;
// //     }
// //   }
// // };

// // Рабочий вариант
// const findLongestWord = function (string) {
//   return string.split(' ').reduce((a, b) => (b.length > a.length ? b : a));
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// console.log(findLongestWord('Google do a roll')); // Google
// console.log(findLongestWord('May the force be with you')); // force

// // 2.22
// // Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// // Объявлена функция createArrayOfNumbers(min, max)
// // Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// // Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// // Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// // Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// // В цикле for использовался метод push

// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   for (let i = min; i <= max; i++) numbers.push(i);
//   return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); // возвращает [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // возвращает [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // возвращает [29, 30, 31, 32, 33, 34]

// // v1 Рабочий вариант
// // function createArrayOfNumbers1(min, max) {
// //   const numbers = [];
// //   while (min <= max) numbers.push(min++);

// //   return numbers;
// // }

// // v2
// // function sum(ran) {
// //   var listSumNumber = 0;
// //   for (var i of ran) console.log((listSumNumber += i));

// //   return listSumNumber;
// // }
// // console.log(createArrayOfNumbers1(1, 3)); // возвращает [1, 2, 3]
// // console.log(createArrayOfNumbers1(14, 17)); // возвращает [14, 15, 16, 17]
// // console.log(createArrayOfNumbers1(29, 34)); // возвращает [29, 30, 31, 32, 33, 34]

// // 2.23
// // Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає
// // новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).

// // Оголошена функція filterArray(numbers, value)
// // Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// // Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// // Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// // Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// // Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// // Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// // В циклі for використовувався метод push

// const filterArray = function (numbers, value) {
//   const newArray = [];
//   for (const number of numbers) {
//     if (number > value) {
//       newArray.push(number);
//       // console.log(`${number} совпадает в массивах!`);
//     }
//   }
//   return newArray;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]

// // 2.24
// // Функція checkFruit(fruit) приймає рядок з назвою фрукта(параметр fruit), і перевіряє,
// //   чи присутній такий фрукт в масиві fruits.

// // Доповни код функції таким чином, що якщо:

// // фрукт присутній в масиві, то функція повертає true;
// // фрукт відсутній в масиві, то функція повертає false.
// // Оголошена функція checkFruit(fruit)
// // Виклик checkFruit("plum") повертає true
// // Виклик checkFruit("mandarin") повертає false
// // Виклик checkFruit("pear") повертає true
// // Виклик checkFruit("Pear") повертає false
// // Виклик checkFruit("apple") повертає true
// // Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// // У функції використовувався метод includes

// function checkFruit(fruit) {
//   const fruits = ['apple', 'plum', 'pear', 'orange'];
//   return fruits.includes(fruit);
// }

// console.log(checkFruit('plum')); // повертає true
// console.log(checkFruit('mandarin')); // повертає false
// console.log(checkFruit('pear')); // повертає true
// console.log(checkFruit('Pear')); // повертає false
// console.log(checkFruit('apple')); // повертає true

// // 2.25
// // Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// // Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они присутствуют
// // в обоих исходных массивах.А числа 0, 1 и 8 присутствуют только в одном из массивов.

// // Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в
// // параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют
// // в обоих исходных массивах.

// // Объявлена функция getCommonElements(array1, array2)
// // Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// // Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// // Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// // Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// // Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// // Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// // В цикле for использовались методы includes и push

// function getCommonElements(array1, array2) {
//   const uniqueNumbers = [];

//   for (const number of array1) {
//     if (array2.includes(number)) {
//       uniqueNumbers.push(number);
//       // console.log(`${number} совпадает в массивах!`);
//     }
//   }
//   return uniqueNumbers;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает []

// // 2.26
// // Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// // Объявлена функция calculateTotalPrice(order)
// // Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// // Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// // Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// // Вызов функции calculateTotalPrice([]) возвращает 0
// // Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму

// // function calculateTotalPrice(order) {
// //   let total = 0;
// //   // Change code below this line

// //   for (let i = 0; i < order.length; i += 1) {
// //     total += order[i];
// //   }

// //   // Change code above this line
// //   return total;
// // }

// // Выполнить рефакторинг используя for..of:

// function calculateTotalPrice(order) {
//   let total = 0;

//   for (const number of order) {
//     total += number;
//   }

//   return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
// console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116
// console.log(calculateTotalPrice([])); // возвращает 0

// // 2.27
// // Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// // Объявлена функция filterArray(numbers, value)
// // Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// // Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// // Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// // Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// // Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// // Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// // Функция filterArray() использует цикл for..of

// // function filterArray(numbers, value) {
// //   // Change code below this line
// //   const filteredNumbers = [];

// //   for (let i = 0; i < numbers.length; i += 1) {
// //     const number = numbers[i];

// //     if (number > value) {
// //       filteredNumbers.push(number);
// //     }
// //   }

// //   return filteredNumbers;
// //   // Change code above this line
// // }

// // Рефакторинг:
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   for (const iterator of numbers) {
//     const number = iterator;

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76]

// // 2.28
// // Дополни выражения остатка от деления так, чтобы код проходил тесты.

// // Значение переменной a это число 0
// // Значение переменной b это число 1
// // Значение переменной c это число 3
// // Значение переменной d это число 5
// // Значение переменной e это число 2

// const a = 3 % 3;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 3;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);

// // 2.29
// // Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// // Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// // Объявлена функция getEvenNumbers(start, end)
// // Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// // Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// // Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// // Вызов функции getEvenNumbers(8, 8) возвращает [8]
// // Вызов функции getEvenNumbers(7, 7) возвращает []
// // Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

// // function getEvenNumbers(start, end) {
// //   const numbers = [];
// //   let findNumbers = [];

// //   for (let i = start; ; i <= end; i++) numbers.push(i);
// //   const number = numbers[i];
// //   console.log(number);

// //     if (i % 2 === 0) {
// //       console.log('Чётное число: ', number);
// //       findNumbers += number;
// //     }

// //   return findNumbers;
// // }

// // console.log(getEvenNumbers(2, 5)) // возвращает [2, 4]
// // console.log(getEvenNumbers(3, 11)) // возвращает [4, 6, 8, 10]
// // console.log(getEvenNumbers(6, 12)) // возвращает [6, 8, 10, 12]
// // console.log(getEvenNumbers(8, 8)) // возвращает [8]
// // console.log(getEvenNumbers(7, 7)) // возвращает []

// function getEvenNumbers(start, end) {
//   const numbers = [];
//   let findNumbers = [];

//   for (let i = start; i <= end; i++) numbers.push(i);
//   // console.log(numbers);

//   for (let value of numbers) {
//     if (value % 2 === 0) {
//       findNumbers.push(value);
//     }
//   }

//   return findNumbers;
// }

// console.log(getEvenNumbers(2, 5)); // возвращает [2, 4]
// console.log(getEvenNumbers(3, 11)); // возвращает [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)); // возвращает [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)); // возвращает [8]
// console.log(getEvenNumbers(7, 7)); // возвращает []

// // 2.30
// // Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое
// // делится на 5 без остатка.

// // Объявлена переменная start со значением 6
// // Объявлена переменная end со значением 27
// // Объявлена переменная number без инициализации
// // Итоговое значение переменной number равно 10
// // В цикле for используется break для выхода до завершения всех итераций цикла

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }

// // 2.31
// // Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// // возвращала первое число от start до end, которое делится на divisor без остатка
// // не использовала оператор break
// // не использовала переменную number
// // Объявлена функция findNumber(start, end, divisor)
// // Вызов findNumber(2, 6, 5) возвращает 5
// // Вызов findNumber(8, 17, 3) возвращает 9
// // Вызов findNumber(6, 9, 4) возвращает 8
// // Вызов findNumber(16, 35, 7) возвращает 21
// // Вызов findNumber() со случайным набором чисел возвращает верный результат
// // В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

// function findNumber(start, end, divisor) {
//   for (let i = start; i < end; i += 1) {
//     if (i % divisor === 0) {
//       return i;
//     }
//   }
// }

// console.log(findNumber(2, 6, 5)); // возвращает 5
// console.log(findNumber(8, 17, 3)); // возвращает 9
// console.log(findNumber(6, 9, 4)); // возвращает 8
// console.log(findNumber(16, 35, 7)); // возвращает 21

// // 2.32
// // Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива
// // массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если
// // есть и false в противном случае.

// // При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// // Объявлена функция includes(array, value)
// // Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// // Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// // Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// // Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// // Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// // Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// // Вызов includes() для случайного массива со случайным value возвращает верный boolean
// // В функции includes используется for, return, но не метод массива includes

// function includes(array, value) {
//   let message = false;

//   for (let i = 0; i <= array.length; i += 1) {
//     let item = array[i];

//     if (item === value) {
//       message = true;
//       break;
//     }
//   }
//   return message;
// }

// // МОДУЛЬ 3

// // 3.1
// // Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце.
// // Добавь ему следующие свойства:

// // name - имя владельца, значение "Henry";
// // phone - телефон, значение "982-126-1588";
// // email - почта, значение "henry.carter@aptmail.com".
// // Объявлена переменная apartment
// // Значение переменной apartment это объект
// // У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// // В объекте apartment есть свойство owner
// // Значение свойства owner это объект
// // В объекте owner есть свойство name
// // Значение свойства name это "Henry"
// // В объекте owner есть свойство phone
// // Значение свойства phone это "982-126-1588"
// // В объекте owner есть свойствао email
// // Значение свойства email это "henry.carter@aptmail.com"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // 3.2

// // Объявлена переменная apartment
// // Значение переменной apartment это объект
// // У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// // В объекте apartment есть свойство owner
// // Значение свойства owner это объект
// // В объекте owner есть свойство name
// // Значение свойства name это "Henry"
// // В объекте owner есть свойство phone
// // Значение свойства phone это "982-126-1588"
// // В объекте owner есть свойствао email
// // Значение свойства email это "henry.carter@aptmail.com"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // 3.3
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам
// // обьекта apartment.

// // aptRating - рейтинг;
// // aptDescr - описание;
// // aptPrice - цена;
// // aptTags - теги.
// // Объявлена переменная apartment
// // Значение переменной apartment это объект
// // У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// // Объявлена переменная aptRating
// // Значение переменной aptRating это число 4
// // Объявлена переменная aptDescr
// // Значение переменной aptDescr это строка "Spacious apartment in the city center"
// // Объявлена переменная aptPrice
// // Значение переменной aptPrice это число 2153
// // Объявлена переменная aptTags
// // Значение переменной aptTags это массив строк ["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// // 3.4
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// // ownerName - имя владельца;
// // ownerPhone - телефон владельца;
// // ownerEmail - почта владельца;
// // numberOfTags - количество элементов массива в свойстве tags;
// // firstTag - первый элемент массива в свойстве tags;
// // lastTag - последний элемент массива в свойстве tags.
// // Объявлена переменная apartment с помощью const
// // Значение переменной apartment это объект
// // Объявлена переменная ownerName с помощью const
// // Значение переменной ownerName это строка "Henry"
// // Объявлена переменная ownerPhone с помощью const
// // Значение переменной ownerPhone это "982-126-1588"
// // Объявлена переменная ownerEmail с помощью const
// // Значение переменной ownerEmail это "henry.carter@aptmail.com"
// // Объявлена переменная numberOfTags с помощью const
// // Значение переменной numberOfTags это 3
// // Объявлена переменная firstTag с помощью const
// // Значение переменной firstTag это "premium"
// // Объявлена переменная lastTag с помощью const
// // Значение переменной lastTag это "top"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// // 3.5
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта
// // apartment используя синтаксис «квадратных скобок».

// // aptRating - рейтинг;
// // aptDescr - описание;
// // aptPrice - цена;
// // aptTags - теги.
// // Объявлена переменная apartment
// // Значение переменной apartment это объект
// // Объявлена переменная aptRating
// // Значение переменной aptRating это 4
// // Объявлена переменная aptDescr
// // Значение переменной aptDescr это "Spacious apartment in the city center"
// // Объявлена переменная aptPrice
// // Значение переменной aptPrice это 2153
// // Объявлена переменная aptTags
// // Значение переменной aptTags это ["premium", "promoted", "top"]

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// // 3.6
// // Дополни код обновив значения свойств объекта apartment:

// // цену в свойстве price на 5000;
// // рейтинг квартиры в свойстве rating на 4.7;
// // имя владельца во вложенном свойстве name на "Henry Sibola";
// // массив тегов в свойстве tags добавив в конец строку "trusted".
// // Объявлена переменная apartment
// // Значение переменной apartment это объект
// // Значение вложенного свойства price это число 5000
// // Значение вложенного свойства rating это число 4.7
// // Значение вложенного свойства name это строка "Henry Sibola"
// // Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = 'Henry Sibola';
// apartment.tags.push('trusted');

// console.log(apartment.price);
// console.log(apartment.rating);
// console.log(apartment.name);
// console.log(apartment.tags);

// // 3.7
// // Добавь объекту apartment несколько новых свойств:

// // area - площадь в квадратных метрах, число 60;
// // rooms - количество комнат, число 3;
// // location - местоположение квартиры, обьект со следующими вложенными свойствами;
// // country - страна, строка "Jamaica";
// // city - город, строка "Kingston".
// // Объявлена переменная apartment
// // Значение переменной apartment это объект
// // Значение вложенного свойства area это число 60
// // Значение вложенного свойства rooms это число 3
// // Значение вложенного свойства location это объект
// // Значение вложенного свойства location.country это строка "Jamaica"
// // Значение вложенного свойства location.city это строка "Kingston"

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4.7,
//   price: 5000,
//   tags: ['premium', 'promoted', 'top', 'trusted'],
//   owner: {
//     name: 'Henry Sibola',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {};
// apartment.location.country = 'Jamaica';
// apartment.location.city = 'Kingston';

// // 3.8
// // Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со
// // значениями из переменных с аналогичными именами.Обязательно используй синтаксис коротких свойств.

// // Объявлена переменная product
// // Значение переменной product это объект
// // Значение вложенного свойства name это строка "Repair Droid"
// // Значение вложенного свойства price это число 2500
// // Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
// // Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]

// const name = 'Repair Droid';
// const price = 2500;
// const image = 'https://via.placeholder.com/640x480';
// const tags = ['on sale', 'trending', 'best buy'];

// const product = {
//   name,
//   price,
//   image,
//   tags,
// };

// // 3.9
// // Дополни код объявления объекта credentials так, чтобы в результате у него были два
// // свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// // Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства
// // password - строка "jqueryismyjam".

// // Объявлена переменная credentials
// // Значение переменной credentials это объект
// // В объекте credentials есть свойство email
// // Значение вложенного свойства email это строка "henry.carter@aptmail.com"
// // В объекте credentials есть свойство password
// // Значение вложенного свойства password это строка "jqueryismyjam"

// const emailInputName = 'email';
// const passwordInputName = 'password';

// const credentials = {
//   // Change code below this line
//   [emailInputName]: 'henry.carter@aptmail.com',
//   [passwordInputName]: 'jqueryismyjam',

//   // Change code above this line
// };

// // 3.10
// // Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а
// // в массив values все значения его свойств.

// // Объявлена переменная apartment
// // Значение переменной apartment это объект
// // Объявлена переменная keys
// // Значение переменной keys это массив ["descr", "rating", "price"]
// // Объявлена переменная values
// // Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// const values = [];
// // Change code below this line

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// // 3.11
// // Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// // Объявлена переменная advert.
// // Значение переменной advert это объект.
// // Объявлена переменная apartment.
// // Значение переменной apartment это объект.
// // Объявлена переменная keys.
// // Значение переменной keys это массив ["descr", "rating", "price"].
// // Объявлена переменная values.
// // Значение переменной values это массив["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//   service: 'apt',
// };
// const apartment = Object.create(advert);
// apartment.descr = 'Spacious apartment in the city center';
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//   // Change code below this line
//   if (apartment.hasOwnProperty(key)) {
//     keys.push(key);
//     values.push(apartment[key]);
//   }
//   // Change code above this line
// }

// // 3.12
// // Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств
// // объекта в параметре object.Используй переменную propCount для хранения количества свойств объекта.

// // Объявлена функция countProps(object)
// // Вызов countProps({}) возвращает 0
// // Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// // Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// // Функция подсчитывает только собственные свойства объекта

// // 3.12
// // Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств
// // объекта в параметре object.Используй переменную propCount для хранения количества свойств объекта.

// // Объявлена функция countProps(object)
// // Вызов countProps({}) возвращает 0
// // Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// // Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// // Функция подсчитывает только собственные свойства объекта

// function countProps(object) {
//   let propCount = 0;
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
// }

// console.log(countProps({})); // возвращает 0
// console.log(countProps({ name: 'Mango', age: 2 })); // возвращает 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // возвращает 3

// // 3.13
// // Перебери объект apartment используя метод Object.keys() и цикл for...of.Запиши в переменную keys
// // массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// // Объявлена переменная apartment.
// // Значение переменной apartment это объект.
// // Объявлена переменная keys.
// // Значение переменной keys это массив ["descr", "rating", "price"].
// // Значение переменной keys получено с помощью метода Object.keys().
// // Объявлена переменная values.
// // Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// // Значение переменной values получено с помощью цикла for...of.

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Change code below this line
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
// console.log(keys);
// console.log(values);

// // 3.14
// // Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно,
// // но необязательно, цикл for...of.

// // Объявлена функция countProps(object)
// // Вызов countProps({}) возвращает 0
// // Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// // Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// // Функция подсчитывает только собственные свойства объекта
// // Функция использует метод Object.keys() и, возможно, цикл for...of

// function countProps(object) {
//   let propCount = 0;

//   for (let obj of Object.keys(object)) {
//     propCount += 1;
//   }

//   return propCount;
// }

// console.log(countProps({})); // возвращает 0
// console.log(countProps({ name: 'Mango', age: 2 })); // возвращает 2
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // возвращает 3

// // 3.15
// // Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values
// // массив всех значений его свойств.Используй методы Object.keys() и Object.values().

// // Объявлена переменная apartment
// // Значение переменной apartment это объект
// // Объявлена переменная keys
// // Значение переменной keys это массив ["descr", "rating", "price"]
// // Объявлена переменная values
// // Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// // Для получения массива ключей объекта apartment используется Object.keys()
// // Для получения массива значений объекта apartment используется Object.values()

// const apartment = {
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
// };
// // Change code below this line
// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys);
// console.log(values);

// // 3.16
// // Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства
// // это имя сотрудника, а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат
// // сотрудников и вернуть её.Используй переменную totalSalary для хранения общей суммы зарплаты.

// // Объявлена функция countTotalSalary(salaries)
// // Вызов countTotalSalary({}) возвращает 0
// // Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// // Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// // Функция учитывает только собственные свойства объекта

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   for (const salary of Object.values(salaries)) {
//     totalSalary += salary;
//   }

//   return totalSalary;
// }

// console.log(countTotalSalary({})); // возвращает 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // возвращает 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // возвращает 400


// // 3.17
// // Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств
// // hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// // Объявлена переменная colors
// // Значение переменной colors это массив
// // Объявлена переменная hexColors
// // Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// // Объявлена переменная rgbColors
// // Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//   { hex: '#f44336', rgb: '244,67,54' },
//   { hex: '#2196f3', rgb: '33,150,243' },
//   { hex: '#4caf50', rgb: '76,175,80' },
//   { hex: '#ffeb3b', rgb: '255,235,59' },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// for (const color of colors) {
//   hexColors.push(color.hex);
//   rgbColors.push(color.rgb);
// }
// console.log(hexColors);
// console.log(rgbColors);

// // 3.18
// // Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название
// // продукта. Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает
// // его цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.

// // Объявлена функция getProductPrice(productName).
// // Вызов getProductPrice("Radar") возвращает 1300.
// // Вызов getProductPrice("Grip") возвращает 1200.
// // Вызов getProductPrice("Scanner") возвращает 2700.
// // Вызов getProductPrice("Droid") возвращает 400.
// // Вызов getProductPrice("Engine") возвращает null.

// const products = [
//   { name: 'Radar', price: 1300, quantity: 4 },
//   { name: 'Scanner', price: 2700, quantity: 3 },
//   { name: 'Droid', price: 400, quantity: 7 },
//   { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   for (const key of products)
//     if (key.name === productName)
//       return key.price;
//       return null
//     }
  

// console.log(getProductPrice('Radar')); // возвращает 1300.
// console.log(getProductPrice('Grip')); // возвращает 1200.
// console.log(getProductPrice('Scanner')); // возвращает 2700.
// console.log(getProductPrice('Droid')); // возвращает 400.
// console.log(getProductPrice('Engine')); // возвращает null.

// 3.19 Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
// Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта в масиві products.
// Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає ["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає [4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає [1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає []


// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   const finedValues = [];
//   for (const product of products)
//     if (product[propName]) {
//       finedValues.push(product[propName]);
//     }
//   return finedValues;
//   }
          


// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []


// // function getAllPropValues(propName) {
// //   return products.map(product => product[propName]).filter(value => value !== undefined);
// // }


// 3.20 Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName - назва товару.
// Функція повинна повернути загальну вартість(ціна * кількість) товару з таким ім'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   let totalPrice = 0;
//   for (const product of products) {
//   if(product.name === productName) {
//   totalPrice += product.price * product.quantity;}
// }
//   return totalPrice;
// }

// console.log(calculateTotalPrice("Blaster")); // 0
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800


// 3.21 Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру за три дні
//   (meanTemperature).Заміни оголошення змінних yesterday, today і tomorrow однією операцією деструктуризації
//   властивостей об'єкта highTemperatures.

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна meanTemperature
// Значення змінної meanTemperature - це число 29
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// Change code below this line

// const {yesterday, today, tomorrow } = highTemperatures;

// const yesterday = highTemperatures.yesterday;
// const today = highTemperatures.today;
// const tomorrow = highTemperatures.tomorrow;

// Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(meanTemperature);

// 3.22 У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди.
// Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації
// властивостей об'єкта highTemperatures. Задай значення за замовчуванням для icon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday, today, tomorrow, icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// const meanTemperature = (yesterday + today + tomorrow) / 3;

// 3.23 Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією
// деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для highIcon - рядок
// "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highYesterday
// Значення змінної highYesterday - це число 28
// Оголошена змінна highToday
// Значення змінної highToday - це число 26
// Оголошена змінна highTomorrow
// Значення змінної highTomorrow - це число 33
// Оголошена змінна highIcon
// Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується деструктуризація об'єкта


// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };

// const {yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, icon:highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } = highTemperatures;

// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// 3.24 Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебирання масиву використовується цикл for...of
// В циклі for...of використовується деструктуризація об'єкта

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }

// console.log(hexColors);
// console.log(rgbColors);

// 3.25 Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а також
// необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації властивостей
// об'єкта forecast.Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна forecast
// Значення змінної forecast - це об'єкт
// Оголошена змінна highToday за допомогою деструктуризації
// Значення змінної highToday - це число 32
// Оголошена змінна lowToday за допомогою деструктуризації
// Значення змінної lowToday - це число 28
// Оголошена змінна todayIcon за допомогою деструктуризації
// Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Оголошена змінна highTomorrow за допомогою деструктуризації
// Значення змінної highTomorrow - це число 31
// Оголошена змінна lowTomorrow за допомогою деструктуризації
// Значення змінної lowTomorrow - це число 27
// Оголошена змінна tomorrowIcon за допомогою деструктуризації
// Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//   },
// };

// const { today: { low: lowToday, high: highToday, icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg" },
//   tomorrow: { low: lowTomorrow, high: highTomorrow, icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg" } } = forecast;

// const highToday = forecast.today.high;
// const lowToday = forecast.today.low;
// const todayIcon = forecast.today.icon;

// const highTomorrow = forecast.tomorrow.high;
// const lowTomorrow = forecast.tomorrow.low;
// const tomorrowIcon = forecast.tomorrow.icon;


// 3.26 Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур на два
// дні наступного формату.

// {
//   today: { low: 10, high: 20 },
//   tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією деструктуризації
// властивостей об'єкта forecast.

// Оголошена функція calculateMeanTemperature(forecast)
// В тілі функції використовується деструктуризація об'єкта
// В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
// Виклик calculateMeanTemperature({ today: {low: 28, high: 32}, tomorrow: {low: 25, high: 29} }) повертає 28.5
// Виклик calculateMeanTemperature({ today: {low: 37, high: 40}, tomorrow: {low: 33, high: 38} }) повертає 37

// Change code below this line
// function calculateMeanTemperature(forecast) {
//   const {today:{low: todayLow, high: todayHigh }, tomorrow:{low: tomorrowLow, high: tomorrowHigh }

//   } = forecast;

//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }


// 3.27 У змінній scores зберігається масив результатів тестування.Використовуючи розподіл і методи
// Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а у
// worstScore - найнижчий.

// Оголошена змінна scores
// Значення змінної scores - це масив [89, 64, 42, 17, 93, 51, 26]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 93
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 17
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max (... scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);

// 3.28 У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування
// окремих груп.Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
// Оголошена змінна firstGroupScores
// Значення змінної firstGroupScores - це масив [64, 42, 93]
// Оголошена змінна secondGroupScores
// Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
// Оголошена змінна thirdGroupScores
// Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
// Оголошена змінна allScores.
// Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 97
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 14
// Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max (... allScores);
// const worstScore = Math.min (... allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// 3.29 В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються
// у змінній defaultSettings.Під час створення тесту, усі або частину налаштувань можна перевизначити, вони
// зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і поверх
// них застосувати перевизначені налаштування.Доповни код таким чином, щоб у змінній finalSettings утворився
// об'єкт фінальних налаштувань тесту.

// Оголошена змінна defaultSettings
// Значення змінної defaultSettings - це об'єкт
// Оголошена змінна overrideSettings
// Значення змінної overrideSettings - це об'єкт
// Оголошена змінна finalSettings
// Значення змінної finalSettings - це об'єкт
// Значення властивості finalSettings.theme дорівнює "light"
// Значення властивості finalSettings.public дорівнює "false"
// Значення властивості finalSettings.withPassword дорівнює "true"
// Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
// Значення властивості finalSettings.timePerQuestion дорівнює 30
// Для присвоєння значення змінній finalSettings використовується синтаксис ...

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = { ...defaultSettings, ...overrideSettings };

// console.log(finalSettings);


// 3.30 Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
// category - категорія завдання.
// priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data. У новому
// об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть бути
// відсутніми.Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за
// замовчуванням, що зберігаються в однойменних локальних змінних.

// Оголошена функція makeTask(data)
// Виклик makeTask({}) повертає { category: "General", priority: "Normal", completed: false }

// Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })
// повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }

// Виклик makeTask({ category: "Finance", text: "Take interest" })
// повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }

// Виклик makeTask({ priority: "Low", text: "Choose shampoo" })
// повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }

// Виклик makeTask({ text: "Buy bread" })
// повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";

//   return {category, priority, completed, ...data};

// }

// console.log(makeTask({ category: "General", priority: "Normal", completed: false }));
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({ category: "Finance", text: "Take interest" }));
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" }));
// console.log(makeTask({ text: "Buy bread" }));


// 3.31 Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку
// кількість аргументів, рахувала і повертала їх суму.

// Оголошена функція add
// Функція add використовує параметр args
// Для збирання аргументів у змінну args, у підписі функції використовується синтаксис ... (оператор rest)
// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78
// Виклик add(74, 11, 62, 46, 12, 36) повертає 241


// function add(...args) {
//   let total = 0
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }

// console.log(add(15, 27)); // повертає 42
// console.log(add(12, 4, 11, 48)); // повертає 75
// console.log(add(32, 6, 13, 19, 8)); // повертає 78
// console.log(add(74, 11, 62, 46, 12, 36)); // повертає 241


// 3.32 Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло функції addOverNum() таким чином,
// щоб вона рахувала суму тільки тих аргументів, які більші за задане число.Це число повинно бути першим
// параметром функції.

// Оголошена функція addOverNum()
// Виклик addOverNum(50, 15, 27) повертає 0
// Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218


// function addOverNum(firstArg, ...args) {
//   let total = 0;

//   for (const arg of args) {

//     if (arg > firstArg)
//     total += arg;

//   }
// return total;
  
// }

// console.log(addOverNum(50, 15, 27)); // повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // повертає 218

// 3.33 Функція findMatches() приймає довільну кількість аргументів.Першим аргументом завжди буде масив чисел,
// а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть тільки ті аргументи,
// починаючи з другого, які є в масиві першого аргументу.

// Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2], тому що тільки вони є в
// масиві першого аргументу.

// Оголошена функція findMatches()
// Виклик findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повертає [1, 2]
// Виклик findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) повертає [17, 89, 2]
// Виклик findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) повертає [24, 9, 41]
// Виклик findMatches([63, 11, 8, 29], 4, 7, 16) повертає []


// Change code below this line
// function findMatches(array, ...args) {
//   const matches = []; // Don't change this line
// for (const item of array) {
//   if (args.includes(item))
//     matches.push(item);
// }
//   // Change code above this line
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)) // повертає [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)) //  повертає [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)) //  повертає [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)) //  повертає []


// 3.34 Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за аналогією з
// getBooks() і addBook(bookName).
// Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book <назва книги>",
// де < назва книги > - це значення параметра bookName.
// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає рядок "Updating book
// < стара назва > to < нова назва > ", де <стара назва> і <нова назва> - це значення параметрів oldName і newName відповідно.

// Оголошена змінна bookShelf
// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.getBooks - це метод об'єкта
// Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"

// Значення властивості bookShelf.addBook - це метод об'єкта
// Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"

// Значення властивості bookShelf.removeBook - це метод об'єкта
// Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"

// Значення властивості bookShelf.updateBook - це метод об'єкта
// Виклик методу bookShelf.updateBook("Sands of dune", "Dune") повертає рядок "Updating book Sands of dune to Dune"

// const bookShelf = {
 
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },

//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
  
//   updateBook(oldName, newName) {
//     return `Updating book ${oldName} to ${newName}`;
//   },

// };

// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Haze"));
// console.log(bookShelf.removeBook("Red sunset"));
// console.log(bookShelf.updateBook("Sands of dune", "Dune"));

// 3.35 Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на
// newName у властивості books.Використовуй indexOf() для того, щоб знайти потрібний елемент масиву, і
// splice() для того, щоб замінити цей елемент.

// Оголошена змінна bookShelf
// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення властивості books - це
// масив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення властивості books - це
// масив["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     const bookIndex = this.books.indexOf(oldName);
//        this.books.splice(bookIndex, 1, newName);

//   },

// };

// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"));
// console.log(bookShelf.updateBook("The last kingdom", "Dune"));


// 3.36 До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення
// інвентарю - додавання, видалення, пошуку та оновлення зілля.Додай об'єкту atTheOldToad властивість
// potions, значенням якої зроби порожній масив.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив []

// const atTheOldToad = {
//   // Change code below this line

// potions: []

//   // Change code above this line
// };

// console.log(atTheOldToad);

// 3.37 Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає ["Speed potion", "Dragon breath", "Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
//   getPotions(p) {
//         return this.potions;
//   }
//   };

// console.log(atTheOldToad.getPotions());

// 3.38 Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в кінець масиву
// зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.addPotion("Invisibility"),
//   у властивості potions буде масив["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// Після другого виклику методу atTheOldToad.addPotion("Power potion"),
//   у властивості potions буде масив["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   addPotion(potionName) {
//     this.potions.push(potionName);
//     return this.potions;

//   },
// };

// console.log(atTheOldToad.addPotion("Invisibility")); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// console.log(atTheOldToad.addPotion("Power potion")); // ["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]


// 3.39 Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з масиву зілля у
// властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.removePotion("Dragon breath"),
//   у властивості potions буде масив["Speed potion", Stone skin"]
// Після другого виклику методу atTheOldToad.removePotion("Speed potion"),
//   у властивості potions буде масив["Stone skin"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
//   removePotion(potionName) {
//     const { potions } = this;

//     for (let i = 0; i < potions.length; i += 1) {
//       const item = potions[i];

//        if (potionName === item) {
//         potions.splice(i, 1);
//       }
//     }
//     return this.potions;

//   },
// };

// console.log(atTheOldToad.removePotion("Dragon breath")); // ["Speed potion", Stone skin"]
// console.log(atTheOldToad.removePotion("Speed potion")); // ["Stone skin"]


// 3.40 Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName
// на newName в масиві зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив ["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
//   у властивості potions буде масив["Speed potion", "Polymorth", "Stone skin"]
// Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"),
//   у властивості potions буде масив["Speed potion", "Polymorth", "Invisibility"]


// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
  
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);
//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // return potions;
// };


// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth")); // ["Speed potion", "Polymorth", "Stone skin"]
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invisibility")); // ["Speed potion", "Polymorth", "Invisibility"]


// 3.41 Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому,
// можливо, й іншими характеристиками.Тому зараз у властивості potions буде зберігатися масив об'єктів з
// наступними властивостями.

// {
//   name: "Dragon breath",
//   price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків, а з
// масивом об'єктів.

// getPotions() - метод для отримання всього зілля. Повертає значення властивості potions.

// addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості potions, але тільки, якщо
// такого зілля ще немає в інвентарі.В іншому випадку повертається рядок.

// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.

// updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з назвою oldName на newName в
// масиві potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта

// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта повертає
// [{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
// { name: "Stone skin", price: 520 }]

// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }),
// в масиві potions останнім елементом буде цей об'єкт

// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }),
// в масиві potions останнім елементом буде цей об'єкт

// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт

// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
// масив potions не змінюється

// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
// массив potions не змінюється

// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }),
// повертає рядок "Error! Potion Dragon breath is already in your inventory!"

// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }),
// повертає рядок "Error! Potion Stone skin is already in your inventory!"
// Значення властивості atTheOldToad.removePotion - це метод об'єкта

// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"),
// у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"),
// у властивості potions буде масив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]

// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта

// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"),
// у властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 },
// { name: "Stone skin", price: 520 }]
// Для вихідного об'єкта після виклику методу
// atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"),
// у властивості potions буде масив[{ name: "Speed potion", price: 460 },
// { name: "Dragon breath", price: 780 }, { name: "Invulnerability potion", price: 520 }]

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     if (this.potions.includes(newPotion)) {
//       return `Error! Potion ${newPotion} is already in your inventory!`;
//     }

//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     const potionIndex = this.potions.indexOf(potionName);

//     if (potionIndex === -1) {
//       return `Potion ${potionName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1);
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     const { name: newPotionName } = newPotion;
//     for (const potion of this.potions) {
//       if (newPotionName === potion['name']) {
//         return `Error! Potion ${newPotionName} is already in your inventory!`;
//       }
//     }
//     this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       const potionIndex = this.potions.indexOf(potion);
//       if (potion['name'] === potionName) {
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//     return `Potion ${potionName} is not in inventory!`;
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion['name'] === oldName) {
//         potion['name'] = newName;
//       }
//     }
//     return `Potion ${oldName} is not in inventory!`;
//   },
//   // Change code above this line
// };


// 4.1 Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza, а у
// змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

// function makePizza() {
//   return "Your pizza is being prepared, please wait.";
// }
// // Change code below this line

// const result = makePizza();
// const pointer = makePizza;

// 4.2 Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром(параметр callback)
// колбек - функцію і повертала її виклик.Функція deliverPizza або makePizza буде передаватися як колбек і
// очікувати аргументом ім'я готової піци, що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
//   return  callback(pizzaName);
  
// }

// console.log(makeMessage("Royal Grand", makePizza)); // "Pizza Royal Grand is being prepared, please wait..."
// console.log(makeMessage("Ultracheese", deliverPizza)); // "Delivering Ultracheese pizza."


// 4.3 Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн
// колбек - функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром
// pizzaName

// function makePizza(pizzaName, callback) {
//   console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//   callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//   console.log(`Delivering pizza ${pizzaName}.`);
// });
// makePizza("Ultracheese", function eatPizza(pizzaName) {
//   console.log(`Eating pizza ${pizzaName}.`);
//   });

// 4.4 Необхідно написати логіку обробки замовлення піци.Виконай рефакторинг методу order таким чином, щоб
// він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName, метод order повинен повертати
// результат виклику колбека onError, передаючи йому аргументом
// рядок "There is no pizza with a name <имя пиццы> in the assortment."

// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName, метод order повинен повертати
// результат виклику колбека onSuccess, передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError)
// повертає "Your order is accepted. Cooking pizza Smoked."

// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError)
// повертає "Your order is accepted. Cooking pizza Four meats."

// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError)
// повертає "Error! There is no pizza with a name Big Mike in the assortment."

// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError)
// повертає "Error! There is no pizza with a name Vienna in the assortment."

// const pizzaPalace = {
//   pizzas: ["Ultracheese", "Smoked", "Four meats"],
//   order(pizzaName, onSuccess, onError) {

//     if (this.pizzas.includes(pizzaName)) {
      
//       return onSuccess(pizzaName);
//     }
//     return onError (`There is no pizza with a name ${pizzaName} in the assortment.`);
//   },
// };

// // Callback for onSuccess
// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// // Method calls with callbacks
// // pizzaPalace.order("Smoked", makePizza, onOrderError);
// // pizzaPalace.order("Four meats", makePizza, onOrderError);
// // pizzaPalace.order("Big Mike", makePizza, onOrderError);
// // pizzaPalace.order("Vienna", makePizza, onOrderError);


// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// // повертає "Your order is accepted. Cooking pizza Smoked."

// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// // повертає "Your order is accepted. Cooking pizza Four meats."

// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// // повертає "Error! There is no pizza with a name Big Mike in the assortment."

// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));
// // повертає "Error! There is no pizza with a name Vienna in the assortment."


// 4.5 Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція calculateTotalPrice(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;
//   // Change code below this line

//   // for (let i = 0; i < orderedItems.length; i += 1) {
//   //   totalPrice += orderedItems[i];
//   // }

//   orderedItems.forEach(function (orderedItems, index) {
//     // console.log(`Індекс ${index}, значення ${orderedItems}`);
//     totalPrice += orderedItems;
// });
//   // Change code above this line
//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])) // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // повертає 1116


// 4.6 Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив, в якому будуть
// тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   numbers.forEach(function (number, index) {
//  if (number > value) {
//       filteredNumbers.push(number);
//     };
//   });

//   return filteredNumbers;
// };


// console.log(filterArray([1, 2, 3, 4, 5], 3)) //  повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)) //  повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)) //  повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)) //  повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)) //  повертає [24, 41, 76]


// 4.7 Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри
// firstArray і secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в
// обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція getCommonElements(firstArray, secondArray)
// Для перебирання параметра (масиву) використаний метод forEach
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line

//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   firstArray.forEach(function (number, index) {
//     if (secondArray.includes(number)) {
//       commonElements.push(number);
//     };
//   });

//   return commonElements;
//   // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])) //  повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) //  повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) //  повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) //  повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])) //  повертає []


// 4.8 Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//   // Change code above this line
//   return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => {
//   // Change code above this line
//   return quantity * pricePerItem;
// };

// console.log(calculateTotalPrice(5, 100)) // повертає 500
// console.log(calculateTotalPrice(8, 60)) // повертає 480
// console.log(calculateTotalPrice(3, 400)) // повертає 1200

// 4.9 Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами (quantity, pricePerItem)
// У функції використане неявне повернення
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// // Change code above this line


// console.log(calculateTotalPrice(5, 100)) // повертає 500
// console.log(calculateTotalPrice(8, 60)) // повертає 480
// console.log(calculateTotalPrice(3, 400)) // повертає 1200


// 4.10 Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на
// стрілочну функцію.Заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметром (orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   // orderedItems.forEach(function (item) {
//   //   totalPrice += item;

//     orderedItems.forEach((item, index) => {
//       totalPrice += item;
      
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])) // повертає 138
// console.log(calculateTotalPrice([164, 48, 291])) // повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])) // повертає 1116


// 4.11 Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна filterArray
// Змінній filterArray присвоєна стрілочна функція з параметрами (numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// Change code below this line
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

  // numbers.forEach(function (number) {
  //   if (number > value) {
  //     filteredNumbers.push(number);
  //   }

//   numbers.forEach((number, index) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }

//   });

//   // Change code above this line
//   return filteredNumbers;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)) // повертає [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)) // повертає [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)) // повертає []
// console.log(filterArray([12, 24, 8, 41, 76], 38)) // повертає [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)) // повертає [24, 41, 76]


// 4.12 Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна getCommonElements.
// Змінній getCommonElements присвоєна стрілочна функція з параметрами (firstArray, secondArray)
// Для перебирання масиву firstArray використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає [2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає [1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає [12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає [10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає []
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];

//   firstArray.forEach(function (element) {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// const getCommonElements = (firstArray, secondArray) => {
//   const commonElements = [];

//   firstArray.forEach((element, index) => {
//     if (secondArray.includes(element)) {
//       commonElements.push(element);
//     }
//   });

//   // Change code above this line
//   return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])) // повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])) // повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])) // повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])) // повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])) // повертає []

  
  
// 4.13 Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент, значення
// якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers, а
// створювала, наповнювала і повертала новий масив з оновленими значеннями.

// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив [1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив [12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив [17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив [144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function changeEven(numbers, value) {
//   // Change code below this line
//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }

// v2
// const changeEven = (numbers, value) => {
//   let newArray = [];
//   numbers.forEach((element, index) => {
//     if (element % 2 === 0) {
//       newArray.push(element  + value);
//     } else{
//     newArray.push(element);}
//   });
// return newArray

// v3
// function changeEven (numbers, value) {
//   let newArray = [];
//   numbers.forEach((number) => {
//     number % 2 === 0
//       ? newArray.push(number + value)
//       : newArray.push(number);
//   });
//   return newArray;
// }
  
// console.log(changeEven([1, 2, 3, 4, 5], 10)) // повертає новий масив [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10)) // повертає новий масив [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100)) // повертає новий масив [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100)) // повертає новий масив [144, 13, 81, 192, 136, 154]


// 4.14 Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет.
// Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив ["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив [5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths)

// 4.15 Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв
// книг(властивість title) з усіх об'єктів масиву books.

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man", "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const titles = books.map(book => book.title);

// console.log(titles)

// 4.16 Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів
// книг(властивість genres) з масиву книг books.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив [ "adventure", "history", "fiction", "horror", "mysticism" ]
// Для перебирання масиву books використовується метод flatMap()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// console.log(genres)


// 4.17 Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів
// (властивість name) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUserNames = users => {
//    return users.map(user => user.name)
// };
  
// console.log(getUserNames)


// 4.18 Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових
// адрес користувачів(властивість email) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив ["moorehensley@indexia.com", "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com", "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const getUserEmails = users => {
//     return users.map(user => user.email)

//   };


// 4.19 Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers,
// а в змінній oddNumbers - масив непарних.Обов'язково використовуй метод filter().

// Оголошена змінна numbers
// Значення змінної numbers - це масив [17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошена змінна evenNumbers
// Значення змінної evenNumbers - це масив [24, 82, 36, 18, 52]
// Оголошена змінна oddNumbers
// Значення змінної oddNumbers - це масив [17, 61, 47, 73]
// Для перебирання масиву numbers використаний метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// console.log(evenNumbers); // це масив[24, 82, 36, 18, 52]
// console.log(oddNumbers); // це масив[17, 61, 47, 73]


// 4.20 Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг(властивість genres)
// з масиву books, а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна allGenres
// Значення змінної allGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив ["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter(
//   (book, index, array) => array.indexOf(book) === index
// );


// console.log(allGenres); // це масив ["adventure", "history", "fiction", "mysticism", "horror", "mysticism", "adventure"]
// console.log(uniqueGenres); // це масив ["adventure", "history", "fiction", "mysticism", "horror"]


// 4.21 Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких(властивість rating) більший за або дорівнює
// значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке
// збігається зі значенням у змінній AUTHOR.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// Оголошена змінна topRatedBooks
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Оголошена змінна booksByAuthor
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// Для перебирання масиву books використаний метод filter()


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks); // це масив книг з рейтингом, вищим за 8
// console.log(booksByAuthor); // це масив книг, автор яких "Bernard Cornwell"


// // 4.22 Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів,
// // у яких колір очей(властивість eyeColor) збігається зі значенням параметра color.

// // Оголошена змінна getUsersWithEyeColor
// // Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами (users, color)
// // Для перебирання параметра users використовується метод filter()

// // Якщо значення параметра color - це "blue", функція повертає
// // масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush і Carey Barr

// // Якщо значення параметра color - це "green", функція повертає
// // масив об'єктів користувачів з іменами Ross Vazquez і Elma Head

// // Якщо значення параметра color - це "brown", функція повертає
// // масив об'єктів користувачів з іменами Blackburn Dotson і Sheree Anthony

// // Якщо значення параметра color - це будь - який інший рядок, функція повертає порожній масив
// // Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const getUsersWithEyeColor = (users, color) =>
//   users.filter(user => user.eyeColor === color);

// 4.23 Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином, щоб вона повертала масив
// користувачів, вік яких(властивість age) потрапляє у проміжок від minAge до maxAge.

// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами (users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно, функція повертає масив об'єктів користувачів з іменами Ross Vazquez, Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно, функція повертає масив об'єктів користувачів з іменами Moore Hensley, Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUsersWithAge = (users, minAge, maxAge) => {
//  users.filter(user => user.age >= minAge && user.age <= maxAge);

// };


// 4.24 Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів,
// у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// Оголошена змінна getUsersWithFriend
// Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами (users, friendName)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів користувачів з іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUsersWithFriend = (users, friendName) => {
//   users.filter(user => user.friends.includes(friendName));
// };


// 4.25 Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх користувачів
// (властивість friends).У декількох користувачів можуть бути однакові друзі, зроби так, щоб масив, що
// повертається, не містив повторень.

// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром (users)
// Виклик функції із зазначеним масивом користувачів повертає масив["Sharron Pace", "Briana Decker", "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson", "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const getFriends = (users) => {
//   const allFriends = users.flatMap(user => user.friends);
//   const uniqueFriends = allFriends.filter((friend, index, array) => array.indexOf(friend) === index);

//   return uniqueFriends;
// };
  

// 4.26 Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів,
// значення властивості isActive яких - true.

// Оголошена змінна getActiveUsers Змінній getActiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Sharlene Bush, Elma Head, Carey Barr і Sheree Anthony
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const getActiveUsers = (users) => {
//    users.filter(user => user.isActive === true);
// };


// 4.27 Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів,
//   значення властивості isActive яких - false.

// Оголошена змінна getInactiveUsers.
// Змінній getInactiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Moore Hensley, Ross Vazquez і Blackburn Dotson
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getActiveUsers = (users) => {
//    users.filter(user => user.isActive !== true);
// };


// 4.28 Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається зі значенням змінної AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна BOOK_TITLE
// Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Robert Sheckley"
// Оголошена змінна bookWithTitle
// Значення змінної bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// Оголошена змінна bookByAuthor
// Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
// Для перебирання масиву books використаний метод find()



// const books = [
//   {
//     title: 'The Last Kingdom',
//     author: 'Bernard Cornwell',
//     rating: 8.38,
//   },
//   {
//     title: 'Beside Still Waters',
//     author: 'Robert Sheckley',
//     rating: 8.51,
//   },
//   {
//     title: 'The Dream of a Ridiculous Man',
//     author: 'Fyodor Dostoevsky',
//     rating: 7.75,
//   },
//   { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find((book) => book.title === BOOK_TITLE);
// const bookByAuthor = books.find((book) => book.author === AUTHOR);

// 4.29 Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача,
// пошта якого(властивість email) збігається зі значенням параметра email.

// Оголошена функція getUserWithEmail(users, email)
// Для перебирання параметра users використовується метод find()
// Якщо значення параметра email - це "shereeanthony@kog.com", функція повертає об'єкт користувача з ім'ям Sheree Anthony
// Якщо значення параметра email - це "elmahead@omatom.com", функція повертає об'єкт користувача з ім'ям Elma Head
// Якщо значення параметра email - це "blackburndotson@furnigeer.com", функція повертає об'єкт користувача з ім'ям Blackburn Dotson
// Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUserWithEmail = (users, email) => {
// users.find((user) => user.email === email);
// };

// 4.30 Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна eachElementInFirstIsEven
// Значення змінної eachElementInFirstIsEven - це буль true
// Оголошена змінна eachElementInFirstIsOdd
// Значення змінної eachElementInFirstIsOdd - це буль false
// Оголошена змінна eachElementInSecondIsEven
// Значення змінної eachElementInSecondIsEven - це буль false
// Оголошена змінна eachElementInSecondIsOdd
// Значення змінної eachElementInSecondIsOdd - це буль true
// Оголошена змінна eachElementInThirdIsEven
// Значення змінної eachElementInThirdIsEven - це буль false
// Оголошена змінна eachElementInThirdIsOdd
// Значення змінної eachElementInThirdIsOdd - це буль false
// Для перебирання масивів використаний метод every()


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every((value) => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every((value) => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every((value) => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every((value) => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every((value) => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every((value) => value % 2 !== 0);


// 4.31 Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла, чи всі користувачі
// зараз активні(властивість isActive) і повертала true або false.

// Оголошена змінна isEveryUserActive
// Змінній isEveryUserActive присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод every()
// Виклик функції із зазначеним масивом користувачів повертає false
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const isEveryUserActive = (users) => {
//    users.every((user) => user.isActive === true);
// };


// 4.32 Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна anyElementInFirstIsEven
// Значення змінної anyElementInFirstIsEven - це буль true
// Оголошена змінна anyElementInFirstIsOdd
// Значення змінної anyElementInFirstIsOdd - це буль false
// Оголошена змінна anyElementInSecondIsEven
// Значення змінної anyElementInSecondIsEven - це буль false
// Оголошена змінна anyElementInSecondIsOdd
// Значення змінної anyElementInSecondIsOdd - це буль true
// Оголошена змінна anyElementInThirdIsEven
// Значення змінної anyElementInThirdIsEven - це буль true
// Оголошена змінна anyElementInThirdIsOdd
// Значення змінної anyElementInThirdIsOdd - це буль true
// Для перебирання масивів використаний метод some()


// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(value => value % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(value => value % 2 !== 0);

// const anyElementInSecondIsEven = secondArray.some(value => value % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(value => value % 2 !== 0);

// const anyElementInThirdIsEven = thirdArray.some(value => value % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(value => value % 2 !== 0);


// 4.33 Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних
// користувачів(властивість isActive) і повертала true або false.

// Оголошена функція isAnyUserActive(users)
// Для перебирання параметра users використовується метод some()
// Виклик функції із зазначеним масивом користувачів повертає true
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const isEveryUserActive = (users) => {
//    users.some((user) => user.isActive === true);
// };

// 4.34 Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.Доповни
// код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// Оголошена змінна players
// Значення змінної players - це об'єкт гравців з ігровим часом кожного
// Оголошена змінна playtimes
// Значення змінної playtimes - це масив [1270, 468, 710, 244]
// Оголошена змінна totalPlayTime
// Значення змінної totalPlayTime - це число 2692
// Для перебирання масиву playtimes використовується метод reduce()
// Оголошена змінна averagePlayTime
// Значення змінної averagePlayTime - це число 673

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((previousValue, number) => {
//   return previousValue + number;
//   }, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;


// 4.35 Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
// і отримати загальну суму цих значень часу.Розрахувати час для кожного з гравців можна, розділивши
// його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((previousValue, player) => {
//   return previousValue += player.playtime / player.gamesPlayed;
// }, 0);


// 4.36 Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і повертала суму всіх
// коштів(властивість balance), які зберігають користувачі з масиву users.

// Оголошена змінна calculateTotalBalance
// Змінній calculateTotalBalance присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 20916
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const calculateTotalBalance = users => users.reduce((previousValue, user) =>
//    previousValue + user.balance, 0);


// 4.37 Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і повертала загальну
// кількість друзів(властивість friends) усіх користувачів з масиву users.

// Оголошена змінна getTotalFriendCount
// Змінній getTotalFriendCount присвоєна стрілочна функція з параметром (users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 14
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getTotalFriendCount = users => users.reduce((TotalCount, user) => TotalCount + user.friends.length, 0);


// 4.38 Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
// відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors, відсортована за алфавітом.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив ["Bernard Cornwell", "Tanith Lee", "Robert Sheckley", "Fyodor Dostoevsky"]
// Використаний метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(releaseDates);

// const alphabeticalAuthors = [...authors].sort();
// console.log(authors);


// 3.39 Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання, за її зростанням
// або спаданням.Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
// відсортована за зростанням, а у змінній descendingReleaseDates - копія, відсортована за спаданням.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив [2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив [1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив [2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Використаний метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);


// 4.40 Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і зворотному
// алфавітному порядку.Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла копія масиву
// authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія, відсортована у зворотному
// алфавітному порядку.

// Оголошена змінна authors
// Значення змінної authors - це масив ["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky", "Howard Lovecraft"]
// Оголошена змінна authorsInAlphabetOrder
// Значення змінної authorsInAlphabetOrder - це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// Оголошена змінна authorsInReversedOrder
// Значення змінної authorsInReversedOrder - це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]
// Використаний метод sort()

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder); // це масив ["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft", "Robert Sheckley", "Tanith Lee"]
// console.log(authorsInReversedOrder); // це масив ["Tanith Lee", "Robert Sheckley", "Howard Lovecraft", "Fyodor Dostoevsky", "Bernard Cornwell"]


// 4.41 Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод sort()

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((firstBook, secondBook) =>
//   firstBook.author.localeCompare(secondBook.author)
// );

// const sortedByReversedAuthorName = [...books].sort((firstBook, secondBook) =>
//   secondBook.author.localeCompare(firstBook.author)
// );

// const sortedByAscendingRating = [...books].sort((firstBook, secondBook) =>
//   firstBook.rating - secondBook.rating
// );

// const sortedByDescentingRating = [...books].sort((firstBook, secondBook) =>
//   secondBook.rating - firstBook.rating
// );


// 4.42 Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за зростанням їх балансу(властивість balance).

// Оголошена змінна sortByAscendingBalance
// Змінній sortByAscendingBalance присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за
// зростанням їх балансу
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// Для перебирання параметра users використаний метод sort()

// const sortByAscendingBalance = users => [...users].sort((firstUser, secondUser) =>
//    firstUser.balance - secondUser.balance
// );


// 4.43 Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів,
// відсортований за спаданням кількості їхніх друзів(властивість friends).

// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за
// спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const sortByDescendingFriendCount = users => [...users].sort((firstUser, secondUser) =>
//   secondUser.friends.length - firstUser.friends.length
// );

// 4.44 Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів, відсортований
// за їх ім'ям (властивість name) в алфавітному порядку.

// Оголошена змінна sortByName
// Змінній sortByName присвоєна стрілочна функція з параметром (users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів, відсортований за ім'ям
// в алфавітному порядку
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const sortByName = users => [...users].sort((firstUser, secondUser) =>
//   firstUser.name.localeCompare(secondUser.name)
// );


// 4.45 Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку, рейтинг
// книг яких більший за значення змінної MIN_BOOK_RATING.

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив ["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// Використовується ланцюжок методів filter, map, sort

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books]
//   .filter(book => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author)
//   .sort((firstBooks, secondBooks) => firstBooks.localeCompare(secondBooks))
  
// console.log(names);


// 4.46 Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен
// користувачів, відсортований за зростанням кількості їхніх друзів(властивість friends).

// Оголошена змінна getNamesSortedByFriendCount
// Змінній getNamesSortedByFriendCount присвоєна стрілочна функція з параметром (users)
// У тілі функції використовується ланцюжок методів
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив ["Moore Hensley", "Sharlene Bush", "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount = users => {
//   return [...users].sort(
//     (firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//     .map(user => user.name)
// };

// console.log(users);

// 1. Отсортировать(.sort) по возрастанию массив пользователей
// 2. Через map вывести отсортированный массив пользователей


// 4.47 Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних імен друзів
// (властивість friends), відсортований за алфавітом.

// Оголошена змінна getSortedFriends
// Змінній getSortedFriends присвоєна стрілочна функція з параметром (users)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив ["Adrian Cross", "Aisha Tran", "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson", "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getSortedFriends = users => {
//   return [...users].flatMap(user => user.friends)
//     .filter((friend, index, array) => array.indexOf(friend) === index)
//     .sort((a, b) => a.localeCompare(b))
// };


// 4.48 Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний баланс
// користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами (users, gender)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// Якщо значення параметра gender - це рядок "female", функція повертає число 8863
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getTotalBalanceByGender = (users, gender) => {
//   return [...users].filter(user => user.gender === gender).reduce((acc, user) => acc + user.balance, 0)
// };


// 5.1 Виконай рефакторинг методів об'єкта pizzaPalace, розставивши відсутні this в місцях звернення до
// властивостей і методів об'єкта.

// Метод checkPizza об'єкта pizzaPalace використовує this.
// Метод order об'єкта pizzaPalace використовує this
// Виклик pizzaPalace.order("Smoked") повертає рядок "Order accepted, preparing «Smoked» pizza"
// Виклик pizzaPalace.order("Four meats") повертає рядок "Order accepted, preparing «Four meats» pizza"
// Виклик pizzaPalace.order("Big Mike") повертає рядок "Sorry, there is no pizza named «Big Mike»"
// Виклик pizzaPalace.order("Viennese") повертає рядок "Sorry, there is no pizza named «Viennese»"

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   // Change code below this line
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
//   // Change code above this line
// };


// console.log(pizzaPalace.order("Smoked")); // повертає рядок "Order accepted, preparing «Smoked» pizza"
// console.log(pizzaPalace.order("Four meats")); // повертає рядок "Order accepted, preparing «Four meats» pizza"
// console.log(pizzaPalace.order("Big Mike")); // повертає рядок "Sorry, there is no pizza named «Big Mike»"
// console.log(pizzaPalace.order("Viennese")); // повертає рядок "Sorry, there is no pizza named «Viennese»"

// 5.2 Перед звільненням розробник зламав вихідний код управління акаунтами користувачів нашого сервісу
// доставки їжі.Виконай рефакторинг методів об'єкта customer, розставивши відсутні this під час звернення
// до властивостей об'єкта.

// Після оголошення об'єкта ми додали виклики методів у тій послідовності, в якій твій код перевірятимуть
// тести.Будь ласка, нічого там не змінюй.

// Оголошена змінна customer
// Значення змінної customer - це об'єкт з властивостями і методами
// Виклик customer.getDiscount() повертає поточне значення властивості discount
// Виклик customer.setDiscount(0.15) оновлює значення властивості discount
// Виклик customer.getBalance() повертає поточне значення властивості balance.
// Виклик customer.getOrders() повертає поточне значення властивості orders
// Виклик customer.addOrder(5000, "Steak") додає "Steak" в масив значень властивості orders і оновлює баланс
// Метод getBalance об'єкта customer використовує this
// Метод getDiscount об'єкта customer використовує this
// Метод setDiscount об'єкта customer використовує this
// Метод getOrders об'єкта customer використовує this
// Метод addOrder об'єкта customer використовує this

// const customer = {
//   username: "Mango",
//   balance: 24000,
//   discount: 0.1,
//   orders: ["Burger", "Pizza", "Salad"],
//   // Change code below this line
//   getBalance() {
//     return this.balance;
//   },
//   getDiscount() {
//     return this.discount;
//   },
//   setDiscount(value) {
//     this.discount = value;
//   },
//   getOrders() {
//     return this.orders;
//   },
//   addOrder(cost, order) {
//     this.balance -= cost - cost * this.discount;
//     this.orders.push(order);
//   },
//   // Change code above this line
// };

// customer.setDiscount(0.15);
// console.log(customer.getDiscount()); // 0.15
// customer.addOrder(5000, "Steak");
// console.log(customer.getBalance()); // 19750
// console.log(customer.getOrders()); // ["Burger", "Pizza", "Salad", "Steak"]


// 5.3 Тестувальники знайшли баги в коді сервісу зберігання історії замовлень їжі.Тобі необхідно виправити
// їх, правильно розставивши this в методах об'єкта historyService, щоб методи почали працювати правильно.

// Оголошена змінна historyService
// Значення змінної historyService - це об'єкт з вихідними властивостями та методами
// Виклик historyService.getOrdersLog() повертає рядок з переліком даних всіх замовлень з властивості orders
// Виклик historyService.getEmails() повертає масив всіх унікальних поштових адрес з властивості orders

// Виклик historyService.getOrdersByEmail("solomon@topmail.net") повертає
// [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]

// Виклик historyService.getOrdersByEmail("artemis@coldmail.net") повертає
// [{ email: "artemis@coldmail.net", dish: "Pizza" }]

// Метод getOrdersLog об'єкта historyService використовує this
// Метод getEmails об'єкта historyService використовує this
// Метод getOrdersByEmail об'єкта historyService використовує this

// const historyService = {
//   orders: [
//     { email: "jacob@hotmail.com", dish: "Burrito" },
//     { email: "solomon@topmail.net", dish: "Burger" },
//     { email: "artemis@coldmail.net", dish: "Pizza" },
//     { email: "solomon@topmail.net", dish: "Apple pie" },
//     { email: "jacob@hotmail.com", dish: "Taco" },
//   ],
//   // Change code below this line
//   getOrdersLog() {
//     return this.orders
//       .map(order => `email: ${order.email} dish: ${order.dish}`)
//       .join(" - ");
//   },
//   getEmails() {
//     const emails = this.orders.map(order => order.email);
//     const uniqueEmails = new Set(emails);
//     return [...uniqueEmails];
//   },
//   getOrdersByEmail(email) {
//     return this.orders.filter(order => order.email === email);
//   },
//   // Change code above this line
// };


// console.log(historyService.getOrdersLog()); // повертає рядок з переліком даних всіх замовлень з властивості orders
// console.log(historyService.getEmails()); // повертає масив всіх унікальних поштових адрес з властивості orders
// console.log(historyService.getOrdersByEmail("solomon@topmail.net")); // повертає [{ email: "solomon@topmail.net", dish: "Burger" }, { email: "solomon@topmail.net", dish: "Apple pie" }]
// console.log(historyService.getOrdersByEmail("artemis@coldmail.net")); // повертає [{ email: "artemis@coldmail.net", dish: "Pizza" }]


// 5.4 Зміни код таким чином, щоб об'єкт parent став прототипом для об'єкта у змінній сhild.

// Оголошена змінна parent
// Значення змінної parent - це об'єкт
// Виклик parent.hasOwnProperty("surname") повертає true
// Виклик parent.hasOwnProperty("heritage") повертає true
// Оголошена змінна child
// Значення змінної child - це об'єкт
// Виклик child.hasOwnProperty("name") повертає true
// Звернення до child.name повертає "Jason"
// Виклик child.hasOwnProperty("age") повертає true
// Звернення до child.age повертає 27
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Виклик parent.isPrototypeOf(child) повертає true
// Використовується метод Object.create()

// const parent = {
//   name: "Stacey",
//   surname: "Moore",
//   age: 54,
//   heritage: "Irish",
// };
// // Change code below this line

// const child = Object.create(parent);

// console.log(child);

// // Change code above this line
// child.name = "Jason";
// child.age = 27;


// console.log(parent.hasOwnProperty("surname")); // повертає true
// console.log(parent.hasOwnProperty("heritage")); //  повертає true
// console.log(child.hasOwnProperty("name")); //  повертає true
// // Звернення до child.name повертає "Jason"
// console.log(child.hasOwnProperty("age")); //  повертає true
// // Звернення до child.age повертає 27
// console.log(child.hasOwnProperty("surname")); // повертає false
// // Звернення до child.surname повертає "Moore"
// console.log(child.hasOwnProperty("heritage")); // повертає false
// // Звернення до child.heritage повертає "Irish"
// console.log(parent.isPrototypeOf(child)); // повертає true

// 5.5 Зміни код, побудувавши ланцюжок прототипів таким чином, щоб об'єкт ancestor був прототипом для parent,
// а той, своєю чергою, був прототипом для child.

// Оголошена змінна ancestor
// Значення змінної ancestor - це об'єкт.
// Оголошена змінна parent
// Значення змінної parent - це об'єкт.
// Оголошена змінна child
// Значення змінної child - це об'єкт.
// Виклик ancestor.isPrototypeOf("parent") повертає true
// Виклик parent.isPrototypeOf("child") повертає true
// Виклик ancestor.hasOwnProperty("surname") повертає true
// Звернення до ancestor.surname повертає "Dawson"
// Виклик parent.hasOwnProperty("surname") повертає true
// Звернення до parent.surname повертає "Moore"
// Виклик child.hasOwnProperty("surname") повертає false
// Звернення до child.surname повертає "Moore"
// Виклик ancestor.hasOwnProperty("heritage") повертає true
// Звернення до ancestor.heritage повертає "Irish"
// Виклик parent.hasOwnProperty("heritage") повертає false
// Звернення до parent.heritage повертає "Irish"
// Виклик child.hasOwnProperty("heritage") повертає false
// Звернення до child.heritage повертає "Irish"
// Використовується метод Object.create()

// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Change code below this line

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;

// // Change code above this line

// console.log(parent);
// console.log(child);

// console.log(ancestor.isPrototypeOf("parent")); // повертає true
// console.log(parent.isPrototypeOf("child")); //  повертає true
// console.log(ancestor.hasOwnProperty("surname")); //  повертає true
// // Звернення до ancestor.surname повертає "Dawson"
// console.log(parent.hasOwnProperty("surname")); //  повертає true
// // Звернення до parent.surname повертає "Moore"
// console.log(child.hasOwnProperty("surname")); //  повертає false
// // Звернення до child.surname повертає "Moore"
// console.log(ancestor.hasOwnProperty("heritage")); //  повертає true
// // Звернення до ancestor.heritage повертає "Irish"
// console.log(parent.hasOwnProperty("heritage")); //  повертає false
// // Звернення до parent.heritage повертає "Irish"
// console.log(child.hasOwnProperty("heritage")); //  повертає false
// // Звернення до child.heritage повертає "Irish"

// 5.6 Використовуючи ключове слово class, оголоси клас Car з порожнім тілом.

// Оголошений клас Car
// Результат виклику new Car() - це порожній об'єкт

// class Car {
//   constructor() {}
//  };


// 5.7 Додай класу Car метод constructor, який приймає три параметри:

// brand - марка автомобіля.
// model - модель автомобіля.
// price - ціна автомобіля.
// Клас Car повинен створювати об'єкт з однойменними властивостями brand, model і price, значеннями яких
// повинні бути передані аргументи під час його виклику з оператором new.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car("Audi", "Q3", 36000) утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car("BMW", "X5", 58900) утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car("Nissan","Murano", 31700) утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// class Car {
//   constructor(brand, model, price) {
//         this.brand = brand;
//         this.model = model;
//         this.price = price;
//   }
//  };

// // const myCar = new Car({
// //   brand: 'Audi',
// //   model: 'Q3',
// //   price: 35000,});

// // console.log(myCar);

// console.log(new Car("Audi", "Q3", 36000)); // утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car("BMW", "X5", 58900)); // утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car("Nissan","Murano", 31700)); // утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }


// 5.8 Виконай рефакторинг класу Car таким чином, щоб він приймав один параметр - об'єкт з властивостями brand,
// model і price.Деструктуризуй об'єкт в сигнатурі (підписі) конструктора.

// Оголошений клас Car
// Клас Car має метод constructor
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 })
// утвориться об'єкт { brand: "Audi", model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "BMW", model: "X5", price: 58900 })
// утвориться об'єкт { brand: "BMW", model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// утвориться об'єкт { brand: "Nissan", model: "Murano", price: 31700 }

// class Car {
//   // Change code below this line
//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code above this line
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // { brand: "Audi", model: "Q3", price: 36000 }
// console.log(new Car({ brand: "BMW", model: "X5", price: 58900 }); // { brand: "BMW", model: "X5", price: 58900 }
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 }); // { brand: "Nissan", model: "Murano", price: 31700 }


// 5.9 Додай класу Car два методи.

// getPrice() - повертає значення властивості price з об'єкта, який буде його викликати.
// changePrice(newPrice) - оновлює значення властивості price в об'єкта, який буде його викликати на newPrice.
// В класі Car оголошений метод getPrice
// Метод getPrice повертає значення властивості price екземпляра класу, який його викликає
// В класі Car оголошений метод changePrice
// Метод changePrice змінює значення властивості price екземпляра класу, який його викликає

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   // Change code below this line
//  getPrice() {
//     return this.price;
//   };
  
//  changePrice (newPrice) {
//     this.price = newPrice;
//   };

//   // Change code above this line
// }


// 5.10 Напиши клас Storage, який буде створювати об'єкти для управління складом товарів. Клас очікує тільки
// один аргумент - початковий масив товарів, який записується у властивість items об'єкта, що створюється.

// Оголоси наступні методи класу:

// getItems() - повертає масив поточних товарів у властивості items об'єкта, який викликає цей метод.

// addItem(newItem) - приймає новий товар newItem і додає його в масив товарів у властивості items об'єкта,
// який викликає цей метод.

// removeItem(itemToRemove) - приймає товар itemToRemove і видаляє його з масиву товарів у властивості items
// об'єкта, який викликає цей метод.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код
// перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Метод getItems повертає значення властивості items екземпляра класу, який його викликає
// Метод addItem змінює властивість items екземпляра класу, який його викликає
// Метод removeItem змінює властивість items екземпляра класу, який його викликає
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної storage - це об'єкт
// Об'єкт storage містить властивість items
// Перший виклик storage.getItems(), відразу після інціалізаціі екземпляра, повертає масив ["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає масив ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає масив ["Nanitoids", "Antigravitator", "Droid"]

// class Storage {
//   constructor(items) {
//     this.items = items;
//    }
  
//  getItems() {
//     return this.items;
//   };

//  addItem (newItems) {
//     return this.items.push(newItems);
//   };
  
//  removeItem (leftItems) {
//     this.items = this.items.filter(items => items !== leftItems)
//   };

// };

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]


// 5.11 Напиши клас StringBuilder, який приймає один параметр initialValue - довільний рядок, який
// записується у властивість value об'єкта, що створюється.

// Оголоси наступні методи класу:

// getValue() - повертає поточне значення властивості value.

// padEnd(str) - отримує параметр str(рядок) і додає його в кінець значення властивості value об'єкта,
// який викликає цей метод.

// padStart(str) - отримує параметр str(рядок) і додає його на початок значення властивості value об'єкта,
// який викликає цей метод.

// padBoth(str) - отримує параметр str(рядок) і додає його на початок і в кінець значення властивості value
// об'єкта, який викликає цей метод.
// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код
// перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас StringBuilder
// В класі StringBuilder оголошений метод getValue
// Метод getValue повертає значення властивості value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padEnd
// Метод padEnd змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padStart
// Метод padStart змінює властивість value екземпляра класу, який його викликає
// В класі StringBuilder оголошений метод padBoth
// Метод padBoth змінює властивість value екземпляра класу, який його викликає
// В результаті виклику new StringBuilder(".") значення змінної builder - це об'єкт
// Об'єкт builder містить властивість value
// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=

// class StringBuilder {
//   constructor(value) {
//     this.value = value;

//   }

//   getValue() {
//     return this.value;
//   }

//    padStart(str) {
//   this.value = str + this.value;
//   }

//    padEnd(str) {
//   this.value = this.value + str;
//   }

//   padBoth(str) {
//   this.value = str + this.value + str;
//   }

// }


// Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="


// 5.12 Виконай рефакторинг класу Car таким чином, щоб властивість brand була приватною, і додай два методи
// для публічного інтерфейсу, для читання і зміни цієї властивості.

// getBrand() - повертає значення приватної властивості brand.
// changeBrand(newBrand) - змінює значення приватної властивості brand на newBrand.
// Оголошений клас Car
// Властивість brand в класі Car оголошена приватною
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В результаті виклику new Car({ brand: "Audi", model: "Q3", price: 36000 })
// утвориться об'єкт { model: "Q3", price: 36000 }
// В результаті виклику new Car({ brand: "bmw", model: "X5", price: 58900 })
// утвориться об'єкт { model: "X5", price: 58900 }
// В результаті виклику new Car({ brand: "Nissan", model: "Murano", price: 31700 })
// утвориться об'єкт { model: "Murano", price: 31700 }
// В екземпляра відсутня публічна властивість brand
// Метод getBrand() повертає значення приватної властивості brand.
// Метод changeBrand("Honda") змінює значення приватної властивості brand на "Honda"


// class Car {
//   // Change code below this line

//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
//   // Change code above this line
// }

// console.log(new Car({ brand: "Audi", model: "Q3", price: 36000 })); // утвориться об'єкт { model: "Q3", price: 36000 }
// console.log(new Car({ brand: "bmw", model: "X5", price: 58900 })); // утвориться об'єкт { model: "X5", price: 58900 }
// console.log(new Car({ brand: "Nissan", model: "Murano", price: 31700 })); // утвориться об'єкт { model: "Murano", price: 31700 }

// 5.13 Виконай рефакторинг класу Storage, зробивши властивість items приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій код
// перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас Storage
// Об'єкт storage не містить властивості items
// В класі Storage оголошений метод getItems
// В класі Storage оголошений метод addItem
// В класі Storage оголошений метод removeItem
// Властивість items в класі Storage оголошена приватною
// Конструктор класу приймає властивість items
// В результаті виклику new Storage(["Nanitoids", "Prolonger", "Antigravitator"]) значення змінної
// storage - це об'єкт
// Перший виклик storage.getItems(), відразу після ініціалізації екземпляра, повертає
// масив["Nanitoids", "Prolonger", "Antigravitator"]
// Другий виклик, storage.getItems(), після виклику storage.addItem("Droid"), повертає
// масив["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// Третій виклик storage.getItems(), після виклику storage.removeItem("Prolonger"), повертає
// масив["Nanitoids", "Antigravitator", "Droid"]


// class Storage {
//   // Change code below this line

//   #items;

//   constructor(items) {
//     this.#items = items;
//   }

//   getItems() {
//     return this.#items;
//   }

//   addItem(newItem) {
//     this.#items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     this.#items = this.#items.filter(item => item !== itemToRemove);
//   }
// }

// Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Droid"]


// 5.14 Виконай рефакторинг класу StringBuilder, зробивши властивість value приватною.

// Під коментарем ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій твій
// код перевірятимуть тести.Будь ласка, нічого там не змінюй.
// Оголошений клас StringBuilder
// Властивість value в класі StringBuilder оголошена приватною
// В класі StringBuilder оголошений метод getValue

// В класі StringBuilder оголошений метод padEnd
// В класі StringBuilder оголошений метод padStart
// В класі StringBuilder оголошений метод padBoth
// В результаті виклику new StringBuilder('.') значення змінної builder - це об'єкт

// Об'єкт builder не містить властивості value
// Перший виклик builder.getValue(), відразу після ініціалізації екземпляра, повертає рядок .
// Другий виклик builder.getValue(), після виклику builder.padStart("^"), повертає рядок ^.
// Третій виклик builder.getValue(), після виклику builder.padEnd("^"), повертає рядок ^.^
// Четвертий виклик builder.getValue(), після виклику builder.padBoth("="), повертає рядок =^.^=


// class StringBuilder {
//   // Change code below this line
//   #value;
//   constructor(initialValue) {
//     this.#value = initialValue;
//   }

//   getValue() {
//     return this.#value;
//   }

//   padEnd(str) {
//     this.#value += str;
//   }

//   padStart(str) {
//     this.#value = str + this.#value;
//   }

//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="

// 5.15 Виконай рефакторинг класу Car.Зроби властивості model і price приватними, а також #brand.
// Стандартизуй публічний інтерфейс класу, замінивши вже оголошені методи на гетери та сетери brand,
// model і price, для взаємодії з приватними властивостями.

// Оголошений клас Car
// В класі Car оголошена приватна властивість brand
// В класі Car оголошена приватна властивість model
// В класі Car оголошена приватна властивість price
// Конструктор класу приймає об'єкт з властивостями brand, model і price
// В класі Car оголошений гетер brand
// В класі Car оголошений сетер brand
// В класі Car оголошений гетер model
// В класі Car оголошений сетер model
// В класі Car оголошений гетер price
// В класі Car оголошений сетер price


// class Car {
//   // Change code below this line
//   #brand;
//   #model;
//   #price;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this._brand;
//   }

//   set brand(newBrand) {
//     this._brand = newBrand;
//   }

//   get model() {
//     return this._model;
//   }

//   set model(newModel) {
//     this._model = newModel;
//   }

//   get price() {
//     return this._price;
//   }

//   set price(newPrice) {
//     this._price = newPrice;
//   }
//   // Change code above this line
// }


// 5.16 Виконай рефакторинг класу Car.Додай публічну статичну властивість MAX_PRICE зі значенням
// 50000 - максимально допустима ціна автомобіля.

// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну автомобіля.

// Оголошений клас Car
// Клас Car містить статичну властивість MAX_PRICE
// Значення статичної властивості MAX_PRICE - це число 50000
// Екземпляр не містить властивості MAX_PRICE
// В класі Car оголошений гетер price
// В класі Car оголошений сетер price
// Виклик сетера price в екземпляра класу, зі значенням аргументу меншим за значення MAX_PRICE, змінює
// властивість #price
// Виклик сетера price в екземпляра класу, зі значенням аргументу більшим за значення MAX_PRICE, не змінює
// властивість #price

// class Car {
//   // Change code below this line
// static MAX_PRICE = 50000;

//   #price;

  
//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice <= Car.MAX_PRICE ? newPrice : this.price;
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000


// 5.17 Додай класу Car публічний статичний метод checkPrice(price), що приймає ціну автомобіля.Метод
// повинен порівняти значення параметра price і приватної статичного властивості MAX_PRICE.

// Якщо ціна автомобіля перевищує максимальну, метод повинен повернути рядок "Error! Price exceeds the maximum".
// В іншому випадку метод повинен повернути рядок "Success! Price is within acceptable limits".
// Під оголошенням класу ми додали ініціалізацію екземпляра і виклики методів, щоб показати, як буде
// використовуватися метод checkPrice(price).

// Оголошений клас Car
// Клас Car містить статичний метод checkPrice(price)
// Виклик Car.checkPrice(36000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(18000) повертає рядок "Success! Price is within acceptable limits"
// Виклик Car.checkPrice(64000) повертає рядок "Error! Price exceeds the maximum"
// Виклик Car.checkPrice(57000) повертає рядок "Error! Price exceeds the maximum"


// class Car {
//   static #MAX_PRICE = 50000;
//   // Change code below this line
//   static checkPrice(price) {
//     return this.price = price <= Car.#MAX_PRICE
//       ? "Success! Price is within acceptable limits"
//       : "Error! Price exceeds the maximum";
// }
//   // Change code above this line
//   constructor({ price }) {
//     this.price = price;
//   }
// }

// const audi = new Car({ price: 36000 });
// const bmw = new Car({ price: 64000 });

// console.log(Car.checkPrice(audi.price)); // "Success! Price is within acceptable limits"
// console.log(Car.checkPrice(bmw.price)); // "Error! Price exceeds the maximum"


// 5.18 У застосунку потрібен адміністратор з можливістю додавати пошти користувачів у чорний список.

// Оголоси клас Admin, який наслідує від класу User
// Додай класу Admin публічну статичну властивість AccessLevel(рівень доступу), значення якої — це
// об'єкт {BASIC: "basic", SUPERUSER: "superuser"}
// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість AccessLevel
// Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"

// class User {
//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// // Change code below this line

// class Admin extends User {
//   static AccessLevel = {BASIC: "basic", SUPERUSER: "superuser"};
// }


// 5.19 Додай класу Admin метод constructor, який приймає один параметр - об'єкт налаштувань з двома
// властивостями email і accessLevel.Додай класу Admin публічну властивість accessLevel, значення якої
// буде передаватися під час виклику конструктора.

// Щоб показати, як буде використовуватися клас Admin, ми додали ініціалізацію екземпляра під оголошенням класу.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну статичну властивість AccessLevel
// Клас Admin містить метод constructor з параметром у вигляді об'єкта {email, accessLevel}
// В класі Admin в конструкторі для властивості email використовується звернення до конструктора
// батьківського класу
// Звернення до Admin.AccessLevel.BASIC повертає рядок "basic"
// Звернення до Admin.AccessLevel.SUPERUSER повертає рядок "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({email, accessLevel} = {}) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// 5.20 Додай класу Admin наступні властивості і методи.

// Публічну властивість blacklistedEmails для зберігання чорного списку поштових адрес користувачів.
// Значення за замовчуванням — це порожній масив.
// Публічний метод blacklist(email) для додавання пошти у чорний список.Метод повинен додавати значення
// параметра email в масив, що зберігається у властивості blacklistedEmails.
// Публічний метод isBlacklisted(email) для перевірки пошти у чорному списку.Метод повинен перевіряти
// наявність значення параметра email в масиві, що зберігається у властивості blacklistedEmails, і
// повертати true або false.
// Після оголошення класу ми додали ініціалізацію екземпляра і виклики методів у тій послідовності, в якій
// твій код перевірятимуть тести.Будь ласка, нічого там не змінюй.

// Оголошений клас Admin
// Клас Admin наслідує від класу User
// Клас Admin містить публічну властивість blacklistedEmails
// Клас Admin містить публічний метод blacklist
// Клас Admin містить публічний метод isBlacklisted
// Після виклику mango.blacklist("poly@mail.com") значення властивості blacklistedEmails -
// це масив["poly@mail.com"]
// Виклик mango.isBlacklisted("mango@mail.com") повертає false
// Виклик mango.isBlacklisted("poly@mail.com") повертає true

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//     this.blacklistedEmails = [];
//   }

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   }

//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email) ? true : false;
//   }
//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true