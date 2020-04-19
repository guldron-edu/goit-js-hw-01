const credits = 23580;
const pricePerDroid = 3000;
const quantityOfDroid = prompt(
  'Укажите количество дроидов, которое желаете купить:',
);

if (quantityOfDroid === null) {
  console.log('Отменено пользователем!');
} else {
  if (Number.isNaN(Number(quantityOfDroid))) {
    // console.log('Введите корректное количество!');
    alert('Введите корректное количество!');
  } else {
    const totalPrice = pricePerDroid * Number(quantityOfDroid);
    if (totalPrice > credits) {
      console.log('Недостаточно средств на счету!');
    } else {
      const balance = credits - totalPrice;
      console.log(
        `Вы купили ${quantityOfDroid} дроидов, на счету осталось ${balance} кредитов.`,
      );
    }
  }
}
