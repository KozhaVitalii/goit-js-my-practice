/*
 * Перебор через for...in и Object.keys|values|entries
 */

// У объекта есть родительский конструктор Object у которого есть три основных метода для перебора свойств
// объекта keys|values|entries

// Базовая инфа:
const feedback = {
  good: 5,
  neutral: 10,
  bad: 3,
};

let totalFeedback = 0;

// Метод keys. Позволят получить из объекта массив ключей. Обычно используется для того чтобы перебрать массив
// и найти что-то в нём или подсчитать и т.д.:
const keys = Object.keys(feedback);
console.log(keys);

// Ну а далее полученный массив перебираем через for of:

for (const key of keys) {
  // Так мы можем вывести элемент (свойство объекта) массива:
  console.log(key);
  // А так мы сразу получим значение элемента(т.е. ключа), т.е. через [] мы получаем значение свойства(ключа):
  console.log(feedback[key]);
  // А так мы получим общее кол-во фидбеков:
  totalFeedback += feedback[key];
}
// И выведем в консоль итоговое значение:
console.log('totalFeedback: ', totalFeedback);

// Метод values. Не всегда нам необходимо из объекта использовать массив ключей.Чаще мы обращаемся именно к
// значениям этих ключей. Для этого у нас есть метод values. И если Object.keys возвращает нам массив ключей, то
// Object.values возвращает нам массив значений. Это лучший метод для того чтобы что-то суммировать в массиве:
// Object.values подходит тогда когда есть объект в котором необходимо перебрать и к примеру изменить значение
// сразу у всех элементов, а не только у одного!!!
const values = Object.values(feedback);

console.log(values);

for (const value of values) {
  console.log(value);

  totalFeedback += value;
}

console.log('totalFeedback: ', totalFeedback);

// Object.entries - используется крайне редко. Теория есть в конспекте.