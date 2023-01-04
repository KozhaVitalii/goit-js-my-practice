// Напиши скрипт подсчета суммы покупки со скидкой в зависимости
// от потраченной суммы за все время(партнерская программа)

// Общая сумма потраченного хранится в переменной totalSpent
// Сумма текущего платежа хранится в переменной payment
// Скидка хранится в переменной discount

// - Если потрачено от [100 до 1000) - бронзовый партнер, скидка 2 %;
// - Если потрачено от [1000 до 5000) - серебрянный партнер, скидка 5 %;
// - Если потрачено больше [5000 - золотой партнер, скидка 10 %;
// - Если потрачено меньше 100) - не партнер, скидка 0 %;

// Полезный комментарий:
// [100 до 1000) - если написано так, то это значит от 100 до 1000 не включая 1000
// Символ "[" - значит "от", символ ")" - значит до, но не включает её
// 100) - это значит до 100, но 100 не включается, т.е. 99.99999

// 'Бронзовый партнер, скидка 2 %';
// 'Серебрянный партнер, скидка 5 %';
// 'Золотой партнер, скидка 10 %';
// 'У Вас ещё нет партнерской скидки'

// В результате вывести сообщение: "Оформляем заказ на сумму [сумма] со скидкой [скидка]%"

let totalSpent = 300;
let payment = 500;
let discount = 0;

let order;

if (totalSpent >= 100 && totalSpent < 1000) {
  console.log('Бронзовый партнер, скидка 2 %');
  discount = 0.02;
} else if (totalSpent >= 1000 && totalSpent < 5000) {
  console.log('Серебрянный партнер, скидка 5 %');
  discount = 0.05;
} else if (totalSpent >= 5000) {
  console.log('Золотой партнер, скидка 10 %');
  discount = 0.1;
} else {
  console.log('У Вас ещё нет партнерской скидки');
}

console.log(
  `Оформляем заказ на сумму ${payment} со скидкой ${discount * 100}%`,
);

payment -= payment * discount
// or let payment = payment - (payment * discount)

console.log(`Итоговая сумма к оплате ${payment}`);

totalSpent += payment;
console.log(`Общая сумма потраченная в магазине ${totalSpent}`);


