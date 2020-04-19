const COST_CHINA = 100;
const COST_CHILI = 250;
const COST_AUSTRALIA = 170;
const COST_INDIA = 80;
const COST_JAMAICA = 120;
const yourCountry = prompt('Укажите в какую страну желаете сделать доставку:');
if (yourCountry === null) {
  console.log('Отменено пользователем');
} else {
  switch (yourCountry.toLowerCase()) {
    case 'китай':
      console.log(
        `Доставка в ${yourCountry} будет стоить ${COST_CHINA} кредитов`,
      );
      break;
    case 'чили':
      console.log(
        `Доставка в ${yourCountry} будет стоить ${COST_CHILI} кредитов`,
      );
      break;
    case 'австралия':
      console.log(
        `Доставка в ${yourCountry} будет стоить ${COST_AUSTRALIA} кредитов`,
      );
      break;
    case 'индия':
      console.log(
        `Доставка в ${yourCountry} будет стоить ${COST_INDIA} кредитов`,
      );
      break;
    case 'ямайка':
      console.log(
        `Доставка в ${yourCountry} будет стоить ${COST_JAMAICA} кредитов`,
      );
      break;
    default:
      console.log('В вашей стране доставка не доступна');
  }
}
