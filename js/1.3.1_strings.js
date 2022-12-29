// Свойство length. Обращение к свойству выполняется без каких либо скобок. используется через "."
// const message = 'В єтой строке 26 символов.';
// console.log(message.length);

// Конкатенация строк выполняется через "+"

const firstName = 'Chelsy';
const lastName = 'Emerald';
const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// Задачка:
// Напиши скрипт, который выведет строку в формате:
// "Гость х у поселяется в z номер q",
// подставь вместо x y z q значение переменных;

const room = 716;
const type = 'VIP';
// const welcomeMessage =
//   'Гость ' +
//   firstName +
//   ' ' +
//   lastName +
//   ' поселяется в ' +
//     type +
//   ' номер ' + room;
// console.log(welcomeMessage);

// Пример выше это очень примитивный вариант, на практике же используются шаблонные строки
// Разберем другой пример с использованием шаблонных строк(литералов)
// Основная его суть это использование косых кавычек "`" в которые берётся все выражение и
// через ${ } встраиваются значения тех переменных, которые необходимо отобразить в выражении
// В ${ } можно даже производить вычисления, к примеру ${5+5}

const quantity = 5;
const orderMsg = 'Вы заказываете 5 холодильников';
console.log(`Вы заказываете ${quantity} холодильников`);

// и теперь переделаем сообщение из примера, который разобрали выше:
const welcomeMessage = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;
console.log(welcomeMessage);

// Нормализация с методом toLowerCase()
// JS крайне чувствительный к регистру. К примеру, Мир и мир, это разные значения
// Решается это приведением значений к нижнему либо к верхнему регистру
// Пример: Samsung все буквы переводим в нижний регистр

let brand = 'SamsUng';
brand = brand.toLowerCase();
console.log(brand);

// Либо просим пользователя ввести название бренда либо что либо другое,
// но пользователи могут вводить каждый по разному, через .toLowerCase() нормализуем это всё к нижнему регистру:

// let customerBrand = prompt('Введите интересующий Вас бренд');
// customerBrand = customerBrand.toLowerCase();
// console.log(customerBrand);

// Как сделать нормализацию всей строки, кроме первой буквы? Её оставить заглавной:
// Разберём пример с использованием метода slice():
let userName = 'ВлаДИМиР';
userName = userName[0] + userName.slice(1).toLowerCase();
console.log(userName);

// Необходимо обратить внимание, что для userName в данном коде мы используем два метода подряд .slice(1) и .toLowerCase().
// Методы отрабатывают слева на право, т.е. сначала .slice(1). потом toLowerCase()


// Поиск в строке с использованием метода includes()

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам, предлагаю тебе миллион';
const string2 = 'Самая большая РАСПРОДАЖА этой недели, не пропустите!';
const string3 = 'Рекламная компания Мегабум';

// console.log(string1.includes(blacklistedWord1));
// console.log(string1.includes(blacklistedWord2));

// console.log(string2.includes(blacklistedWord1));
// console.log(string2.includes(blacklistedWord2));

// console.log(string3.includes(blacklistedWord1));
// console.log(string3.includes(blacklistedWord2));

// Проблема в том, что если мы не нормализуем строку, то к примеру во втором кейсе, где необходимо
// найти слово "распродажа", наш метод его не обнаружит, поэтому перед применеием метода.includes
// необходимо предварительно нормализовать всю строку используя метод .toLowerCase():

console.log(string2.includes(blacklistedWord2));
console.log(string2.toLocaleLowerCase().includes(blacklistedWord2));