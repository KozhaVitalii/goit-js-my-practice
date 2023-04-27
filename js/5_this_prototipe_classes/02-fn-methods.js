/*
 * call и apply
 */

// На практике call и apply особо нигде не применяются, по сути часто об этом спрашивают на собеседовании, но
// а вообще эта тема как подготовка к более глобальной теме "Прототипное наследование", т.е.как на самом
// деле храняться методы у объектов.

// const showThis = function (a, b, arr) {
//     console.log(a, b, arr);
//     console.log('showThis -> this', this);
// };

// showThis();

// const objA = {
//     a: 5,
//     b: 10,
// };

// showThis.call(objA, 5, 1, [100, 200, 300]);
// showThis.apply(objA, [5, 1, [100, 200, 300]]);

// Как ранее упоминалось функция это объект.Если вывести в консоль функцию, к примеру "showThis", через
// console.dir(showThis) - то можно увидеть _proto, где у функции есть свои функции (как у любого объекта).

// Метод call(функция объекта, которая лежит на _proto) берет функцию на котором вы его вызвали и принудительно
// в этой же строке вызывает в контексте этого объекта, как в примере: showThis.call(objA).В этом случае
// функция будет вызвана в контексте объекта objA. Таким образом эту же функцию можно вызывать бесконечно кол-во
// раз в контексте совершенно разных объектов. Важно понимать что это не привязка функции к конкретному объекту
// навсегда, а только в той строке где она вызывается.

// Это вопросы собеседования, необходимо знать ответ на такой вопрос как: как рандомную функцию привязать к
// конкретному объекту.

// const objB = {
//     x: 788,
//     y: 25,
// };

// showThis.call(objB, 1, 1, 2);
// showThis.apply(objB, [1, 1, 2]);

// По аналогии работает встроенная функция apply, разница только в том, что все последующие аргументы в функции
// call передаются через запятую, а в функции apply передаются как массив т.е. оборачиваются в []


// showThis();


// Пример: прописываем одну функцию и вызываем её в контексте объектов hat и sweater:
const changeColor = function (color) {
    console.log('changeColor -> this', this);
    this.color = color;
};

const hat = {
    color: 'black',
};

// changeColor.call(hat, 'orange');
// console.log(hat);

const sweater = {
    color: 'green',
};

// changeColor.call(sweater, 'blue');
// console.log(sweater);

/*
 * bind 
 */

// Этот метод позволяет сделать копию функции с прявязанным контекстом. Этот метод в отличии от call и apply
// на практике очень часто юзается.

const changeHatColor = changeColor.bind(hat);
// Для 77 строки, метод bind возьмет оригинальную функцию changeColor из 52 - 55 строки, сделает из неё копию
// и навсегда привяжет контекст к объекту "hat". При этом оригинальная функция не изменяется. Но эта доп. 
// функция занимает доппамять.

const changeSweaterColor = changeColor.bind(sweater);
// здесь по аналогии с hat

// changeHatColor('yellow'); // а далее меняем цвет через функцию привязанную к контексту
// console.log(hat);

// changeSweaterColor('red');
// console.log(sweater);

/*
 * counter
 */

// В конце предыдущего файла мы разбирали пример в котором функция в итоге была без привязки к контексту,
// сейчас мы это пофиксим через метод bind, создав копию оригинальной функции и скорректируем параметр
// в115 и 116 строках добавив метод - counter.increment.bind(counter)

const counter = {
    value: 0,
    increment(value) {
        console.log('increment -> this', this);
        this.value += value;
    },
    decrement(value) {
        console.log('decrement -> this', this);
        this.value -= value;
    },
};

const updateCounter = function (value, operation) {
    operation(value);
};

// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);