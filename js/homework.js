// 1.1
// Change code below this line
const productName = 'Droid';
// console.log(productName);
// 'Droid'

const pricePerItem = 2000;
// console.log(pricePerItem);
// 2000

// 1.2
let productName = 'Droid';
let pricePerItem = 2000;

// Change code below this line
productName = 'Repair droid';
pricePerItem = 3500;

// 1.3
// Change code below this line
const topSpeed = 160;
const distance = 617.54;
const login = 'mango935';
let isOnline = true;
let isAdmin = false;

// 1.4
const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;

// 1.5
const productName = 'Droid';
const pricePerItem = 3500;

// Change code below this line
const message = `You picked ${productName}, price per item is ${pricePerItem} credits`;

// 1.6
// Change code below this line
let pricePerDroid = 800;
let orderedQuantity = 6;
let deliveryFee = 50;
let totalPrice = pricePerDroid * orderedQuantity + deliveryFee;
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

// 1.7
// Change code below this line
function sayHi() {
  console.log('Hello, this is my first function!');
}

sayHi();

// 1.8
// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a + b + c}`);
  // Change code above this line
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);

// 1.9
function add(a, b, c) {
  // Change code below this line
  return a + b + c;
}

// Change code above this line

add(2, 5, 8); // 15

console.log(add(15, 27, 10));
console.log(add(10, 20, 30));
console.log(add(5, 10, 15));

// 1.10

function makeMessage(name, price) {
  // Change code below this line
  const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
}

// 1.11

function calculateTotalPrice(orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
}

// 1.12
function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
  // Change code below this line
  let totalPrice = orderedQuantity * pricePerDroid + deliveryFee;
  const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`;

  // Change code above this line
  return message;
}

// 1.13
function isAdult(age) {
  // Change code below this line
  const passed = age >= 18;

  // Change code above this line
  return passed;
}

// 1.14
function isValidPassword(password) {
  const SAVED_PASSWORD = 'jqueryismyjam';
  // Change code below this line
  const isMatch = password === SAVED_PASSWORD;

  // Change code above this line
  return isMatch;
}

// 1.15
function checkAge(age) {
  let message;

  if (age >= 18) {
    // Change this line
    message = 'You are an adult';
  } else {
    message = 'You are a minor';
  }

  return message;
}

// 1.16
function checkStorage(available, ordered) {
  let message;
  // Change code below this line
  if (ordered === 50) {
    message = 'Order is processed, our manager will contact you.';
  } else if (ordered === 130) {
    message = 'Not enough goods in stock!';
  } else if (ordered === 20) {
    message = 'Order is processed, our manager will contact you.';
  } else if (ordered === 150) {
    message = 'Order is processed, our manager will contact you.';
  } else if (ordered === 180) {
    message = 'Not enough goods in stock!';
  }
  // Change code above this line
  return message;
}
checkStorage(100, 50);
checkStorage(100, 130);
checkStorage(200, 20);
checkStorage(200, 150);
checkStorage(150, 180);

// 1.17
let a = 5;
let b = 10;
let c = 15;
let d = 20;

// Change code below this line
a += 2;
b -= 4;
c *= 3;
d /= 10;

// 1.18
function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
  let message;
  // Change code below this line
  let totalPrice = pricePerDroid * orderedQuantity;
  if (customerCredits >= totalPrice) {
    customerCredits -= totalPrice;
    message = `You ordered ${orderedQuantity} droids, you have ${customerCredits} credits left`;
  } else if (customerCredits < totalPrice) {
    message = 'Insufficient funds!';
  }
  // Change code above this line

  return message;
}

makeTransaction(3000, 5, 23000);
makeTransaction(1000, 3, 15000);
makeTransaction(5000, 10, 8000);
makeTransaction(2000, 8, 10000);
makeTransaction(500, 10, 5000);

// 1.19
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;

  if (password === null) {
    // Change this line
    message = 'Canceled by user!';
  } else if (password === ADMIN_PASSWORD) {
    // Change this line
    message = 'Welcome!';
  } else {
    message = 'Access denied, wrong password!';
  }

  return message;
}

// 1.20
function checkStorage(available, ordered) {
  let message;
  let order = ordered;
  // Change code below this line
  if (order === 0) {
    message = 'There are no products in the order!';
  } else if (ordered > available) {
    message = 'Your order is too large, there are not enough items in stock!';
  } else if (ordered <= available) {
    message = 'The order is accepted, our manager will contact you';
  }
  return message;
}

// 1.21
function isNumberInRange(start, end, number) {
  const isInRange = number >= start && number <= end; // Change this line

  return isInRange;
}

// 1.22

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType === 'pro' || subType === 'vip'; // Change this line

  return canAccessContent;
}

// 1.23

function isNumberNotInRange(start, end, number) {
  const isInRange = number >= start && number <= end;
  const isNotInRange = !(number >= start && number <= end); // Change this line

  return isNotInRange;
}

// 1.24

function getDiscount(totalSpent) {
  const BASE_DISCOUNT = 0;
  const BRONZE_DISCOUNT = 0.02;
  const SILVER_DISCOUNT = 0.05;
  const GOLD_DISCOUNT = 0.1;
  let discount;
  // Change code below this line
  if (totalSpent >= 50000) {
    console.log('GOLD_DISCOUNT, скидка 10 %');
    discount = GOLD_DISCOUNT;
  } else if (totalSpent >= 20000 && totalSpent < 50000) {
    console.log('BRONZE_DISCOUNT, скидка 5 %');
    discount = SILVER_DISCOUNT;
  } else if (totalSpent >= 5000 && totalSpent < 20000) {
    console.log('BRONZE_DISCOUNT, скидка 2 %');
    discount = BRONZE_DISCOUNT;
  } else {
    discount = BASE_DISCOUNT;
    console.log('У Вас ещё нет партнерской скидки');
  }
  // Change code above this line
  return discount;
}

// 1.25
function checkStorage(available, ordered) {
  let message;
  // Change code below this line

  message =
    ordered > available
      ? 'Not enough goods in stock!'
      : 'The order is accepted, our manager will contact you';

  // Change code above this line
  return message;
}

// 1.26
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line
  message =
    ADMIN_PASSWORD === password
      ? 'Access is allowed'
      : 'Access denied, wrong password!';
  // Change code above this line
  return message;
}

// 1.27
function getSubscriptionPrice(type) {
  let price;
  // Change code below this line

  switch (
    type // Change this line
  ) {
    case 'starter': // Change this line
      price = 0; // Change this line
      break;

    case 'professional': // Change this line
      price = 20; // Change this line
      break;

    case 'organization': // Change this line
      price = 50; // Change this line
      break;
  }

  // Change code above this line
  return price;
}

// 1.28

function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let message;
  // Change code below this line

  // if (password === null) {
  //   message = "Canceled by user!";
  // } else if (password === ADMIN_PASSWORD) {
  //   message = "Welcome!";
  // } else {
  //   message = "Access denied, wrong password!";
  // }

  switch (password) {
    case null:
      message = 'Canceled by user!';
      break;
    case ADMIN_PASSWORD:
      message = 'Welcome!';
      break;
    default:
      message = 'Access denied, wrong password!';
  }

  // Change code above this line
  return message;
}

// 1.29

function getShippingCost(country) {
  let message;
  // Change code below this line
  switch (country) {
    case 'Australia':
      message = `Shipping to ${country} will cost 170 credits`;
      break;
    case 'Jamaica':
      message = `Shipping to ${country} will cost 120 credits`;
      break;
    case 'Chile':
      message = `Shipping to ${country} will cost 250 credits`;
      break;
    case 'China':
      message = `Shipping to ${country} will cost 100 credits`;
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }
  // Change code above this line
  return message;
}

// 1.30
function getNameLength(name) {
  const message = `Name ${name} is ${name.length} characters long`; // Change this line

  return message;
}

// 1.31
const courseTopic = 'JavaScript essentials';
// Change code below this line

const courseTopicLength = courseTopic.length;
const firstElement = courseTopic[0];
const lastElement = courseTopic[courseTopic.length - 1];

// 1.32
function getSubstring(string, length) {
  const substring = string.slice(0, length); // Change this line

  return substring;
}

// 1.33
function formatMessage(message, maxLength) {
  let result;
  // Change code below this line
  if (message.length <= maxLength) {
    result = message;
  } else if (message.length > maxLength) {
    result = message.slice(0, maxLength) + '...';
  }
  /// Change code above this line
  return result;
}

// 1.34
function normalizeInput(input) {
  const normalizedInput = input.toLowerCase(); // Change this line

  return normalizedInput;
}

// 1.35
function checkForName(fullName, name) {
  const result = fullName.includes(name); // Change this line
  return result;
}

// 1.36
function checkForSpam(message) {
  let result;
  const blacklistedWord1 = 'spam';
  const blacklistedWord2 = 'sale';
  // Change the code below this line
  if (
    message.toLocaleLowerCase().includes(blacklistedWord1) ||
    message.toLocaleLowerCase().includes(blacklistedWord2)
  ) {
    result = true;
  } else {
    result = false;
  }
  // Change code above this line
  return result;
}

// 2.1
function checkAge(age) {
  if (age >= 18) {
    // Change this line
    return 'You are an adult';
  }

  return 'You are a minor';
}

// 2.2
function checkPassword(password) {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  // Change code below this line

  if (password === ADMIN_PASSWORD) {
    return 'Welcome!';
  }

  return 'Access denied, wrong password!';
  // Change code above this line
}

// 2.3

function checkStorage(available, ordered) {
  if (ordered === 0) {
    return 'Your order is empty!';
  }
  if (ordered > available) {
    return 'Your order is too large, not enough goods in stock!';
  }
  return 'The order is accepted, our manager will contact you';
}

// 2.4

const fruits = ['apple', 'plum', 'pear', 'orange'];

// 2.5

const fruits = ['apple', 'plum', 'pear', 'orange'];

const firstElement = fruits[0];
const secondElement = fruits[1];
const lastElement = fruits[3];

// 2.6

const fruits = ['apple', 'plum', 'pear', 'orange'];
fruits[1] = 'peach';
fruits[3] = 'banana';

// 2.7

const fruits = ['apple', 'peach', 'pear', 'banana'];
const fruitsArrayLength = fruits.length;

// 2.8
const fruits = ['apple', 'peach', 'pear', 'banana'];

const lastElementIndex = fruits.length - 1;
const lastElement = fruits[lastElementIndex];

// 2.9

function getExtremeElements(array) {
  const array1 = array.splice(0, 1);
  const lastElement = array.length - 1;
  const array2 = array[lastElement];

  const array3 = array1.concat(array2);

  return array3;
}

// 2.10

function splitMessage(message, delimiter) {
  let words;
  words = message.split(delimiter);

  return words;
}

// 2.11

function calculateEngravingPrice(message, pricePerWord) {
  const words = message.split(' ');
  const wordsCount = words.length;
  let totalPrice = wordsCount * pricePerWord;

  return totalPrice;
}

// 2.12

function makeStringFromArray(array, delimiter) {
  let string;
  string = array.join(delimiter);

  return string;
}

// 2.13

function slugify(title) {
  // Change code below this line
  const slug = title.toLocaleLowerCase().split(' ').join('-');

  return slug;
  // Change code above this line
}

// 2.14

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0, 2); // ["apple", "plum"]
const nonExtremeEls = fruits.slice(1, 4); // ["plum", "pear", "orange"]
const lastThreeEls = fruits.slice(2, 5); // ["pear", "orange", "banana"]

// 2.15

const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
const newClients = ['Peach', 'Houston'];

const allClients = oldClients.concat(newClients); // Change this line

// 2.16

// 2.17
// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з усіма
// елементами двох вихідних firstArray і secondArray. Параметр maxLength містить максимально допустиму
// довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength, функція повинна повернути копію масиву
// довжиною maxLength елементів.В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає ["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає ["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає ["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає ["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає []
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

const makeArray = function (firstArray, secondArray, maxLength) {
  let newArray = firstArray.concat(secondArray);
  console.log(newArray.length > maxLength);
  console.log(newArray.slice(0, maxLength));
  if (newArray.length > maxLength) {
    newArray = newArray.slice(0, maxLength);
  } else {
  }

  return newArray;
};

console.log(makeArray(['Mango', 'Poly'], ['Ajax', 'Chelsea'], 3)); //["Mango", "Poly", "Ajax"]
console.log(makeArray(['Mango', 'Poly', 'Houston'], ['Ajax', 'Chelsea'], 4)); // ["Mango", "Poly", "Houston", "Ajax"];
console.log(makeArray(['Mango'], ['Ajax', 'Chelsea', 'Poly', 'Houston'], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus'], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(['Earth', 'Jupiter'], ['Neptune', 'Uranus', 'Venus'], 0)); // []

// 2.18

// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і повертає суму всіх цілих
// чисел від одиниці і до цього числа.Наприклад, якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

const calculateTotal = function (number) {
  let total = 0;
  for (let i = 0; i <= number; i += 1) {
    total += i;
  }
  return total;
};

console.log(calculateTotal(1)); // повертає 1
console.log(calculateTotal(3)); // повертає 6
console.log(calculateTotal(7)); // повертає 28
console.log(calculateTotal(18)); // повертає 171
console.log(calculateTotal(24)); // повертає 300

// 2.19
// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit

const fruits = ['apple', 'plum', 'pear', 'orange'];

for (let i = 0; i < fruits.length; i += 1) {
  const fruit = fruits[i];
  console.log(fruit);
}

// 2.20
// Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел, і обчислює
// загальну суму його елементів.Загальна сума елементів повинна зберігатися у змінній total, яка
// повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

const calculateTotalPrice = function (order) {
  // v1:
  // let total = 0;
  // for (let i = 0; i < order.length; i += 1) {

  //   total += order[i];
  // }
  // return total;

  // v2:
  let total = 0;

  for (const value of order) {
    total += value;
  }
  return total;
};

console.log(calculateTotalPrice([12, 85, 37, 4])); // повертає 138
console.log(calculateTotalPrice([164, 48, 291])); // повертає 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // повертає 1116

// 2.21
// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
// розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// Шаг 1 - преобразовать строку в массив
// Шаг 2 - посчитать для каждого элемента массива кол - во символов
// Шаг 3 - выбрать элемент с максимальным значением символов

// v1
// const findLongestWord = function (string) {
//   let words = string.split(' '); // Шаг 1 - преобразуем строку в массив
//   let indexWord = 0; // исходная длина элемента
//   let maxWord; // переменная в которую запишем

//   for (let i = 0; i < words.length; i += 1) {
//     indexWord = words[1].length; // Шаг 2 - считаем кол-во символов для каждого элемента массива

//     //   Условие проверки, если длина элемента больше предыдущего, обновляем значение переменной
//     // Шаг 3
//     if (words[i].length > indexWord) {
//       maxWord = words[i];
//       return maxWord;
//     }
//   }
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// console.log(findLongestWord('Google do a roll')); // Google
// console.log(findLongestWord('May the force be with you')); // force

// v2
// const findLongestWord = function (string) {
//   const words = string.split(' '); // Шаг 1 - преобразуем строку в массив
//   let maxLengthWord = words[0].length; // исходная максимальная длина элемента
//   let maxWord;
//   //   console.log(maxWord);
//   for (const word of words) {
//     let wordLength = word.length;
//     //   console.log(wordIndex);
//     if (wordLength > maxLengthWord) {
//       // console.log(wordIndex);
//         maxLengthWord = wordLength;
//         maxWord = word[wordLength];
//         console.log(maxWord);
//     }
//   }
//   return maxLengthWord;
// };

// // v3
// const findLongestWord = function (string) {
//   const words = string.split(' '); // Шаг 1 - преобразуем строку в массив
//   let maxLengthWord = words[0].length; // исходная максимальная длина элемента
//   let maxWord;
//   //   console.log(maxWord);
//   for (let i = 0; i < words.length; i += 1) {
//     let wordLength = words[i].length;

//     if (wordLength > maxLengthWord) {
//       maxLengthWord = wordLength;
//       maxWord = words[i];
//       console.log(maxWord);
//     }
//   }
//     return maxLengthWord;

// };
// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
// console.log(findLongestWord('Google do a roll')); // Google
// console.log(findLongestWord('May the force be with you')); // force

// Шаг 1 - преобразовать строку в массив
// Шаг 2 - посчитать для каждого элемента массива кол - во символов
// Шаг 3 - выбрать элемент с максимальным значением символов

// function findLongestWord(string) {
// // Шаг 1
//   let words = string.split(' ');
//   let indexWord = 0;
//   let maxWord;
//   // Шаг 2
//   for (let i = 0; i < words.length; i += 1) {
//     indexWord = words[1].length;
// // Шаг 3
//       if (words[i].length > indexWord) {
//       maxWord = words[i];
//       return maxWord;
//     }
//   }
// };

// Рабочий вариант
const findLongestWord = function (string) {
  return string.split(' ').reduce((a, b) => (b.length > a.length ? b : a));
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // jumped
console.log(findLongestWord('Google do a roll')); // Google
console.log(findLongestWord('May the force be with you')); // force

// 2.22
// Дополни код функции createArrayOfNumbers(min, max) так, чтобы она возвращала массив всех целых чисел от значения min до max.

// Объявлена функция createArrayOfNumbers(min, max)
// Вызов функции createArrayOfNumbers(1, 3) возвращает [1, 2, 3]
// Вызов функции createArrayOfNumbers(14, 17) возвращает [14, 15, 16, 17]
// Вызов функции createArrayOfNumbers(29, 34) возвращает [29, 30, 31, 32, 33, 34]
// Вызов функции createArrayOfNumbers() со случайными min и max возвращает правильный массив
// В цикле for использовался метод push

function createArrayOfNumbers(min, max) {
  const numbers = [];
  for (let i = min; i <= max; i++) numbers.push(i);
  return numbers;
}

console.log(createArrayOfNumbers(1, 3)); // возвращает [1, 2, 3]
console.log(createArrayOfNumbers(14, 17)); // возвращает [14, 15, 16, 17]
console.log(createArrayOfNumbers(29, 34)); // возвращает [29, 30, 31, 32, 33, 34]

// v1 Рабочий вариант
// function createArrayOfNumbers1(min, max) {
//   const numbers = [];
//   while (min <= max) numbers.push(min++);

//   return numbers;
// }

// v2
// function sum(ran) {
//   var listSumNumber = 0;
//   for (var i of ran) console.log((listSumNumber += i));

//   return listSumNumber;
// }
// console.log(createArrayOfNumbers1(1, 3)); // возвращает [1, 2, 3]
// console.log(createArrayOfNumbers1(14, 17)); // возвращает [14, 15, 16, 17]
// console.log(createArrayOfNumbers1(29, 34)); // возвращает [29, 30, 31, 32, 33, 34]

// 2.23
// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає
// новий масив, в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає [4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає [5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає []
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає [41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає [24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

const filterArray = function (numbers, value) {
  const newArray = [];
  for (const number of numbers) {
    if (number > value) {
      newArray.push(number);
      // console.log(`${number} совпадает в массивах!`);
    }
  }
  return newArray;
};

console.log(filterArray([1, 2, 3, 4, 5], 3)); // повертає [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // повертає [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // повертає []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // повертає [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // повертає [24, 41, 76]

// 2.24
// Функція checkFruit(fruit) приймає рядок з назвою фрукта(параметр fruit), і перевіряє,
//   чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

function checkFruit(fruit) {
  const fruits = ['apple', 'plum', 'pear', 'orange'];
  return fruits.includes(fruit);
}

console.log(checkFruit('plum')); // повертає true
console.log(checkFruit('mandarin')); // повертає false
console.log(checkFruit('pear')); // повертає true
console.log(checkFruit('Pear')); // повертає false
console.log(checkFruit('apple')); // повертає true

// 2.25
// Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
// Например, в двух массивах[1, 3, 5] и[0, 8, 5, 3] общими будут числа 3 и 5, т.к.они присутствуют
// в обоих исходных массивах.А числа 0, 1 и 8 присутствуют только в одном из массивов.

// Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в
// параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют
// в обоих исходных массивах.

// Объявлена функция getCommonElements(array1, array2)
// Вызов getCommonElements([1, 2, 3], [2, 4]) возвращает [2]
// Вызов getCommonElements([1, 2, 3], [2, 1, 17, 19]) возвращает [1, 2]
// Вызов getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) возвращает [12, 27, 3]
// Вызов getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) возвращает [10, 30, 40]
// Вызов getCommonElements([1, 2, 3], [10, 20, 30]) возвращает []
// Вызов функции getCommonElements() со случайными двумя массивами возвращает правильный массив
// В цикле for использовались методы includes и push

function getCommonElements(array1, array2) {
  const uniqueNumbers = [];

  for (const number of array1) {
    if (array2.includes(number)) {
      uniqueNumbers.push(number);
      // console.log(`${number} совпадает в массивах!`);
    }
  }
  return uniqueNumbers;
}

console.log(getCommonElements([1, 2, 3], [2, 4])); // возвращает [2]
console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // возвращает [1, 2]
console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // возвращает [12, 27, 3]
console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40]
console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // возвращает []

// 2.26
// Выполни рефакторинг кода функции calculateTotalPrice(order) заменив цикл for на for...of.

// Объявлена функция calculateTotalPrice(order)
// Вызов функции calculateTotalPrice([12, 85, 37, 4]) возвращает 138
// Вызов функции calculateTotalPrice([164, 48, 291]) возвращает 503
// Вызов функции calculateTotalPrice([412, 371, 94, 63, 176]) возвращает 1116
// Вызов функции calculateTotalPrice([]) возвращает 0
// Вызов функции calculateTotalPrice() со случайным массивом чисел возвращает правильную сумму

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line

//   for (let i = 0; i < order.length; i += 1) {
//     total += order[i];
//   }

//   // Change code above this line
//   return total;
// }

// Выполнить рефакторинг используя for..of:

function calculateTotalPrice(order) {
  let total = 0;

  for (const number of order) {
    total += number;
  }

  return total;
}

console.log(calculateTotalPrice([12, 85, 37, 4])); // возвращает 138
console.log(calculateTotalPrice([164, 48, 291])); // возвращает 503
console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // возвращает 1116
console.log(calculateTotalPrice([])); // возвращает 0

// 2.27
// Выполни рефакторинг функции filterArray(numbers, value) заменив цикл for на for...of.

// Объявлена функция filterArray(numbers, value)
// Вызов функции filterArray([1, 2, 3, 4, 5], 3) возвращает [4, 5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 4) возвращает [5]
// Вызов функции filterArray([1, 2, 3, 4, 5], 5) возвращает []
// Вызов функции filterArray([12, 24, 8, 41, 76], 38) возвращает [41, 76]
// Вызов функции filterArray([12, 24, 8, 41, 76], 20) возвращает [24, 41, 76]
// Вызов функции filterArray() со случайным массивом и числом возвращает правильный массив
// Функция filterArray() использует цикл for..of

// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];

//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }

// Рефакторинг:
function filterArray(numbers, value) {
  const filteredNumbers = [];

  for (const iterator of numbers) {
    const number = iterator;

    if (number > value) {
      filteredNumbers.push(number);
    }
  }
  return filteredNumbers;
}

console.log(filterArray([1, 2, 3, 4, 5], 3)); // возвращает [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // возвращает [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // возвращает []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // возвращает [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // возвращает [24, 41, 76]

// 2.28
// Дополни выражения остатка от деления так, чтобы код проходил тесты.

// Значение переменной a это число 0
// Значение переменной b это число 1
// Значение переменной c это число 3
// Значение переменной d это число 5
// Значение переменной e это число 2

const a = 3 % 3;
const b = 4 % 3;
const c = 11 % 4;
const d = 12 % 7;
const e = 8 % 3;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// 2.29
// Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
// Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).

// Объявлена функция getEvenNumbers(start, end)
// Вызов функции getEvenNumbers(2, 5) возвращает [2, 4]
// Вызов функции getEvenNumbers(3, 11) возвращает [4, 6, 8, 10]
// Вызов функции getEvenNumbers(6, 12) возвращает [6, 8, 10, 12]
// Вызов функции getEvenNumbers(8, 8) возвращает [8]
// Вызов функции getEvenNumbers(7, 7) возвращает []
// Вызов функции getEvenNumbers() со случайными start и end возвращает правильный массив

// function getEvenNumbers(start, end) {
//   const numbers = [];
//   let findNumbers = [];

//   for (let i = start; ; i <= end; i++) numbers.push(i);
//   const number = numbers[i];
//   console.log(number);

//     if (i % 2 === 0) {
//       console.log('Чётное число: ', number);
//       findNumbers += number;
//     }

//   return findNumbers;
// }

// console.log(getEvenNumbers(2, 5)) // возвращает [2, 4]
// console.log(getEvenNumbers(3, 11)) // возвращает [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12)) // возвращает [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8)) // возвращает [8]
// console.log(getEvenNumbers(7, 7)) // возвращает []

function getEvenNumbers(start, end) {
  const numbers = [];
  let findNumbers = [];

  for (let i = start; i <= end; i++) numbers.push(i);
  // console.log(numbers);

  for (let value of numbers) {
    if (value % 2 === 0) {
      findNumbers.push(value);
    }
  }

  return findNumbers;
}

console.log(getEvenNumbers(2, 5)); // возвращает [2, 4]
console.log(getEvenNumbers(3, 11)); // возвращает [4, 6, 8, 10]
console.log(getEvenNumbers(6, 12)); // возвращает [6, 8, 10, 12]
console.log(getEvenNumbers(8, 8)); // возвращает [8]
console.log(getEvenNumbers(7, 7)); // возвращает []

// 2.30
// Дополни код так, чтобы в переменную number записывалось первое число от start до end, которое
// делится на 5 без остатка.

// Объявлена переменная start со значением 6
// Объявлена переменная end со значением 27
// Объявлена переменная number без инициализации
// Итоговое значение переменной number равно 10
// В цикле for используется break для выхода до завершения всех итераций цикла

const start = 6;
const end = 27;
let number;

for (let i = start; i < end; i += 1) {
  if (i % 5 === 0) {
    number = i;
    break;
  }
}

// 2.31
// Выполни рефакторинг функции findNumber(start, end, divisor) так, чтобы она:

// возвращала первое число от start до end, которое делится на divisor без остатка
// не использовала оператор break
// не использовала переменную number
// Объявлена функция findNumber(start, end, divisor)
// Вызов findNumber(2, 6, 5) возвращает 5
// Вызов findNumber(8, 17, 3) возвращает 9
// Вызов findNumber(6, 9, 4) возвращает 8
// Вызов findNumber(16, 35, 7) возвращает 21
// Вызов findNumber() со случайным набором чисел возвращает верный результат
// В цикле for не должен использоваться break для выхода до завершения всех итераций цикла

function findNumber(start, end, divisor) {
  for (let i = start; i < end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

console.log(findNumber(2, 6, 5)); // возвращает 5
console.log(findNumber(8, 17, 3)); // возвращает 9
console.log(findNumber(6, 9, 4)); // возвращает 8
console.log(findNumber(16, 35, 7)); // возвращает 21

// 2.32
// Напиши функцию includes(array, value), которая делает тоже самое, что и метод массива
// массив.includes(значение) - проверяет, есть ли в массиве array значение value, возвращая true если
// есть и false в противном случае.

// При выполнении этой задачи в теле функции includes() нельзя использовать метод массив.includes(значение).

// Объявлена функция includes(array, value)
// Вызов includes([1, 2, 3, 4, 5], 3) возвращает true
// Вызов includes([1, 2, 3, 4, 5], 17) возвращает false
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") возвращает true
// Вызов includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") возвращает false
// Вызов includes(["apple", "plum", "pear", "orange"], "plum") возвращает true
// Вызов includes(["apple", "plum", "pear", "orange"], "kiwi") возвращает false
// Вызов includes() для случайного массива со случайным value возвращает верный boolean
// В функции includes используется for, return, но не метод массива includes

function includes(array, value) {
  let message = false;

  for (let i = 0; i <= array.length; i += 1) {
    let item = array[i];

    if (item === value) {
      message = true;
      break;
    }
  }
  return message;
}

// МОДУЛЬ 3

// 3.1
// Дополни объект квартиры свойством owner, значением которого будет объект с информацией о владельце.
// Добавь ему следующие свойства:

// name - имя владельца, значение "Henry";
// phone - телефон, значение "982-126-1588";
// email - почта, значение "henry.carter@aptmail.com".
// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// В объекте apartment есть свойство owner
// Значение свойства owner это объект
// В объекте owner есть свойство name
// Значение свойства name это "Henry"
// В объекте owner есть свойство phone
// Значение свойства phone это "982-126-1588"
// В объекте owner есть свойствао email
// Значение свойства email это "henry.carter@aptmail.com"

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// 3.2

// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// В объекте apartment есть свойство owner
// Значение свойства owner это объект
// В объекте owner есть свойство name
// Значение свойства name это "Henry"
// В объекте owner есть свойство phone
// Значение свойства phone это "982-126-1588"
// В объекте owner есть свойствао email
// Значение свойства email это "henry.carter@aptmail.com"

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// 3.3
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам
// обьекта apartment.

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// Объявлена переменная apartment
// Значение переменной apartment это объект
// У объекта переменной apartment присутствуют свойства imgUrl, descr, rating, price и tags со значениями
// Объявлена переменная aptRating
// Значение переменной aptRating это число 4
// Объявлена переменная aptDescr
// Значение переменной aptDescr это строка "Spacious apartment in the city center"
// Объявлена переменная aptPrice
// Значение переменной aptPrice это число 2153
// Объявлена переменная aptTags
// Значение переменной aptTags это массив строк ["premium", "promoted", "top"]

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Change code below this line
const aptRating = apartment.rating;
const aptDescr = apartment.descr;
const aptPrice = apartment.price;
const aptTags = apartment.tags;
// Change code above this line

// 3.4
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта apartment.

// ownerName - имя владельца;
// ownerPhone - телефон владельца;
// ownerEmail - почта владельца;
// numberOfTags - количество элементов массива в свойстве tags;
// firstTag - первый элемент массива в свойстве tags;
// lastTag - последний элемент массива в свойстве tags.
// Объявлена переменная apartment с помощью const
// Значение переменной apartment это объект
// Объявлена переменная ownerName с помощью const
// Значение переменной ownerName это строка "Henry"
// Объявлена переменная ownerPhone с помощью const
// Значение переменной ownerPhone это "982-126-1588"
// Объявлена переменная ownerEmail с помощью const
// Значение переменной ownerEmail это "henry.carter@aptmail.com"
// Объявлена переменная numberOfTags с помощью const
// Значение переменной numberOfTags это 3
// Объявлена переменная firstTag с помощью const
// Значение переменной firstTag это "premium"
// Объявлена переменная lastTag с помощью const
// Значение переменной lastTag это "top"

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
const ownerName = apartment.owner.name;
const ownerPhone = apartment.owner.phone;
const ownerEmail = apartment.owner.email;
const numberOfTags = apartment.tags.length;
const firstTag = apartment.tags[0];
const lastTag = apartment.tags[apartment.tags.length - 1];
// Change code above this line

// 3.5
// Дополни код присвоив объявленным переменным выражения обращения к соответствующим свойствам обьекта
// apartment используя синтаксис «квадратных скобок».

// aptRating - рейтинг;
// aptDescr - описание;
// aptPrice - цена;
// aptTags - теги.
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная aptRating
// Значение переменной aptRating это 4
// Объявлена переменная aptDescr
// Значение переменной aptDescr это "Spacious apartment in the city center"
// Объявлена переменная aptPrice
// Значение переменной aptPrice это 2153
// Объявлена переменная aptTags
// Значение переменной aptTags это ["premium", "promoted", "top"]

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
};

// Change code below this line
const aptRating = apartment['rating'];
const aptDescr = apartment['descr'];
const aptPrice = apartment['price'];
const aptTags = apartment['tags'];
// Change code above this line

// 3.6
// Дополни код обновив значения свойств объекта apartment:

// цену в свойстве price на 5000;
// рейтинг квартиры в свойстве rating на 4.7;
// имя владельца во вложенном свойстве name на "Henry Sibola";
// массив тегов в свойстве tags добавив в конец строку "trusted".
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Значение вложенного свойства price это число 5000
// Значение вложенного свойства rating это число 4.7
// Значение вложенного свойства name это строка "Henry Sibola"
// Значение вложенного свойства tags это массив ["premium", "promoted", "top", "trusted"]

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
  tags: ['premium', 'promoted', 'top'],
  owner: {
    name: 'Henry',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
apartment.price = 5000;
apartment.rating = 4.7;
apartment.owner.name = 'Henry Sibola';
apartment.tags.push('trusted');

console.log(apartment.price);
console.log(apartment.rating);
console.log(apartment.name);
console.log(apartment.tags);

// 3.7
// Добавь объекту apartment несколько новых свойств:

// area - площадь в квадратных метрах, число 60;
// rooms - количество комнат, число 3;
// location - местоположение квартиры, обьект со следующими вложенными свойствами;
// country - страна, строка "Jamaica";
// city - город, строка "Kingston".
// Объявлена переменная apartment
// Значение переменной apartment это объект
// Значение вложенного свойства area это число 60
// Значение вложенного свойства rooms это число 3
// Значение вложенного свойства location это объект
// Значение вложенного свойства location.country это строка "Jamaica"
// Значение вложенного свойства location.city это строка "Kingston"

const apartment = {
  imgUrl: 'https://via.placeholder.com/640x480',
  descr: 'Spacious apartment in the city center',
  rating: 4.7,
  price: 5000,
  tags: ['premium', 'promoted', 'top', 'trusted'],
  owner: {
    name: 'Henry Sibola',
    phone: '982-126-1588',
    email: 'henry.carter@aptmail.com',
  },
};

// Change code below this line
apartment.area = 60;
apartment.rooms = 3;
apartment.location = {};
apartment.location.country = 'Jamaica';
apartment.location.city = 'Kingston';

// 3.8
// Дополни код объявления объекта так, чтобы у него были свойства name, price, image и tags со
// значениями из переменных с аналогичными именами.Обязательно используй синтаксис коротких свойств.

// Объявлена переменная product
// Значение переменной product это объект
// Значение вложенного свойства name это строка "Repair Droid"
// Значение вложенного свойства price это число 2500
// Значение вложенного свойства image это строка "https://via.placeholder.com/640x480"
// Значение вложенного свойства tags это массив ["on sale", "trending", "best buy"]

const name = 'Repair Droid';
const price = 2500;
const image = 'https://via.placeholder.com/640x480';
const tags = ['on sale', 'trending', 'best buy'];

const product = {
  name,
  price,
  image,
  tags,
};

// 3.9
// Дополни код объявления объекта credentials так, чтобы в результате у него были два
// свойства: email и password, имена которых хранятся в переменных emailInputName и passwordInputName.

// Значением свойства email должна быть строка "henry.carter@aptmail.com", а значением свойства
// password - строка "jqueryismyjam".

// Объявлена переменная credentials
// Значение переменной credentials это объект
// В объекте credentials есть свойство email
// Значение вложенного свойства email это строка "henry.carter@aptmail.com"
// В объекте credentials есть свойство password
// Значение вложенного свойства password это строка "jqueryismyjam"

const emailInputName = 'email';
const passwordInputName = 'password';

const credentials = {
  // Change code below this line
  [emailInputName]: 'henry.carter@aptmail.com',
  [passwordInputName]: 'jqueryismyjam',

  // Change code above this line
};

// 3.10
// Перебери объект apartment используя цикл for...in и запиши в массив keys все его ключи, а
// в массив values все значения его свойств.

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const keys = [];
const values = [];
// Change code below this line

for (const key in apartment) {
  keys.push(key);
  values.push(apartment[key]);
}

console.log(keys);
console.log(values);

// 3.11
// Выполни рефакторинг решения предыдущего задания добавив в цикл for...in проверку на собственное свойство.

// Объявлена переменная advert.
// Значение переменной advert это объект.
// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Объявлена переменная values.
// Значение переменной values это массив["Spacious apartment in the city center", 4, 2153].

const keys = [];
const values = [];
const advert = {
  service: 'apt',
};
const apartment = Object.create(advert);
apartment.descr = 'Spacious apartment in the city center';
apartment.rating = 4;
apartment.price = 2153;

for (const key in apartment) {
  // Change code below this line
  if (apartment.hasOwnProperty(key)) {
    keys.push(key);
    values.push(apartment[key]);
  }
  // Change code above this line
}

// 3.12
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств
// объекта в параметре object.Используй переменную propCount для хранения количества свойств объекта.

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

// 3.12
// Напиши функцию countProps(object), которая считает и возвращает количество собственных свойств
// объекта в параметре object.Используй переменную propCount для хранения количества свойств объекта.

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта

function countProps(object) {
  let propCount = 0;
  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
}

console.log(countProps({})); // возвращает 0
console.log(countProps({ name: 'Mango', age: 2 })); // возвращает 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // возвращает 3

// 3.13
// Перебери объект apartment используя метод Object.keys() и цикл for...of.Запиши в переменную keys
// массив ключей собственных свойств объекта apartment, и добавь в массив values все значения его свойств.

// Объявлена переменная apartment.
// Значение переменной apartment это объект.
// Объявлена переменная keys.
// Значение переменной keys это массив ["descr", "rating", "price"].
// Значение переменной keys получено с помощью метода Object.keys().
// Объявлена переменная values.
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153].
// Значение переменной values получено с помощью цикла for...of.

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
const values = [];
// Change code below this line
const keys = Object.keys(apartment);

for (const key of keys) {
  values.push(apartment[key]);
}
console.log(keys);
console.log(values);

// 3.14
// Выполни рефакторинг функции countProps(object) используя метод Object.keys() и, возможно,
// но необязательно, цикл for...of.

// Объявлена функция countProps(object)
// Вызов countProps({}) возвращает 0
// Вызов countProps({ name: "Mango", age: 2 }) возвращает 2
// Вызов countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) возвращает 3
// Функция подсчитывает только собственные свойства объекта
// Функция использует метод Object.keys() и, возможно, цикл for...of

function countProps(object) {
  let propCount = 0;

  for (let obj of Object.keys(object)) {
    propCount += 1;
  }

  return propCount;
}

console.log(countProps({})); // возвращает 0
console.log(countProps({ name: 'Mango', age: 2 })); // возвращает 2
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // возвращает 3

// 3.15
// Запиши в переменную keys массив ключей собственных свойств объекта apartment, а в переменную values
// массив всех значений его свойств.Используй методы Object.keys() и Object.values().

// Объявлена переменная apartment
// Значение переменной apartment это объект
// Объявлена переменная keys
// Значение переменной keys это массив ["descr", "rating", "price"]
// Объявлена переменная values
// Значение переменной values это массив ["Spacious apartment in the city center", 4, 2153]
// Для получения массива ключей объекта apartment используется Object.keys()
// Для получения массива значений объекта apartment используется Object.values()

const apartment = {
  descr: 'Spacious apartment in the city center',
  rating: 4,
  price: 2153,
};
// Change code below this line
const keys = Object.keys(apartment);
const values = Object.values(apartment);

console.log(keys);
console.log(values);

// 3.16
// Напиши функцию countTotalSalary(salaries) которая принимает объект зарплат, где имя свойства
// это имя сотрудника, а значение свойства это зарплата.Функция должна рассчитать общую сумму зарплат
// сотрудников и вернуть её.Используй переменную totalSalary для хранения общей суммы зарплаты.

// Объявлена функция countTotalSalary(salaries)
// Вызов countTotalSalary({}) возвращает 0
// Вызов countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) возвращает 330
// Вызов countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) возвращает 400
// Функция учитывает только собственные свойства объекта

function countTotalSalary(salaries) {
  let totalSalary = 0;
  for (const salary of Object.values(salaries)) {
    totalSalary += salary;
  }

  return totalSalary;
}

console.log(countTotalSalary({})); // возвращает 0
console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // возвращает 330
console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // возвращает 400


// 3.17
// Перебери массив объектов colors используя цикл for...of.Добавь в массив hexColors значения свойств
// hex, а в массив rgbColors значения свойств rgb из всех объектов массива colors.

// Объявлена переменная colors
// Значение переменной colors это массив
// Объявлена переменная hexColors
// Значение переменной hexColors это массив ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Объявлена переменная rgbColors
// Значение переменной rgbColors это массив ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

const colors = [
  { hex: '#f44336', rgb: '244,67,54' },
  { hex: '#2196f3', rgb: '33,150,243' },
  { hex: '#4caf50', rgb: '76,175,80' },
  { hex: '#ffeb3b', rgb: '255,235,59' },
];

const hexColors = [];
const rgbColors = [];
// Change code below this line
for (const color of colors) {
  hexColors.push(color.hex);
  rgbColors.push(color.rgb);
}
console.log(hexColors);
console.log(rgbColors);

// 3.18
// Напиши функцию getProductPrice(productName) которая принимает один параметр productName - название
// продукта. Функция ищет объект продукта с таким именем(свойство name) в массиве products и возвращает
// его цену(свойство price).Если продукт с таким названием не найден, функция должна возвращать null.

// Объявлена функция getProductPrice(productName).
// Вызов getProductPrice("Radar") возвращает 1300.
// Вызов getProductPrice("Grip") возвращает 1200.
// Вызов getProductPrice("Scanner") возвращает 2700.
// Вызов getProductPrice("Droid") возвращает 400.
// Вызов getProductPrice("Engine") возвращает null.

const products = [
  { name: 'Radar', price: 1300, quantity: 4 },
  { name: 'Scanner', price: 2700, quantity: 3 },
  { name: 'Droid', price: 400, quantity: 7 },
  { name: 'Grip', price: 1200, quantity: 9 },
];

function getProductPrice(productName) {
  for (const key of products) 
    if (key.name === productName) 
      return key.price;
      return null
    } 
  

console.log(getProductPrice('Radar')); // возвращает 1300.
console.log(getProductPrice('Grip')); // возвращает 1200.
console.log(getProductPrice('Scanner')); // возвращает 2700.
console.log(getProductPrice('Droid')); // возвращает 400.
console.log(getProductPrice('Engine')); // возвращает null.