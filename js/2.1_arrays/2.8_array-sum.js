// Напиши код, который считает сумму элементов двух массивов

const array1 = [5, 10, 15, 20];
const array2 = [10, 20, 30];

let total = 0;

// Вариант 1 не оптимальный. Перебрать два массива через for:
// for (let i = 0; i < array1.length; i += 1) {
//     total += array1[i];
// }
// for (let j = 0; j < array2.length; j += 1) {
//     total += array2[j];
// }
// console.log(total);

// Вариант 2 более оптимальный.Через объединение 2 - х(и более) массивов:
// при этом метод concat не деструктивный, т.е. не изменяет значение ни в 1-м ни во 2-м массиве
// метод join в данном случае не применим т.к. в результате объединения получим строку а не массив
const numbers = array1.concat(array2);
// Через метод concat() можем пришить бесконечно множество массивов concat(array2, array3, array4 и т.д) 
for (const number of numbers) {
    total += number;
}
console.log(total);
 