/*
 * Объекты (делаем плейлист музыки: имя, рейтинг, треки, кол-во треков)
 * - Литерал объекта
 * - Свойства, ключи (имя) и значения
 * - Как отличить объект от области видимости
 */

// Литерал объекта записывается через фигурную скобку {} (Литерал массива [], а литерал объекта {}):
// Объект это как словарь у которого есть термин и свойства. У объекта есть ключ (или термин, тип данных
// всегда строка) и после ":" идёт определение (или свойство). У объекта может быть много свойст, которые
// при перечислении разделяются ",". К примеру может выглядеть так: 
// const playlist = {
  //   name: [1, 2, 3], - у свойства может быть массив значений 
  //   b: 5,
  //   c: 10
  // }; 
// В объекте имя ключа уникально и если при перечислении мы указали два одинаковых ключа, к примеру "с",
// то запишиться только последнее (ниже в коде) свойство (значение) для этого ключа.
  
  
// const playlist = {
//   name: 'Мой супер плейлист',
//   rating: 5,
//   tracks: ['трек-1', 'трек-2', 'трек-3'],
//   trackCount: 3,
// };

// По сути мы описываем свойства для одной сущноси. Получается некий словарик для сущностей(объектов)
// Мы используем массивы, чтобы хранить коллекцию чего - то, мы используем объекты, чтобы группировать
// характеристики одной сущности.

// console.log(playlist);

// Как отличить объект от области видимости ? К примеру, у нас где - то в коде стоит { } в котором много когда.
// К примеру это может быть тело for{} или if{}
// Три признака характеризующие объект:

// 1. const x = {} т.е. литерал объекта всегда стоит справа от "="

// 2. При передачи функции console.log({}); - это не область видимости, потому что я передаю аргумент, для которого
// есть какой-то параметр, т.е. происходит присвоение. Поэтому это справа от равно.
// На примере:

// const fn = function (myObject) {
//   // myObject = { a: 1, b: 2 }
//   console.log(myObject);
// };

// fn({ a: 1, b: 2 });

// 3. Когда мы что-то возвращаем из функции. Возврат (ретерн) это то же самое присвоение
// const rtfm = function () {
//   return { a: 5 };
// };

// console.log(rtfm());

// Объект даже может не иметь названия и передаваться без него, так же как и массив или строка или число:
// fn(5, {}, [], 'qwr', true)

/*
 * Доступ к свойству
 * - obj.key
 * - obj['key']
 * - Отсутствующие свойства
 */

const playlist = {
  name: 'Мой супер плейлист',
  rating: 5,
  tracks: ['трек-1', 'трек-2', 'трек-3'],
  trackCount: 3,
};

// Два способа обращения к свойству объекта:
// 1. Через "." к переменной (в которой хранится объект) и этот способ используется в 99,9% случаев:
// playlist.qwe = 5;
// playlist.rating = 10;

// Ключ свойства - всегда строка!!!
// console.log(playlist);

// console.log(playlist);
// console.log(playlist.tracks);
// console.log(playlist.name);
// console.log(playlist.trackCount);

// Бывают такие случаи, когда имя (значение) свойства (ключа) хранится в переменной
// При обращении к несуществующему свойству объекта, не будет сообщения об ошибки, всегда будет возвращаться
// значение undefined
// 2. Второй способ через[], по аналогии с обращением к элементам массива, но в[] мы записываем ключ как строку.
 
// const propertyName = 'tracks';

// Пример, обращения к свойству объекта с использованием 1 и 2 способа, дают одинаковый результат.
// console.log(playlist.rating);
// console.log(playlist['rating']);

// console.log(playlist.propertyName); - в данном случае результат будет undefined, т.к. такая запись буквально
// ищет свойство объекта "propertyName"
// console.log(playlist[propertyName]); - это корректный способ. Пошагово это так:
// 1. Сначал находит переменную[propertyName] >> 2. Далее находит значение этой переменной >> 3. Подставляет
// значение переменной 'tracks' в выражение >> 4. Далее обращается к свойствам объекта playlist, а точнее к
// ключам, находит его и возвращает его значения: tracks: ['трек-1', 'трек-2', 'трек-3'],

// В объекты после их создания можно добавлять элементы(т.е.свойства).Как в массив можно добавить новое значение
// по индексу или просто push сделать. В объект добавляем через "." вот так:  playlist.singer
// К примеру:
// playlist.singer = 'Elton Djon',
// Если же, такое свойство уже есть и мы добавляем новое значение, то новое значение будет перезаписано в свойство
// т.е. через "." можем добавлять новые свойства объекту либо переопределять значения для уже существующих свойств 
// console.log(playlist);

/*
 * Короткая запись свойств
 */
// Бывают случаи когда нам необходимо создать объект в которой ключ динамический
 
const username = 'Mango';
const email = 'mango@mail.com';

// где username - это имя ключа, а 'Mango' это переменная, значение, которого будет побдставлено

// const signupData = {
//   username: username, - 1. username: ключ  2. username, - свойство у которого значение 'Mango';
//   email: email, - 1. email: ключ  2. email, - свойство у которого значение  'mango@mail.com';
// };
// На выходе будет вот так:
// const signupData = {
//   username: 'Mango', 
//   email: 'mango@mail.com', 
// };

// Можем сократить запись.Если имя(ключ) свойства будет называться так же, как имя переменной в которой лежит
// значение, то можем записать вот так, будет то же самое: 
const signupData = {
  username,
  email,
};
// !!!Внимание!!! Это применимо, только в тех случаях когда имя переменной совпадает с именем ключа объекта, только
// в таком случае мы можем указать только имя переменной!!!
// Как это работает ? Имя этой переменноё - "username" используется как значение для ключа(т.е.как имя свойства),
// а значение этой переменной используется как значение этого свойства.
console.log(signupData);

/*
 * Вычисляемые свойства
 */
// Не часто используемый юзкейс, но все же встречается. Наиболее часто юзается в формах, когда
// на форме есть inputs(поля), куда пользователь вводит значение. Это поле называется какой - то переменной
// и в это поле вводится значение, которое так же имеет переменную (вспоминаем HTML и CSS)

//  <input name="color" value="tomato" >

const inputName = 'color';
const inputValue = 'tomato';

const colorPickerData = {
  [inputName]: inputValue,
};
// т.е. для того чтобы имя переменной стало ключом, необходимо взять в []
// Пошагово это выражение выполняется так: 1. В имя свойства подставляем переменную, через квадратные
// скобки[inputName] >> 2. Далее на место этой переменной подставляется её название 'color'; (т.е. происходит)
// вычисление ключа по имени переменной) Это и называется вычисляемое свойство. >> 3. Далее
// по её названию подтягивается значение свойства inputValue, а именно 'tomato';

console.log(colorPickerData);

/*
 * Ссылочный тип {} === {}
 */
// Работает по налогии с массивами.Подход тот же, т.е.изначально объекты не равны друг другу, даже их
// содержимое один в один совпадает.Это потому, что каждый объект имеет свою ячейку в памяти.Идентичными
// они могут быть в том случае, если ссылаются на одну и ту же ячейку в памяти (к примеру на исходный объект)
// Для того чтобы обновить в памяти логику, посмотри на эту тему детальный комментарий в модуле массивы.

// console.log({ a: 1 } === { a: 1 });
// console.log([] === []);

// const a = { x: 1, y: 2 };
// const b = a;

// console.log(b === a);

// a.hello = 100;
// b.hello = 150;

// console.log(a);
// console.log(b);

/*
 * Массивы и функции это объекты
 */
// Объект это базовый тип всего на свете в JavaScript. Это самы важный тип данных в JS.
// А массив, функция и т.д. это лишь частный случай объекта.

// Массив:

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// Функция:

// const fn = function () {
//   console.log('hello');
// };

// fn.hello = ';)';

// console.dir(fn.hello);

// console.dir; - выводит в оъектном виде нашу сущность(в данном случае массив или функция), где можно посмотреть
// из чего она состоит и если мы через "." добавим новое свойство, то увидем что она появится в массиве или в функции

const a = [1, 2, 3];

a.push(4);
console.log(a);