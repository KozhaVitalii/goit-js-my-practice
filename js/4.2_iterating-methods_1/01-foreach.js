/*
 * Array.prototype.forEach(callback(currentValue, index, array), thisArg)
 * - Поэлементо перебирает оригинальный массив
 * - Ничего не возвращает
 * - Заменяет классический for, если не нужно прерывать цикл
 */

const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number) {
//   console.log('number', number);
// });

// Рефакторим в стрелочную функцию: 
// numbers.forEach(number => console.log('number', number));


// Если мы захотим изменить что - то в перебираемом массиве и вернуть новый массив с новым значением, то
// используем два других параметра forEach это index, array:

numbers.forEach(function (number, index, array) {
  console.log('number', number);
  array[index] = 20;
});

console.log(numbers);

// НО при использовании перебирающих методов мы практически никогда не хотим ничего изменять в исходном массиве,
// только перебрать и сделать выборку, отсортировать, сумировать и другие действия.

// forEach - это самая обычная замена, циклу "for".forEach не изменяет массив используется для перебора массива
// без возможности прерывания.

// У forEach есть 2 аргумента - 1. это колбек: (callback(currentValue, index, array) и 2. это объект (thisArg) 
// в контексте которого будет вызываться этот колбек.
// Array.prototype.forEach(callback(currentValue, index, array), thisArg)