// Напиши скрипт поиска самого маленького числа в массиве, при условии,
// что числа уникальные (не повторяются)

const numbers = [51, 18, 13, 24, 7, 85, 19];
let smallestNumber = numbers[0];

// 1 вариант решения через "for of":

for (const number of numbers) {
  if (number < smallestNumber) {
    smallestNumber = number;
  }
}
console.log(smallestNumber);


// А как найти самое большое число ?

const numbers1 = [51, 18, 13, 24, 7, 85, 19];
let biggestNumber = numbers1[0];

for (const number1 of numbers1) {
  if (number1 > biggestNumber) {
    biggestNumber = number1;
  }
}
console.log(biggestNumber);