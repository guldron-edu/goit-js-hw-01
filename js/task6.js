let input;
let total = 0;
do {
  input = prompt('Введите любое число');
  if (Number.isNaN(Number(input))) {
    // console.log('Было введено не число, попробуйте еще раз');
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += Number(input);
    console.log(total);
  }
} while (input !== null);
alert(`Общая сумма чисел равна ${total}`);
