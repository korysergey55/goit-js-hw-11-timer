// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX.
//  Количество дней может состоять из более чем двух цифр.
// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

const CountdownTimer = document.querySelector("#timer-1");
const data = new Date("Jul 17, 2019");
console.log(data);

