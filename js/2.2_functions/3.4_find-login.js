// Напиши функцию findLogin(allLogins, login) для поиска логина.
// - если логина нет, вывести сообщение "Пользователь (логин) не найден"
// - если логина нашли, вывести сообщение "Пользователь (логин) найден"

// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3n4n'];
// const loginToFind = 'aj4xth3n4n';

// Ранее мы уже решали эту задачу несколькими вариантами, в т.ч. через includes & тернарный оператор
// const message = logins.includes(loginToFind)
//   ? `Пользователь ${loginToFind} найден`
//   : `Пользователь ${loginToFind} не найден`;
// console.log(message);

// Сначала распишем логику обращения функции к переменным, которые объявлены вне функции:
// const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3n4n'];

// const findLogin = function (allLogins, loginToFind) {
// При таком обращении к переменной (как ниже в логе) мы рассчитываем, что где - то в нашем файле выше в коде уже
// есть необходимая нам переменная. А что если необходимый нам массив, находится в каком-то другом файле?
// Что произойдет в таком случае? Наша функция сломается. Возникнет ошибка - такая переменная не объявлена.

// console.log(logins); - крайне редко наш массив будет в том же файле что и функция,
//     на такой вариант не стоит рассчитывать

// На практике очень и очень часто данные и функции лежат в разных файлах.Т.е.там где эта функция вызывается,
// данные будут, а в том файле где эта функция будет написана, в нём данных не будет.Наша задача не надеяться
// на магическую переменную, которая будет объявлена в теле самой функции.Всё что функция использует, она должна
// получить извне как аргумент.Поэтому в нашем примере при написании функции function (allLogins, .....), в
// качестве параметра мы указываем независимый параметр allLogins и при вызове функции, мы передаем в этот
// параметр наши значения из массива logins.Т.е.другими словами в наш параметр allLogins подставятся значения
// массива logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3n4n']; Далее мы уже работаем с парметром.
// Функция самостоятельная и если поменяется название внешней переменной, наша функция продолжит работать

// Ещё с такой стороны распишу: мы объявляем function (allLogins, loginToFind), с двумя параметрами где
//     allLogins, - это наш массив
//     loginToFind - это наш критерий для сравнения
// а, это вызов функции console.log(findLogin(logins, 'avocod3r')); - в котором мы передаем аргументы, для
// подстановки в праметры, где параметр allLogins = аргументу logins (это ссылка на массив, в том же либо
// другом файле), а второй параметр loginToFind = аргументу 'avocod3r' который мы указываем чтобы сравнить с
// массивом и сказать есть совпадение или нет. Второй праметр мы записали литералом (ручками), но это опять же
// может быть ссылка на внешнюю переменную, к примеру на поле фформе, куда пользователь вводит свой логин.   
// В конспекте было указано, что при вызове findLogin(logins, 'avocod3r') будет соблюдаться та
// последовательность, которую мы указали при объявлении function (allLogins, loginToFind).
// Соответсвенно, как параметр allLogins понимает, что необходимо подставить значение из массива logins ?
// Да так, что в самой функции в() согласно правилу первым делом записывается параметр, поэтому
// при объявлении функции наш параметр указан как allLogins, а при вызове функции на место нашего параметра,
// мы указываем ссылку на переменную logins, которая может находиться где - то в другом файле.Связка переменной
// и функции осуществляется через название самой функции.Т.е.сначала мы объявляем "const findLogin (1,2)",
// а при вызове указываем findLogin(1,2), где один это параметр, т.е. переменная(массив), а 2 это второй параметр
// (критерий поиска)

//     console.log(allLogins);

// }
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'poly1scute'));
// console.log(findLogin(logins, 'jam4st'));

// Ок, теперь перепишу решение, без комментария, чтобы легче было читать код.
// Решим задачку тремя способами, через 'for', через 'for of', а затем через "includes и тернарный оператор"

const logins = ['m4ngoDoge', 'kiwidab3st', 'poly1scute', 'aj4xth3n4n'];

// Первый вариант через for:
// const findLogin = function (allLogins, loginToFind) {
// //   console.log(allLogins); //- массив
// //   console.log(loginToFind); // - аргумент
//   // Пока результат undefined
//   let message = `Пользователь ${loginToFind} не найден`;

//   for (let i = 0; i <= logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login :', login);
//     console.log(`Login : ${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден`;
//       break;
//     }
//   }
//   console.log(message);
// };
// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'poly1scute'));
// console.log(findLogin(logins, 'jam4st'));

// Второй вариант через 'for of':
// const findLogin = function (allLogins, loginToFind) {
//   let message = `Пользователь ${loginToFind} не найден`;

//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       message = `Пользователь ${loginToFind} найден`;
//       break;
//     }
//   }
//   return message;
// };

// немного упростим:
// const findLogin = function (allLogins, loginToFind) {
//   for (const login of allLogins) {
//     if (login === loginToFind) {
//       return `Пользователь ${loginToFind} найден`;
//           }
//   }
//   return `Пользователь ${loginToFind} не найден`;
// };

// console.log(findLogin(logins, 'avocod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'poly1scute'));
// console.log(findLogin(logins, 'jam4st'));

// Третий вариант через includes и тернанрный оператор:
// const findLogin = function (allLogins, loginToFind) {
//   const message1 = allLogins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден`
//     : `Пользователь ${loginToFind} не найден`;
//     return message1; 
// };

// а теперь упростим и запишим в одно большое выражение. Самый крутой вариант!!! :
const findLogin1 = function (allLogins, loginToFind) {
  return allLogins.includes(loginToFind)
    ? `Пользователь ${loginToFind} найден`
    : `Пользователь ${loginToFind} не найден`;
};
console.log(findLogin1(logins, 'avocod3r'));
console.log(findLogin1(logins, 'kiwidab3st'));
console.log(findLogin1(logins, 'poly1scute'));
console.log(findLogin1(logins, 'jam4st'));