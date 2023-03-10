// Делаем slug в URL из названия статьи(например на dev.to)
// Заголовок статьи состоит только из букв и пробелов

//     - нормализуем строку
//     - разбиваем по словам
//     - сшиваем в строку с разделителем

// Должно получиться: top-10-benefits-of-react-framework

const title = 'Top 10 benefits of React framework';
// Шаг 1. Приводим весь текст к нижнему регистру
const normalizedTitle = title.toLocaleLowerCase();
// console.log(normalizedTitle);
// Шаг 2. Разбиваем нормализированную строку в массив по пробелу
const words = normalizedTitle.split(' ');
// console.log(words);
// Шаг 3 Сшиваем в строку с разделителем с помощью join
// const slug = words.join('-');
// console.log(slug);
// либо олдскульно и не оптимально таким путём:
// let slug1 = '';
// for (const word of words) {
//         slug1 += word + '-';
// }
// slug1 = slug1.slice(0, slug1.length - 1);
// console.log(slug1);

// !!! А теперь запишим самый оптимальный способ используя чейнинг:
// Это когда для одной переменной используем несколько методов, чтобы получить финальное(если по
// условию достаточно), либо промежуточное значение(для последующего использования по коду).console
// В нашем примере, мы задачку решаем в одну строку, где через "." добавляем 3 метода, через которые
// на выходе мы получаем итоговое значение. Методы вызываются слева на право, т.е. метод join отрабатывает
// последним. Так же важно понимать, что каждый последующий метод ( наши методы .split(' ') и .join('-')
// вызываются не на title, а уже на результате работы метода .toLocaleLowerCase()
// // Это называется декларативный код. А результаты каждого метода - абстракции
// .join() - это метод массива, поэтому для его использования необходимо было предварительно создать массив, через: 
// .split() - этот метод из строки(примитивного значения) через заданный разделитель создает нам массив
// .toLocaleLowerCase() - этот метод нормализует(т.е.приравнивает к чему то единому) строку, что позволяет выполнить шаг 1 
// Круть ? :) 

const slug2 = title.toLocaleLowerCase().split(' ').join('-');
console.log(slug2);