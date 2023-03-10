// В браузере есть уже ряд встроенных методов, такими в т.ч.являются window.confirm() and window.prompt().
// Эти и другие встроенные методы мы можим использовать у себя в коде.Для того чтобы вызвать встроенный метод
// не обязательно прописывать "window.", а достаточно сразу написать confirm() или prompt().Обязательно указываем
// в конце метода() иначе не один метод не будет применяться.

// Метод confirm() выводит в браузер диалоговое окно с текстом, и предлагает пользователю выбрать: принять или отменить,
// в зависимости от того что выберет пользователь, значение true или false будет записано в переменную и залогируется,
// можно проверить на следующем коде:

// const shouldRenew = confirm('Хотите продлить подписку?');
// console.log(shouldRenew);

// Метод prompt используется, когда необходимо получить от пользователя самый минимальный, базоовый ввод
// какого - либо значения.При этом если человек нажмет ОК, то консоль выдаст введёное значение.
// Даже если ничего не введёт и нажмет Ок, выдаст пустую строку.Если пользователь(не зависимо от того
// ввёл данные в окно или нет), нажмет ОТМЕНА, консоль выведет значение null - т.е. ничто.

// const shouldInputText = prompt('Введите Ваш возраст (полное количество лет):');
// console.log(shouldInputText);

// Такое диалоговое окно не зависимо от типа введенного значения, будет в консоль возвращать тип значения "строка".
// Это важно помнить, т.к.в модальных окнах при разработке сайтов, все inputs по умолчанию преобразуют введённые
// даные в тип "строка".

// const shouldInputText = prompt(15);
// console.log(shouldInputText);
// console.log(typeof shouldInputText);

// Поэтому для того чтобы получить в консоле нужный тип значения, необходимо дополнительно преобразовывать данные,
//     к примеру хотим получить тип "число", в таком случае метод объявления переменной const нам уже не подходит:

let shouldInputText = prompt('Введите Ваш возраст (полное количество лет):');
shouldInputText = Number(shouldInputText);
console.log(shouldInputText);
console.log(typeof shouldInputText);
