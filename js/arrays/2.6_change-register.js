// Напишите скрипт который заменяет регистр каждого символа в строке на противоположный.
// Например, если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT"

const string = 'JavaScript';

// Два решения:

// 1. Олдскул

const letters = string.split('');
let invertedString = '';

// console.log(letters);

for (const letter of letters) {
  console.log(letter);
  //   if (letter === letter.toLowerCase()) {
  //     console.log('Эта буква в нижнем регистре!!! - ', letter);
  //     invertedString += letter.toUpperCase();
  //   } else {
  //     letter !== letter.toLowerCase();
  //     console.log('Эта буква в верхнем регистре!!! - ', letter);
  //     invertedString += letter.toLowerCase();
  //   }
  // }
  // console.log(invertedString);

  // Решим через тернарный оператор:
  invertedString += letter === letter.toLowerCase()
    ? letter.toUpperCase()
    : letter.toLowerCase();
}
console.log('invertedString: ', invertedString);