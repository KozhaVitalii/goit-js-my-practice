// let a = 10;
// let elementWidth = "50px";
// const result1 = Number.parseInt(elementWidth);
// console.log(result1);
// console.log(typeof result1);

// let elementfloat = "50.34px";
// const result2 = Number.parseFloat(elementfloat);
// console.log(result2);
// console.log(typeof result2);

// // v1
// const salary1 = 1300.327859;
// console.log(salary1.toFixed());
// // v2
// let salary2 = 1300.327859;
// salary2 = salary2.toFixed(2);
// console.log("Variant 2: ", salary2);
// console.log(typeof salary2);
// // v3
// let salary3 = 1300.327859;
// salary3 = salary3.toFixed(2);
// salary3 = Number(salary3);
// console.log("Variant 3: ", salary3);
// console.log(typeof salary3);
// // v4 сокращаем код за счёт вложенности методов:
// let salary4 = 1300.327859;
// salary4 = Number(salary4.toFixed(2));
// console.log("Variant 4: ", salary4);
// console.log(typeof salary4);
// // v5 сокращаем код за счёт вложенности методов:
// let salary5 = 1300.327859;
// console.log("Variant 5: ", Number(salary5.toFixed(2)));

// // Объект с набором базовых методов и свойств для работы с цифрами
// console.log(Math);
// // К примеру возведение в степень
// const result3 = Math.pow(2, 3);
// console.log(result3);
// // or
// const base = 2;
// const power = 3;
// const result4 = Math.pow(base, power);
// console.log(result4);
// // or экспонента, то же что и возведение в степень
// console.log(2 ** 3);

// // Задачка: напиши скрипт, который просит пользователя ввести число и степень,
// // возводит число в эту степень и выводит результат в консоль
// // Сначала составляем для себя пошаговый алгоритм решения, а уж только потом пишем код
// // Шаг 1 попросить ввести число и сохранить в переменную
// let base1 = prompt("Введите число");
// base1 = Number(base1);
// console.log(base1);
// // Шаг 2 попросить ввести степень и сохранить в переменную
// let power2 = prompt("Введите степень");
// power2 = Number(power2);
// console.log(power2);
// // Шаг 3 возвести введённые данные в степень и вывести на экран
// const result5 = base1 ** power2;
// console.log(result5);
// Math.random генерит число в рандомном порядке от 0 до 1
// console.log(Math.random());
// // Генерация случайных чисел в заданном диапазоне
// console.log(Math.random() * (50 - 30) + 30);
// // or + задать мин и макс в виде переменных + дополнительно округлить до целого числа
// const max = 50;
// const min = 30;
// const result = Math.round(Math.random() * (max - min) + min);
// console.log(result);
// Один из примеров зачем необходима генерация случайногоо числа: пример подстановки рандомного фона на сайте
// const colors = ["tomato", "teal", "orange", "deeppink"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// console.log(index);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;
