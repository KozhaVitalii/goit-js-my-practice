/* ФУНКЦИИ ЗАМЫКАНИЯ
 * Функция результатом своей работы может возвращать другую функцию.
 *
 * Возвращаемая функция во время вызова будет иметь доступ
 * ко всем локальным переменным (области видимости)
 * родительской функции (той из которой её вернули),
 * это называется «замыкание».
 */

// Кроме того что функция может получать внутрь себя другую функцию(колбэк) как аргумент, она ещё может
// возвращать из себя дугую функцию.

// Рассмотрим простой пример:

// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной функции fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('Это вызов innerFunction');
//     };

//     return innerFunction;
// };

// const fnB = fnA(555);

// Функция fnB будет иметь доступ ко всем параметрам (переменным) функции fnA, т.е. через функцию fnВ
// можно получить доступ к переменным:

// const innerVariable
// const innerFunction
// и к параметру (parameter) который передается извне в функцию fnA

// fnB(); - таким образом вызвав функцию fnB() мы будем иметь доступ ко всему что имеет fnА()

// console.log(fnB); - выведя в консоль мы увидем все что есть в fnА()

/*
 * Поварёнок
 */
// const makeDish = function (sheffName, dish) {
//     console.log(`${sheffName} готовит ${dish}`);
// };

// makeDish('Mango', 'пирожок');
// makeDish('Mango', 'омлет');
// makeDish('Mango', 'чай');

// makeDish('Poly', 'котлеты');
// makeDish('Poly', 'супик');
// makeDish('Poly', 'кофе');

// В данном случае консоль лог нам каждый раз будет возвращать имя шеф - повара и блюда которые он готовит.
// Получается что каждый раз будет дублироваться имя шеф-повара. Чтобы это исключить мы можем:

// 1. Объявим функцию сделай шефа и будем передавать в неё имя шефа.А вот результатом этой функции мы будем
// возвращать итоговое выражение. В function (name) мы передаем имя этого шефа. А результатом работы функции
// const makeSheff мы возвращаем результат работы функции const makeDish, которая в замыкании будет иметь доступ 
// к имени шефа в function (name) 

const makeSheff = function (name) {
    // const innverVar = 555;
    // const message = 'hello';

    const makeDish = function (dish) {
        // console.log(message);
        // console.log(innverVar);
        console.log(`${name} готовит ${dish}`);
    };

    return makeDish;
};

// В переменную const mango записываем шефа 'Mango', но в makeSheff уже лежит функция makeDish
const mango = makeSheff('Mango');

// По - шагово:
// 1. Мы взвали функцию makeSheff на 77 строке
// 2. Манго записался в параметр(name) на 63 сторчке
// 3. Результатом работы функции makeSheff мы вернули функцию makeDish(на 67 строчке) как Результатом
// return makeDish(стр. 73)
// 4. В итоге в const mango лежит функция const makeDish
// И если вызвать функцию const makeDish, то она все ещё будет получать доступ к параметру (name) внутри себя.

console.dir(mango);

// mango('котлеты'); - манго - это есть функция makeSheff('Mango'), которая уже содержит в себе ссылку на
// функцию makeDish в которую на место function (dish) подставится аргумент ('котлеты')
// mango('пирожок');

// Для еще одного примера возьмем другое им шефа 'Poly'
// const poly = makeSheff('Poly');
// console.dir(poly);
// poly('чай');
// poly('омлет');
// console.dir(mango);

/*
 * Округлятор 🤷‍♂️
 */

// const floatingPoint = 3.456789;
// const someInt = Math.round(floatingPoint); // 3
// const withDecimals = Number(floatingPoint.toFixed(2)); // 3.46

// const rounder = function (number, places) {
//     return Number(number.toFixed(places));
// };

// console.log(rounder(3.4567, 2));
// console.log(rounder(3.4567, 3));
// console.log(rounder(5.1234, 2));
// console.log(rounder(3.4567, 3));

const rounder = function (places) {
    return function (number) {
        return Number(number.toFixed(places));
    };
};

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.4567));
// console.log(rounder2(5.4512312312367));
// console.log(rounder3(3.4567));
// console.log(rounder2(5.1234));
// console.log(rounder3(3.4567));
// console.log(rounder3(10.67667));

/*
 * Приватные данные и функции - скрытие реализации, интерфейс
 */

const salaryManagerFactory = function (employeeName, baseSalary = 0) {
    let salary = baseSalary;

    return {
        raise(amount) {
            if (amount > 1000) {
                return 'Ты офигел?';
            }

            salary += amount;
        },
        lower(amount) {
            salary -= amount;
        },
        current() {
            return `Текущая зарпалата ${employeeName} - ${salary}`;
        },
    };
};

const salaryManager = salaryManagerFactory('Mango', 5000);

console.log(salaryManager.current());

console.log(salaryManager.raise(10000000));

console.log(salaryManager.current());

// const myLibFactory = function () {
//     let value = 0;

//     const add = function (num) {
//         value += num;
//     };

//     return {
//         add: add,
//         getValue() {
//             return value;
//         },
//     };
// };

// const myLib = myLibFactory();

// console.dir(myLib.getValue);

// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());