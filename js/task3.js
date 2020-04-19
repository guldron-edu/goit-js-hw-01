const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль');
// if (message === 'jqueryismyjam') {
//   console.log('Добро пожаловать!');
// } else if (message === null) {
//   console.log('Отменено пользователем!');
// } else {
//   console.log('Доступ запрещен, неверный пароль!');
// }
switch (message) {
  case 'jqueryismyjam':
    console.log('Добро пожаловать!');
    break;
  case null:
    console.log('Отменено пользователем!');
    break;
  default:
    console.log('Доступ запрещен, неверный пароль!');
}
