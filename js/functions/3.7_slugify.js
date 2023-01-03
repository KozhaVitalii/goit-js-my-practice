// Напиши функцию slugify(string), которая получает строку и возвращает URL-slug
// Строка состоит только из букв и пробелов


// v1:
// const slugify = function(string) {
// const normalizedString = string.toLocaleLowerCase();
// const words = normalizedString.split(' ');
// const slug = words.join('-');

//     return slug;
// }

// console.log(slugify('Top 10 benefits of React framework'));
// console.log(slugify('Azure Static Web Apps are Awesome'));
// console.log(slugify('Technical writing tips for non-native English speakers'));

// v2 Супер короткий код :) : 
const slugify1 = function (string) {
  return string.toLocaleLowerCase().split(' ').join('-');

};

// Вызываем функцию:
console.log(slugify1('Top 10 benefits of React framework'));
console.log(slugify1('Azure Static Web Apps are Awesome'));
console.log(slugify1('Technical writing tips for non-native English speakers'));
