/*
 * Стрелочные функции
 * - Объявление
 * - Явный и неявный возврат
 * - Аргументы
 * - Неявный возврат объекта
 */

// Полная запись функции:
// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

// Перепишем эту же функцию, сделаем из неё стрелочную функцию:
// const addArrow = (a, b, c) => {
//     return a + b + c;
// };

// В итоге синтаксис отличаетсяот обычной функции тем что, вместо слово function, которое указывали перед
// параметрами (a, b, c), указываем ""=>"" после параметров (a, b, c) и всё.

// Теперь что касается передаваемых параметров в функции(в нашем случае это(a, b, c)):
// если у нас в параметрах 2 и более параметра, то их необходимо обязательно брать в(), как в нашем примере.
// если у нас параметр всего лишь один, к примеру только(a), то тогода() можно пропустить и указать только
// параметр.К примеру вместо "const addArrow = (a) =>", можно указать "const addArrow = a =>"
// Если параметров вообще нет, то тогда обязательно необходимо указать пустые скобки - ().
// Вот так "const addArrow = () => "
// Если у стрелочной функции должно быть тело(условие), то что описывается в фигурных скобках { },
// Т.е.выполняется какая - то инструкция, то в { }, обязательно необходимо указывать тело функции и return. Это
// называется явный возврат, где мы явно указываем return.Если же в теле нашей функции ничего кроме return нет,
// то тогда эту запись можно упростить, для этого не указываем фигурные скобки { } и return в них, а просто пишем
// результат возврата, который должен был бы отдать return, вот так: const addArrow = (a, b, c) => a + b + c;
// Такой вариант записи будет называться неявный возврат

// При этом записи:

// 1.
// const addArrow = (a, b, c) => a + b + c; и

// 2.
// const add = function (a, b, c) {
// console.log(arguments);
// return a + b + c;
// };

// Т.е. 1 и 2 равны и дадут один и тот же результат.

// У стрелочных функций нет локальной переменной Arguments, вместо этого используем rest, т.е. "...args"
// В обычной функции: console.log(Arguments)
// В стрелочной функции: console.log(...args)

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));


// Разберем ещё один подвоный камень, о котором необходимо знать:
// Если мы хотим упростить написание стрелочной функции и после => хотим выполнить неявный возврат,
//     где возвращаемым значением будет объект, то нам этот объект необходимо взять в(), если мы этого
// не сделаем, а сразу укажем объект { а: 5 }, то JS распознает первую, открывающую фигурную скобку как
// начало тела функции

// const fnA = function () {
//   return {
//     a: 5,
//   };
// };

// console.log(fnA());

// Правильная запись стрелочной функции с неявным возвратом, где необходимо возвратить объект, для возврата
// мы оборачиваем его в ():

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());

// const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }

//     return filteredArray;
// };

// const callback1 = value => value >= 3;

// Использование инлайн функции "value => value >= 3", вставляем в параметр, если нигде больше не планируем
// использовать. Очень упрощенный вариант записи.

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);

// console.log(r1);

// const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2);

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
// ];

// const getFruitsWithQuantity = fruit => fruit.quantity >= 120;

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3);


// У стрелочной функции нет своего this, её необходимо объявить.

// const showThis = () => { console.log('this in shownThis: ', this); };

// showThis();

// Контекст внутри стрелки объявляется местом её объявления, а не вызова, и ссылается на контекст
// родительской функции. В примере выше наш this навсегда останется undefined

// Стрелки как методы в объектах:

// const user = {

//     fullname: 'Mango',
//     showName() {
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullname);
//         const inner = () => {
//             console.log('this in inner: ', this);
//                    };
// inner();
//     },
// };

// user.showName();

// В примере выше мы объявили this в контексте объекта user, поэтому при вызове this, она всегда теперь будет ссылаться на
// объект user

// Никогда не используйте стрелки как методы объекта.Стрелки никогда не бывают методами объекта.Как в примере
// ниже this будет определен как undefined

// const user = {

//     fullname: 'Mango',
//     showName() {
//         console.log('this: ', this);
//         console.log('this.fullName: ', this.fullname);
//     },
// };

// Стрелки также не работают как конструкторы:

// const User = name => {
//     this.name = name;
// }
// console.log(new User('Манго'));

// Результат тоже будет ошибка т.к. при использовании => не определяется this к переменной.

// а так все будет ок:
const User1 = function (name) {
    this.name = name;
}
console.log(new User1('Манго'));