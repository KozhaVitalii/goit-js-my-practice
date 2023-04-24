/*
 * Array.prototype.reduce()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает что угодно 🤯
 * - Заменяет всё на свете, но использовать нужно с умом
 */

// reduce это швецарский нож в работе с коллекциями(объектами)
// reduce для того чтобы взять много а возвратить что-то оно

// В функции reduce есть три параметра "acc" - аккумулятор, который подсчитывает итоги(тотал, который 
// накапливает предыдущую сумму (может быть изачально 0, если не задать исходное значение) и
// number - элемент коллекции который суммируется в аккумулятор при каждой иттерации, и последний параметра
// это как правило "0" - это исходное значение аккумулятора(первого параметра), т.е.отправная точка. Как
// total = 0. Но может быть и так, что начальным условием может быть и массив и объект и все что хочешь.
 
// const numbers = [5, 10, 15, 20, 25];

// const total = numbers.reduce((acc, number) => acc + number, 0);
// console.log(total);

// accumulator = 0 -> number = 5 -> return 0 + 5
// accumulator = 5 -> number = 10 -> return 5 + 10
// accumulator = 15 -> number = 15 -> return 15 + 15
// accumulator = 30 -> number = 20 -> return 30 + 20
// accumulator = 50 -> number = 25 -> return 50 + 25

/*
 * Считаем общую зарплату
 */

// const salary = {
//   mango: 100,
//   poly: 50,
//   ajax: 150,
// };

// 1. Через Object.values вытягиваем массив значений(не ключ, вспоминаем Object.keys - передаст нам массив из
// [mango, poly, ajax]), a Object.values передаст массив [100, 50, 150], с которым и будем работать
// 2. На результате(т.е.на массиве) работы метода Object.values, вызываем следующий метод reduce с параметрами
// аккумулятора и элементами массива (можно называть их как угодно), которые необходимо суммировать:

// const totalSalary = Object.values(salary).reduce(
//   (total, value) => total + value,
//   0,
// );
// console.log(totalSalary);

/*
 * Считаем общее количество часов
 */

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, online: false },
  { id: 'player-5', name: 'Chelsey', timePlayed: 80, online: true },
];

// const totalTimePlayed = players.reduce(
//   (totalTime, player) => totalTime + player.timePlayed,
//   0,
// );

// Можно ли деструктурировать свойство timePlayed? Обычно деструктуризируют, если необходимо дест. два 
// и более свойств. Попробуем:
const totalTimePlayed = players.reduce(
  (totalTime, {timePlayed}) => totalTime + timePlayed,
  0,
);

// Вау, можно)

console.log(totalTimePlayed);

/*
 * Считаем общую сумму товаров корзины
 */
const cart = [
  { label: 'Apples', price: 100, quantity: 2 },
  { label: 'Bananas', price: 120, quantity: 3 },
  { label: 'Lemons', price: 70, quantity: 4 },
];

// В этом примере мы уже деструктуризировали свойства price и quantity, до деструктуризации было бы cart.price и
// cart.quantity, т.е. вот так:
// const totalAmount = cart.reduce( (total, cart) => total + cart.price * cart.quantity, 0);

// const totalAmount = cart.reduce(
//   (total, { price, quantity }) => total + price * quantity,
//   0,
// );

// console.log(totalAmount);

/*
 * Собираем все теги из твитов
 */
const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

// В решении ниже, наш аккумулятор начинается с пустого массива[], а не с "0", это значит, что мы это начальное
// значение аккумулятора можем изменить, т.к.это просто ссылка.

// const allTags = tweets.reduce((acc, tweet) => {
//   acc.push(tweet.tags);
//   return acc;
// }, []);

// но чтобы разгладить этот массив, распылим все тегги в один общий массив:
// const allTags = tweets.reduce((acc, tweet) => {
//   acc.push(...tweet.tags);
//   return acc;
// }, []);

// Круче всего(это когда на твой код не будут ругаться линтеры) записать так, что ты при каждой операции
// не будешь менять свой первый параметр reduce, как в предыдущем примере, где при каждой иттерации
// наш первый параметр acc менлся через выражение acc.push(...tweet.tags).Правильнее это записать, таким
// образом, что сначала мы распыляем исходный аккумулятор (массив) "...acc", а при каждой последующей иттерации 
// распыляем в него "...tweet.tags"

const allTags = tweets.reduce((acc, tweet) => [...acc, ...tweet.tags], []);
console.log(allTags);

// По-шагово для каждой иттерации это будет выглядеть так:
// Итерация 1: acc = [], tweet.tags = ['js', 'nodejs'] return [...[], ...['js', 'nodejs']]
// Итерация 2: acc = ['js', 'nodejs'] tweet.tags ['html', 'css']
// return  [...['js', 'nodejs'], ...['html', 'css']]
//  ['js', 'nodejs', 'html', 'css']
// и так далее до конца исходного массива. [...acc, ...tweet.tags] - это как slice и concat вместе, только в
// современном синтаксисе

/*
 * Ведём статистику тегов
 */

// Теперь нша задачка взять массив из предыдущей задачки и объденить его в новый объект, котором будет
// подсчитано сколько раз тегнули тот или иной элемент.В данном случае, исходным параметром для нашего
// аккумулятора уже будет не массив, а объект { }, т.к.на выходе мы получим ключ и значение каждого элемента
// объекта, такой вариант:
// {
//   node.js: 3,
//   js: 4,
//   html: 2,
//   react: 7
// }

// Условие такое:
// если свойство с ключом tag есть. увеличить его значение на 1
// если свойствоства нет с таким ключом что в tag, сделать и записать 1
// Выражение acc[tag] это обращение к свойству

// Продублирую массив для наглядности:
// const tweets = [
//   { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//   { id: '001', likes: 2, tags: ['html', 'css'] },
//   { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//   { id: '003', likes: 8, tags: ['css', 'react'] },
//   { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tagsStats = allTags.reduce((acc, tag) => {
//   console.log(acc);

// Логика решения:
// В условии if (стр.173-177) на первой иттерации проверяется, есть ли в исходном аккумуляторе(а это пустой объект {})
// элемент массива(это первый объект в массиве см.стр.161 содержит теги['js', 'nodejs']).На первой итерации if
// скажет что нет, поэтому не true, а false, для false сработает возврат из строки 180, просто добавятся новые
// записи(элементы) в объект acc(аккумулятор) и это будет исходный объект для следущей иттерации.Если на
// последующих иттерациях такой тег обнаружется в исходном объекте, то стр178 добавит ещё одно значение для тег,
// т.е.будет 1 + 1 = 2 и так с каждой итрацией.Если встретиться новый тег которого ещё нет в объекте, то строка
// 185 кода добавит новый тег в объект и так до конца перебора исходного объекта.

// if (acc[tag]) {
//     acc[tag] += 1;

//     return acc;
//   }

//   acc[tag] = 1;

//   return acc;
// }, {});

// Перепишем имутабельно, так чтобы линтеры не кричали при проверке кода:
// имутабельно - значит на каждой иттерации необходимо создать новый объект аккумулятора
  
// const tagsStats = allTags.reduce((acc, tag) => {
  
//   if (acc[tag]) {
//     return {
//       ...acc,
//       [tag]: acc.tag + 1,
//     };
//   }
//   return {
//     ...acc,
//     [tag]: 1,
//   };
// }, {});


// А теперь возьмем и максимально оптимизируем обычным тернарнеком:

const tagsStats = allTags.reduce((acc, tag) => {
  return {
    ...acc,
    [tag]: acc[tag] ? acc[tag] + 1 : 1,
  };
}, {});
  
console.log(tagsStats);

