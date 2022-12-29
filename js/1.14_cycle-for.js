// Цикл for
// Позволяет повторять один и тот же кусочек кода множество раз

// Конструкция выглядит так:

// for (инициализация; условие; пост - выражение) {
//     тело цикла
// }

// Цикл состоит из итераций(повторений).
// Разберем конструкцию:
// инициализация; - это счетчик, к примеру let i = 0; i - может быть любое значение, к примеру 100 и др.
// условие; - к примеру i > 5(обычно сравнение больше или меньше), если на этом этапе false,
//     т.е.условие не выполняется, то управление передается дальше за цикл(т.е.цикл прерывается и продолжается
//     выполнение кода уже за рамками конструкции), если условие выполняется т.е. true, то выполняется тело цикла
// пост - выражение  = когда при true выполнилось тело цикла, то здесь как правило идёт изменение
//     (увеличение / уменьшение) счётчика.К примеру, i += 1(то же самое что i = i + 1)

// for (let i = 0; i <= 5; i += 1) {
//   console.log(i);
// }

// console.log('Цикл в действии');

// или так

// for (let i2 = 10; i2 >= 0; i2 -= 1) {
//   console.log(i2);
// }
// console.log('Цикл в действии');
// или так

// for (let i3 = 10; i3 >= 0; i3 -= 2) {
//   console.log(i3);
// }
// console.log('Цикл в действии');
// либо любое другое значение

// Решим задачку:

// Необходимо написать скрипт который подсчитывает общую сумму зарплат работников.
// Кол - во работников хранится в переменной employees.
// Зарплата каждого работника это случайное число от 500 до 5000.
// Записать сумму в переменную totalSalary и вывести в консоль.

// Пишим алгоритм:
// 1. Создать вары
// 2. Перебрать работников в цикле
// 3. Сгенерить случайную зп для каждого работника
// 4. прибавить зп к тотал
// 5. вывести в лог

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 15;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//   const salary = Math.round(
//     Math.random() * (maxSalary - minSalary) + minSalary,
//   );
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     totalSalary += salary;
// }
//     console.log('Total salary ', totalSalary);

// Напиши скрипт, который подсчитывает сумму всех чётных чисел,
// которые входят в диапазон чисел в переменных от min до max.
// Например если min = 0 и max = 5, то диапазон 0-5, и в нём два четных числа - 2 и 4, их сумма 6.

// Решение:
// 1. Объявить вары
// 2. Перебрать диапазон от мин до макс
// 3. Проверяем остаток от деления
// 4. Выводим сумму

const min = 5;
const max = 13;
let total = 0;

for (let i = min; i <= max; i += 1) {
//   console.log(i);
  if (i % 2 === 0) {
    console.log('Чётное число: ', i);
      total += i;
    //   total += i; - данное условие выполняется, если if (i % 2 === 0), поэтому 
    //      при сумировании у нас не учитываются нечётные значения, если вынести
    //   total += i; за пределы конструкции if то посчитаются в суммы и нечётные
  }
}
console.log('total: ', total);

// Можно решить таким путём: называется "Логика от обратного", где если
// выполняется условие if (i % 2 !== 0), то continue; говорит иди продолжай дальше.
// Такая логика считается классически более правильной.При котором, сначала проверяются и отсеиваются 
// плохие кейсы, а далее код идёт выполнять уже правильные кейсы 

const min1 = 5;
const max1 = 13;
let total1 = 0;

for (let i = min1; i <= max1; i += 1) {
  if (i % 2 !== 0) {
    console.log('Не чётное число: ', i);
    continue;
    }
        console.log('Чётное число: ', i);
        total1 += i;
}
console.log('total: ', total1);