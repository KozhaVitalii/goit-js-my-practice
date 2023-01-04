const btnAdd = document.querySelector('button[data-add]');
const resetBtn = document.querySelector('button[data-reset]');
const valueInput = document.querySelector('input[data-value]');
const outputEl = document.querySelector('.js-output span');

// console.log(outputEl);
// console.log(btnAdd);
// console.log(valueInput);

let total = 0;

btnAdd.addEventListener('click', function () {
//   console.log('click Go-go-go!');
  const value = Number(valueInput.value);
  console.log(value);
    total += value;
    outputEl.textContent = total;
    // console.log('Total: ', total);
    valueInput.value = "";
});

resetBtn.addEventListener('click', function () {
    total = 0;
    outputEl.textContent = total;
});