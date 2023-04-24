/*
 * Array.prototype.flat(depth)
 * - Разглаживает массив до указанной глубины
 * - По умолчанию глубина 1
 */

// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

// В консоли мы разглаживаем массив с глубиной вложенности "3" - array.flat(3), т.е.управляя параметром в(),
//     можем влиять на глубину разглаживания.В нашем примере const array имеет массив с трея уровнями вложенности
// массивов, если мы к примеру в укажем(1), то разгладит только до первого уровня, (2) до второго.В консоли
// поигравшись параметром можно посмотреть результат.Под розглаживанием подразумевается что вложенные массивы
// преобразуются в один массив с одной строкой (а точнее со всеми элементами в ряд)

/*
 * Array.prototype.flatMap(callback)
 * - Комбинация map + flat
 */

// На прошлом занятии мы создали массив с тегами, для этого используем reduce, то же самое мы можем добиться
// с помощью методов map и flat

const tweets = [
    { id: '000', likes: 5, tags: ['js', 'nodejs'] },
    { id: '001', likes: 2, tags: ['html', 'css'] },
    { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
    { id: '003', likes: 8, tags: ['css', 'react'] },
    { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];

const tags1 = tweets.map(t => t.tags).flat();
console.log(tags1);
// Проблема в том, чтобы мы при таком подходе два раза ходим по одному и тому же массиву вызывая два метода,
// это влияет на производительность

// Поэтому для есть метод flatMap, который заменяет reduce или кобинацию map + flat :

// const tags = tweets.flatMap(t => t.tags);
// console.log(tags);

// const stats = tags.reduce((acc, tag) => {
//     return {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     };
// }, {});

const stats = tweets
    .flatMap(tweet => tweet.tags)
    .reduce(
        (acc, tag) => ({
            ...acc,
            [tag]: acc[tag] ? acc[tag] + 1 : 1,
        }),
        {},
    );

console.log(stats);