// Напиши функцию changeCaswe(string), которая заменяет регистр каждого символа в строке на противоположный
// Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT"

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//   const isEqual = letter === letter.toLowerCase();
//   invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log('invertedString: ', invertedString);

const changeCaswe = function (string) {
  const letters = string.split('');
  let invertedString = '';

  for (const letter of letters) {
    const isInLowerCase = letter === letter.toLowerCase();
    invertedString += isInLowerCase
      ? letter.toUpperCase()
      : letter.toLowerCase();
    }
    return invertedString;
};

console.log(changeCaswe('qweRTY')); // QWErty
console.log(changeCaswe('mAnGo')); // MaNgO
console.log(changeCaswe('AjAx')); // aJaX