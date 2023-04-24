/*
 * Array.prototype.map()
 * - Поэлементо перебирает оригинальный массив и в соответствующую позицию каждого элемента (по индексу) 
 * ставит новое(обновленное) значение
 * - Не изменяет оригинальный массив т.е. не является деструктивным
 * - В отличи от forEach возвращает новый массив такой же длины
 * - Т.е. новый массив будет той же длины (того же кол-ва элементов), но можно менять, преобразовывать, заменять элементы 
* 99% данных при работе с перебирающим методами будут объекты 
*/

// const numbers = [5, 10, 15, 20, 25];

// const doubledNums = numbers.map(number => {
//   return number * 3;
// });

// или сокращенно:

// const doubledNums = numbers.map(number => number * 3);

// console.log('numbers', numbers);
// console.log('doubledNums', doubledNums);


// Map позволяет получить из массива список каких - то свойств из объекта.Т.е.если нам не нужен весь список
// свойст объекта, а только к примеру имена, то с помощью мап мы можем получить этот список:

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];
// console.table(players);

/*
 * Получаем массив имён всех игроков
 */

// const playerNames = players.map(player => player.name);
// console.log('playerNames', playerNames);

// const playerIds = players.map(player => player.id);
// console.log('playerIds', playerIds);

// Если хотим несколько свойств вернуть, то:

// const res = players.map(player => {
//   return {
//     name: player.name,
//     online: player.online
//   }
// });
  
// Сократим запись, в два действия:
// 1. Деструктуризируем объект player, вытащив из него только необходимые свойства ({ name, online })
// 2. Запишем через короткие свойства объектов, т.к.название свойств объекта совпадает с названием переменных,
//   которые хотим получить в новом объекте name = name, online = online.
// 3. Запишем через неявный возврат сократив запись убрав return, для этого возвразщаемый объект берем в (),
// это для того чтобы функция не воспринимала {} как начало тела функции
// В итоге:

// const res = players.map(({ name, online }) => ({ name, online }));

// console.log('res', res);


// Что ещё можно сделать с помощью map?
/*
 * Увеличиваем кол-во поинтов каждого игрока на 10%
 */

// Запись "...player" распыляет свойства в новый объект, а далее указываю те одноименные свойства, которые
// хотел бы изменить points: player.points и все это выражение возвращаем через return, но так как само
// выражение не содержит условий и только возвращает новый объект, то можем записать сократив return:

// Распыляем объкт "...player" для того чтобы: а) вернуть весь объект в новую переменную,
// б) чтобы достучаться до свойства, которое хотим изменить в объекте, иначе как нам достучаься до свойства 
// которое хотим изменить ?
// "...player" - это поверхностное распыление, т.е.на одну глубину.Если в объект вложен ещё один объект, то
// "...player" не достучиться до второй вложенности. "...player" просто копирует массив объектов из оригинала. 

// const upatedPlayers = players.map(player => ({
//   ...player,
//   points: player.points * 1.1,
// }));

// console.table(upatedPlayers);
// console.log(upatedPlayers);

/*
 * Увеличиваем кол-во часов игрока по id
 */

const playerIdToUpdate = 'player-3';

const updatedPlayers = players.map(player => {
  if (playerIdToUpdate === player.id) {
    return {
      ...player,
      timePlayed: player.timePlayed + 100,
    };
  }

  return player;
});

// Решение через тернарник в условии:

// const updatedPlayers = players.map(player =>
//   playerIdToUpdate === player.id
//     ? { ...player, timePlayed: player.timePlayed + 100 }
//     : player,
// );
// console.table(updatedPlayers);


// Итого что умее делать map ? Он умеет вытянуть из объекта одинаковые значения одного и того же свойства из
// коллекции.К примеру список всех имен, хобби и т.д.Он умеет не изменно для старого обновить целый массив
// объектов, т.е.сделать новый массив объектов, в котором будут объекты с одним или несколькими(всеми)
// обновленными свойстами(значениями) объекта.Или умеет вернуть вернуть массив с одни обновленным объектом
// (как в нашем примере - пользователем)

// Обновляет все либо несколько либо один объект, а также для выборки или агрегации, когда из большой коллекции
// необходимо взять одно или несколько свойств и обновить\изменить их значение. 