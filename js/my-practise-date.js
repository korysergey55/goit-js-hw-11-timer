// // Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX.
// //  Количество дней может состоять из более чем двух цифр.
// // Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// // new CountdownTimer({
// //   selector: '#timer-1',
// //   targetDate: new Date('Jul 17, 2019'),
// // });

// class CountdownTimer {
//     constructor(selector, targetDate) {
//       this.selector = selector;
//       this.targetDate = targetDate;
//     }
//   }
//   const timerClass = new CountdownTimer("#timer-1", "Jul 17, 2019");
  
//   const dataInPast = new Date("Jul 17, 2019");
  
//   function printdataInPast(data) {
//     const padDate = (num) => String(num).padStart(2, 0);
//     const yearInPast = dataInPast.getFullYear();
//     const monthInPast = padDate(dataInPast.getMonth() + 1);
//     const dayInPast = padDate(dataInPast.getDate());
//     const print_data = `${yearInPast}-${monthInPast}-${dayInPast}`;
  
//     return print_data;
//   }
//   printdataInPast(dataInPast);
//   console.log(printdataInPast(dataInPast));
  
//   const timerRef = document.querySelector("#timer-1");
//   const daysRef = document.querySelector("[data-value='days']");
//   const hoursRef = document.querySelector("[data-value='hours']");
//   const minsRef = document.querySelector("[data-value='mins']");
//   const secsRef = document.querySelector("[data-value='secs']");
  
  
//   const stopTimer = 100;
//   let counterTimer = null;
  
//   const timer = {
//     start() {
//       const startTime = Date.now();
//       setInterval(() => {
//         if (counterTimer === stopTimer) return;
//         counterTimer += 1;
//         const currentTime = Date.now();
//         const deltaTime = currentTime - startTime;
//         const timeComponents = getTimeComponents(deltaTime);
//         console.log(timeComponents);
//       }, 1000);
//     },
//   };
//   timer.start();
  
//   // Принимает число, приводит к строке и длбавляет 0  если число меньше 2-х знаков
//   function pad(value) {
//     return String(value).padStart(2, "0");
//   }
  
//   function getTimeComponents(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//     );
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  
//     daysRef.textContent = days;
//     hoursRef.textContent = hours;
//     minsRef.textContent = mins;
//     secsRef.textContent = secs;
//     return { days, hours, mins, secs };
//   }
  