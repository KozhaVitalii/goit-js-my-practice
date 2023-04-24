// Цепочки вызовов - chaining

// Ниже потренеруемся рефакторить обычные функции в стрелочные:

const numbers = [1, 5, 2, 4, 4];
// const greaterThenTwo = numbers.filter(function (num) {
//     return num > 2;
// });

// Выполним рефакторинг в стрелочную функцию:

// const greaterThenTwo = numbers.filter(num => num > 2);

// Что сделали ? 1. вместо function указали просто num без скобок т.к.один параметр, далее => и выполнили возврат
// без return, т.к. у нас простая функция которая просто возвращает значениею Всё.

// console.log(greaterThenTwo);

// Следующий пример:

// До:
// const multByTwo = greaterThenTwo.map(function (num) {
//     return num * 2;
// });

// После:

// const multByTwo = greaterThenTwo.map(num => num * 2);

// console.log(multByTwo);

// Следующий пример:

// До:
// const sorted = multByTwo.sort(function (a, b) {
//     return a - b;
// });

// После:
// const sorted = multByTwo.sort((a, b) => {
//     return a - b;
// });

// console.log(sorted);


// Выполним рефакторинг на примере цепочки вызовов(chaining)

// До:
// const res = numbers
//     .filter(function (num) {
//         return num > 2;
//     })
//     .map(function (num) {
//         return num * 2;
        
//     })
//     .sort(function (a, b) {
//         return a - b;
//     })

// После:

// const res = numbers
//     .filter(num => num > 2)
//     .map(num => num * 2)
//     .sort((a, b) => a - b);

// console.log(res);


// Разберем пример с объектом:

// const players = [
//     { id: 'id-1', tag: 'Mango', isOnline: true, rank: 800 },
//     { id: 'id-2', tag: 'Poly', isOnline: false, rank: 600 },
//     { id: 'id-3', tag: 'Ajax', isOnline: true, rank: 100 },
//     { id: 'id-4', tag: 'Kiwi', isOnline: true, rank: 400 },
// ];

// До:
// const onlineAndSorted = players
//     .filter(function (player) {
//         return player.isOnline;
//     })
//     .sort(function (prevPlayer, nextPlayer) {
//         return prevPlayer.rank - nextPlayer.rank;
//     });

// После:

// const onlineAndSorted = players
//     .filter(player => player.isOnline)
//     .sort((prevPlayer, nextPlayer) => prevPlayer.rank - nextPlayer.rank);

// console.log(onlineAndSorted);


// Ещё один пример с объектами:

const players = [
    { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: true },
    { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: false },
    { id: 'player-3', name: 'Ajax', timePlayed: 230, points: 48, online: true },
    { id: 'player-4', name: 'Kiwi', timePlayed: 150, points: 71, online: true },
    { id: 'player-4', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

// Увеличение кол-ва поинтов каждого игрока

// До:

// const upatedPlayers = players.map(function (player) {
//     return {
//         ...player,
//         points: player.points + player.points * 0.1,
//     };
// });

// После:

// const upatedPlayers = players.map(player => ({
//         ...player,
//         points: player.points + player.points * 0.1,
//     }));


// console.log(upatedPlayers);
// console.table(upatedPlayers);

// Ещё один пример:
// Увеличение кол-во часов игрока по id

const playerIdToUpdate = 'player-3';

// const updatedPlayers = players.map(function (player) {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }
//     return player;
// });

// Варианты рефакторинга от простого до наиболее более продвинутого:

// v1
// const updatedPlayers = players.map(player => {
//     if (player.id === playerIdToUpdate) {
//         return {
//             ...player,
//             timePlayed: player.timePlayed + 50,
//         };
//     }
//     return player;
// });

// v2 через тернарник:
// const updatedPlayers = players.map(player => {
//     return player.id === playerIdToUpdate
//         ? {...player, timePlayed: player.timePlayed + 50}
//         : player;
// });


// v3. Т.к. у нас из тела функции просто возвращается что-то простое, то можем через неявый возврат вернуть 
// значение

const updatedPlayers = players.map(player =>
    player.id === playerIdToUpdate
        ? {...player, timePlayed: player.timePlayed + 50}
        : player);


console.log(updatedPlayers);
console.table(updatedPlayers);