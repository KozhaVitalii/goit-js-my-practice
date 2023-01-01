// Посчитать общую сумму покупок в корзине

const cart = [54, 28, 105, 70, 92, 17, 120];

// 1. Перебрать массив
// 2. Создать переменную до запуска цикла, т.к.нам нужна глобальная переменная
// 3. На каждой итерации перебора массива, получить доступ к элементу массива и каждый
// элемент приплюсовать к переменной тотал

// 2. Создать переменную до запуска цикла, т.к.нам нужна глобальная переменная
let total = 0;

// 1. Перебрать массив
for (let i = 0; i < cart.length; i += 1) {
//   console.log(cart[i]);

  // 3. На каждой итерации перебора массива, получить доступ к элементу массива и каждый
  // элемент приплюсовать к переменной тотал
  total += cart[i];
}

console.log('Total: ', total);

// По сути в нашей задачке мы не изменяем элементы массива, все что мы делаем это перебираем массив
// и записываем(плюсуем), каждый элемент массива к глобальной переменной тотал(объявленной за циклом),
// поэтому можем упростить конструкцию(решение задачки) используя цикл for of

const cart1 = [54, 28, 105, 70, 92, 17, 120];

let total1 = 0;

for (const value of cart1) {
  total1 += value;
}
console.log('Total: ', total1);

// Ещё один пример:
// Необходимо добавить по 20% налога, каждому элементу массива:
const cart2 = [54, 28, 105, 70, 92, 17, 120];

for (let i = 0; i < cart2.length; i += 1) {
    cart2[i] = Math.round(cart2[i] * 1.2);
} 
console.log(cart2);

// Через for of такая задача не решается т.к. в данном случае нам необходимо изменить
// значение єлементов массива:

const cart3 = [54, 28, 105, 70, 92, 17, 120];

for (let value of cart3) {
  value = Math.round(value * 1.2);
}
console.log(cart3);