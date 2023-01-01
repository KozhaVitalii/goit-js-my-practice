// Напиши функцию logItems(items) для перебора и логирования массива

const logItems = function (items) {
  for (const item of items) {
    console.log(item);
  }
};

logItems(['Mango', 'Kiwi', 'Poly', 'Ajax']);
logItems([1, 2, 3, 4, 5]);
logItems(['клавиатура', 'наушники', 'часы']);

// Подавляющее большинство функций возвращают значение в код, но не всегда стоит такая задача, в данном примере,
// задача функции заключается в том чтобы перебрать массив и вывести в лог содержимое массива (все элементы)
