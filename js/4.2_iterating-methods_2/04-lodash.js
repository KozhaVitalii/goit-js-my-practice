// https://lodash.com/docs/4.17.15 ссылка на документацию лодаш

// Вызов любого метода из библиотеки оуществляется через синтаксис "._"


// Этот метод проверяет пустой или не пустой объект:
/*
 * isEmpty()
 */



// console.log(_.isEmpty({}));
// console.log(_.isEmpty({ a: 1 }));


// Этот метод позволяет получить глубоко вложенное свойство:
/*
 * get()
 *
 * - user && user.location && obj.location.city
 * - user?.location?.city // современный синтаксис который не выдает ошибку, если в цепочке вызова нет того 
 * или иного объект. "?." - говорит, если нет, то не выполняй дальше и вернет undefined (как и get)
 */

const user = {
    name: 'mango',
    location: {
        city: 'Lviv',
    },
};

// console.log(_.get(user, 'location.city'));

// console.log(user.location.city);

// if (user && user.location && user.location.city) {
//     console.log(user.location.city);
// }

// console.log(user?.location?.city);


// Этот метод объеденяет два или несколько массивов и выводит массив с уникальными элементами, т.е.не повторет
// значение если к примеру и в одном и втором массиве есть значение "3":
/*
 * union()
 */

// console.log(_.union([1, 2, 3], [3, 4, 5]));


// Этот метод позволяет заполнить массив от стартового значения и до конечного значения. Шаг по умолчанию +1,
// если необходимо увеличить шаг, то задается параметром в конце, к примеру "2".Вот так: _.range(10, 51, 2).
// Один можно не указывать т.к. дефолтный шаг.

/*
 * range()
 */

// console.log(_.range(10, 51));

// Этот метод сортирует по заданному критерию либо по нескольким критериям:
/*
 * sortBy()
 */

// Эти метод суммирует по значению и по массиву объектов (точнее по одному из свойств объектов в массиве):
/*
 * sum() и sumBy()
 */

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
    { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
    { id: 'player-3', name: 'Aiwi', timePlayed: 230, online: true },
    { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
    { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// console.log(_.sumBy(players, player => player.timePlayed));

// Эти методы вбирают и сортируют уникальные значения или уникальные значения по свойству в объектах массива:
/*
 * uniq() и uniqBy()
 * sortedUniq() и sortedUniqBy()
 */


// Этот метод
/*
 * random()
 */

// Эти методы выбирают наименьшее или наибольшее значение в свойстве объектов в массиве:
/*
 * min() и max()
 * minBy() и maxBy()
 */

// console.log(_.minBy(players, player => player.timePlayed));

// Эти методы преобразуют текстовые выражения:
/*
 * camelCase(), capitalize(), kebabCase(), lowerCase(), upperCase()
 */

console.log(_.kebabCase(' a b c '));
