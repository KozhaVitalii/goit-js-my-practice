/*
 * Методы объекта и this при обращении к свойствам в методах
 *
 * http://fecore.net.ua/books/m5ph3r-javascript/module-03/images/context.jpg
 *
 * - changeName
 * - addTrack
 * - updateRating
 * - getTrackCount
 */

// Если у сущности есть характеристики(к примеру как у массива есть элементы, также и методы(push, slice, splice
// и т.д.), которые позволяют работать с этими элементами), то у сущности также есть эти методы, которые позволяют
// работать со свойствами этого объекта.
// Допустим мы хотим сделать метод для объекта playlist.Для этого мы создаем свойство getName: в который вкладываем
// функцию function(). В итоге у объекта появляется новое свойство в котором лежит функция(разумеется с телом
// функции), которая позволяет что - то делать.В последствии при необходимости мы сможем обратиться к объекту и
// вызвать эту функцию: playlist.getName(); Это и называется метод объекта, эти методы предназначены для того,
//   чтобы работать со свойствами (характеристиками) объекта.Т.е.объект хранит в себе набор характеристик и
// набор методов для работы с этими характеристиками (с характеристиками в рамках объекта). Все что, мы вызываем
// через "." и ставим "()" называется метод.
// Для методов/функций литерал это - ();
// Для массивов литерал это - [];
// Для объектов литерал это - {};
// В современном синтаксисе для объявления метода объекта достаточно указать getAllNames(здесь параметры) {здесь тело
// функции} Ранее писали более развернуто так: getAllNames: function(здесь параметры) {здесь тело
// функции}. Т.е. ":" и "function" указывать не обязательно.
// !!!Методы объектов это самые обычные функции, поэтому к ним применяются все самые обычные правила для написания
// функции!!! Но с одним маленьким исключением:


// Сделаем несколько методов. Допустим один из методов это изменение имени changeName(), он должен изменять
// у объекта свойство "name:":


const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  // trackCount: 3, - свойство "кол-во треков" на самом объекте хранить не самое хорошее решение т.к. у нас
  // всегда есть метод позволяющий узнать длину строки, поэтому эта инфо избыточная в данном случае
  changeName(newName) {
    console.log('this внутри changeName: ', this);
    // !!!В методах объекта нельзя никогда использовать имя этого объекта(т.к.это не надёжный способ), т.к.внутри
    // каждой функции есть встроеное ключевое слово "this", оно всегда ссылается именно на тот объект внутри
    // которого эта функция(метод) была вызвана. Поэтому, если мы хотим изменить у объекта свойство "name", мы
    // указываем:

    this.name = newName;
  },
  // }; // удалить т.к. это промежуточный вариант для демонстрации результата работы первого метода
  // И после того как мы вызовем этот метод и укажим новое значение:
  // playlist.changeName('Новое имя'); // удалить т.к. это промежуточный вариант для демонстрации результата работы первого метода
  // Для объекта "playlist" у свойства "name" появится новое значение:
  // console.log(playlist); // удалить т.к. это промежуточный вариант для демонстрации результата работы первого метода

  // Добавим ещё один метод, который будет добавлять в объект новый трек:
  addTrack(track) {
    this.tracks.push(track);
    // this.trackCount = this.tracks.length  // такой вариант обновления счета не самый лучший т.к. у нас есть
    // и так метод позволяющий узнать длину строки. Поэтому такой код не оптимальный
  },

  // И ещё один метод
  updateRating(newRating) {
    this.rating = newRating;
  },

  // Добавим метод обновляющий свой-во кол-во треков в объекте (т.к. мы запушили новый трек а кол-во не 
  // изменилось) Это "this.tracks.length;" один из примеров вычисляемого свойства
  getTrackCount() {
    return this.tracks.length;
  },
};

console.log(playlist.getTrackCount());

playlist.changeName('Новое имя');

playlist.addTrack('новый трек 1');
console.log(playlist.getTrackCount());

playlist.addTrack('новый трек 2');
console.log(playlist.getTrackCount());

playlist.updateRating(4);

console.log(playlist);
