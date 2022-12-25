// Задача 1 Напиши скрипт, который проверяет вхождение числа в отрезок обозначеный х1 и х2

// До х1
// После х2
// От х1 до х2
// До х1 или после х2

const x1 = 10;
const x2 = 30;
const number = 50;

// console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);
// console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);
// console.log(
//   `Число ${number} попадает в отрезок от ${x1} и до ${x2}? `,
//   number > x1 && number < x2,
// );
// console.log(
//   `Число ${number} попадает в отрезок до ${x1} и после ${x2}? `,
//   number < x1 || number > x2,
// );

// Можно то же самое, только через переменную:
const res1 = number > x1 && number < x2;
const res2 = number < x1 || number > x2;

console.log(`Число ${number} попадает в отрезок до ${x1}? `, number < x1);
console.log(`Число ${number} попадает в отрезок после ${x2}? `, number > x2);
console.log(
    `Число ${number} попадает в отрезок от ${x1} и до ${x2}? `,
    res1
);
console.log(
  `Число ${number} попадает в отрезок до ${x1} и после ${x2}? `,
  res2
);