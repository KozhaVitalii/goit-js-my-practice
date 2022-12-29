// Массив - это список однотипных данных.На практике не бывает, так что в одном списке хранится и строка и
// число и буль. Только один тип данных (коллекция строк, объектов, чисел и т.д.).
// const friends = [] - массив всегда хранится в [] скобках.
// У масива есть ряд методов.Чтобі ознакомиться с методами массива, достаточно вывести в консоль
// пустой массив: console.log(friends) и развернуть стрелочку вниз раскрыв __proto. Так же можно увидеть
// длину массива и индекс. Массив начинается с индекса "0" и нумеруется каждый єлемент массива.

// Массивы можно выводить как обычно через console.log(friends); но гораздо более нагляднее выводить
// через console.table(friends)

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);

// Как посмотреть индекс последнего элемента в массиве?

// const lastIndex = friends.length - 1;
// console.log(lastIndex);

// Как обратиться к єлементу массива? Указываем название массива и в кв.скобках указываем
// индекс интересующего элемента
// console.log(friends[1]);

// Как что-то записать или перезаписать в массив?
// К примеру перезапишем значение 'Kiwi' на 'Roblex' и индекс 3 на "Hagi":

// friends[1] = 'Roblex';
// friends[3] = 'Hagi';
// console.table(friends);
// Сама переменная при этом не меняется, меняется только её элемент

// Передача по ссылке и по значению
// Примитивы и сложные типы значений:

// Примитивный тип данных (числа, сторки, null, undifined). Передача данных по значению:
// let a = 10;
// let b = a;
// console.log(a);
// console.log(b);

// a = 20;

// где в "b" скопировалось значение из "a".Если для "а" присвоить новое значение, к примеру 20,
// то для "b" значение 10 останится неизменнім (т.е. не будет модифицированным)

// console.log(a);
// console.log(b);

// Сложный тип данных (массив, объект, функция). Передача данных по ссылке:
// Под массив всегда создается отдельное место в памяти.После чего создается переменная, к примеру "а" и
// внутри этой переменной(ячейки памяти), хранится не сам массив, а указатель(ссылка) на место в памяти
// где лежит сам массив.
// Когда мы создаем новую переменную 'b' на основе 'a', мы по сути копируем для 'b' ссылку на массив.
// В итоге две разные переменные ссылаются на один и тот же массив.

// const a = [1, 2, 3, 4, 5];
// let b = a;
// console.log('a ', a);
// console.log('b ', b);

// Меняем значение элемента массива, для переменной "а":
// a[0] = 500;
// console.log('a ', a);
// console.log('b ', b);
// console.log(a === b);
// В итоге для переменной 'b' тоже поменялось значение, т.к. 'b' имеет ссылку на тот же массив, что и "а"
// Массивы сравниваются по месту в памяти, т.е. сравниваются только ссылки к памяти. Значения при этом не
// сравниваются.
// А это уже два разных массива, т.к. имеют две разные ячейки в памяти, хотя значения у массивов одинаковые:
// console.log([1, 2, 3] === [1, 2, 3]);

// Перебор и итерация массивов:

// - for - если нужен индекс или нужно изменить элемент массива
// Если нам необходимо изменить элементы массива, мы используем цикл for, и это работает на 100%
// Предназначено для того, чобы получить доступ к ячейке памяти масива и перебрав элементы в массиве, присвоить
// им новые значения 

// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// console.table(friends);
// const lastIndex = friends.length - 1;

// for (let i = 0; i <= lastIndex; i += 1) {
  //   console.log(friends[i]);
//   friends[i] += '-1';
  // где friends[i] - это обращение к каждому элементу массива при итерации в цикле for
// }
// или так:
// for (let i = 0; i < friends; i += 1) {
//   console.log(friends[i]);
// }
// console.table(friends);

// - for of - если индекс не нужен и в массиве ничего менять не нужно
// Цикл for of переберает итерируемые массивы

// Конструкция выглядит так: for (const variable of variables) { },
// где variable - это локальная переменная, элемент массива variables.Т.е. 
// один элемент в одиночном числе из списка.console
// К примеру: локальная переменная friend в переменной friends

const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

for (const friend of friends) {
    console.log(friend);
}
// console.table(friends);

// Отличается от цикла for своей компактностью и является декларативным, т.к.буквально указывает,
// что именно мы хотим перебрать в цикле.Его мы используем если индекс не нужен и в массиве 
// ничего менять не нужно.

