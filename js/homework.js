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
const login = "mango935"
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
const message = `You ordered droids worth ${totalPrice} credits. Delivery (${deliveryFee} credits) is included in total price.`

// 1.7
// Change code below this line
function sayHi() {
  console.log("Hello, this is my first function!");
}

sayHi();

// 1.8
// Change code below this line
function add(a, b, c) {
  console.log(`Addition result equals ${a+b+c}`);
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

function makeMessage (name, price) {
  // Change code below this line
   const message = `You picked ${name}, price per item is ${price} credits`;
  // Change code above this line
  return message;
};

// 1.11

function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};

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
  if (age >= 18) { // Change this line
    return "You are an adult";
  }

  return "You are a minor";
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
};

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

  return slug
  // Change code above this line
}

// 2.14

const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// Change code below this line
const firstTwoEls = fruits.slice(0,2); // ["apple", "plum"]
const nonExtremeEls = fruits.slice(1,4); // ["plum", "pear", "orange"]
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
  } else { }
  
  return newArray;
};

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); //["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"];
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3));  // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []


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