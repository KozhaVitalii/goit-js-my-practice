/*
 * Работа с коллекцией (массивом объектов)
 */

// Массив объектов, это тот тип данных (а точнее тип значений), с которым мы будем работать чаще всего.
// Во фронт энде практически все это массив объектов. Поэтому нам важно уметь работать с массивом объектов.
const friends = [
  { name: 'Mango', online: false },
  { name: 'Kiwi', online: true },
  { name: 'Poly', online: false },
  { name: 'Ajax', online: false },
];

// console.table(friends);

// Переберем массив объектов, где на каждой итерации мы получим доступ к кажлму объекту в массиве:
// for (const friend of friends) {
  // console.log(friend);
// На каждой итерации можем получить значение каждого свойства:
  // console.log(friend.name);
  // console.log(friend.online);
// Что если мы при переборе захотим добавить доп свойство:
//   friend.newprop = 555;
// }

// На выходе мы получим новый массив(т.к.при работе с сложными типами данных мы работаем с сылками на объект
// а не с оригинальным значением) Поэтому при добавлении нового свойства, у нас создатся новое свойство в копии
// массива, а не в его оригинале. 
// console.table(friends);

/*
 * Ищем друга по имени
 */
// Необходимо имея функцию перебрать массив поискать друга и вывести строку нашел или не нашел: 
// const findFriendByName = function (allFriends, friendName) {
//   for (const friend of allFriends) {
//     // console.log(friend);
//     // console.log(friend.name);
// // !!!includes работает только с коллекцией примитивов(число, строка).Для работы с сложными типами данных 
// // не приминим!!!
//     if (friend.name === friendName) {
//       return 'НАШЛИ!!!';
//     }
//   }

//   return 'НЕ НАШЛИ :(';
// };

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

/*
 * Получаем имена всех друзей
 */

// const getAllNames = function (allFriends) {
// Создаем переменную в которую запишем массив имён:
//   const names = [];

//   for (const friend of allFriends) {
//     console.log(friend.name);

//     names.push(friend.name);
//   }

//   return names;
// };

// console.log(getAllNames(friends));

/*
 * Получаем имена только друзей которые онлайн
 */
const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend);
    console.log(friend.online);

    if (friend.online) {
      onlineFriends.push(friend);
    }
  }

  return onlineFriends;
};

console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of allFriends) {
    console.log(friend.online);

    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

// создать 2 массива онлайн и офлайн?
// если тру - в первый, если нет - во второй

const getFriendsByStatus = function (allFriends) {
  const friendsByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of allFriends) {
    if (friend.online) {
      friendsByStatus.online.push(friend);
      continue;
    }

    friendsByStatus.offline.push(friend);

    // Вызывать методы по тернарнику это очень плохая идея:
    // const key = friend.online ? 'online' : 'offline';
    // friendsByStatus[key].push(friend);
  }

  return friendsByStatus;
};

console.log(getFriendsByStatus(friends));
