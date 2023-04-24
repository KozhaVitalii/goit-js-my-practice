/*
 * Array.prototype.find()
 * - Поэлементо перебирает оригинальный массив
 * - Возвращает первый элемент удовлетворяющий условию или undefined
 * - возвращает только один элемент в коллекции удовлетворяющий уловию поиска используется для поиска 
 * уникальных элементов в коллекции. После нахождения совпадения останавливается и далее поиск прерывается
 * Даже если в колекции будет множество элементов удовлетворяющих условию, find вернет только первый элемент
 * под капотом встроен break.
 * обычно используется по id (по уникальным свойствам) или по другому уникальному значению, не предназначен для поиска єлементов,
 * которые повторяются в коллекции
 */

const numbers = [5, 10, 15, 20, 25];

const number = numbers.find(number => number === 10);
// console.log(number);

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 280, points: 48, online: true },
];

/*
 * Ищем игрока по id
 */
const playerIdToFind = 'player-3';
const playerWithId = players.find(({ id }) => id === playerIdToFind);
// console.log(playerWithId);


// Напишем через функцию, которую можем вызывать когда нам понадобиться найти уникального игрока в коллекции:

// сначала напишем упрощенно с return:
// const finPlayerById = (allPlayer, playerId) => {
//   return allPlayer.find(({ id }) => id === playerId);
// };

// выполнм рефакторинг:
const finPlayerById = (allPlayer, playerId) => allPlayer.find(({ id }) => id === playerId);


console.log(finPlayerById(players, 'player-1'));
console.log(finPlayerById(players, 'player-4'));

/*
 * Ищем игрока по имени
 */
const playerNameToFind = 'Poly';
const playerWithName = players.find(player => player.name === playerNameToFind);
// console.log(playerWithName); 