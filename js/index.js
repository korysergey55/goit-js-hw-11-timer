// Плагин ожидает следующую HTML-разметку и показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX.
//  Количество дней может состоять из более чем двух цифр.
// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;

    this.refs = {
      daysElem: document.querySelector(
        `${this.selector} span[data-value='days']`
      ),
      hoursRef: document.querySelector(
        `${this.selector} span[data-value='hours']`
      ),
      minsRef: document.querySelector(
        `${this.selector} span[data-value='mins']`
      ),
      secsRef: document.querySelector(
        `${this.selector} span[data-value='secs']`
      ),
    };
  }
  changeDate() {
    const time = this.targetDate.getTime() - new.Date().getTime();
    if(time > 0){
    this.getTimeComponents(time);
    } else{
    this.timeEnd();
    }
  }
  getTimeComponents(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    this.changeElems(days, hours, mins, secs);
  }
  changeElems(days, hours, mins, secs) {
    this.refs.daysElem.textContent = days;
    this.refs.hoursElem.textContent = hours;
    this.refs.minsElem.textContent = mins;
    this.refs.secsElem.textContent = secs;
  }
  runTimer() {
    this.changeDate();
    setInterval(() => {
      this.changeDate();
    }, 1000);
  }
  timeEnd() {
    document.querySelector(this.selector).textContent = "Время акции истекло";
  }
}
const timerClass = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 21, 2021"),
});

timerClass.runTimer();

// const dataInPast = new Date("Jul 17, 2019");
// function printdataInPast(data) {
//   const padDate = (num) => String(num).padStart(2, 0);
//   const yearInPast = dataInPast.getFullYear();
//   const monthInPast = padDate(dataInPast.getMonth() + 1);
//   const dayInPast = padDate(dataInPast.getDate());
//   const print_data = `${yearInPast}-${monthInPast}-${dayInPast}`;

//   return print_data;
// }
// printdataInPast(dataInPast);
// console.log(printdataInPast(dataInPast));

// const timerRef = document.querySelector("#timer-1");
// const daysRef = document.querySelector("[data-value='days']");
// const hoursRef = document.querySelector("[data-value='hours']");
// const minsRef = document.querySelector("[data-value='mins']");
// const secsRef = document.querySelector("[data-value='secs']");

// const stopTimer = 100;
// let counterTimer = null;

// const timer = {
//   start() {
//     const startTime = Date.now();
//     setInterval(() => {
//       if (counterTimer === stopTimer) return;
//       counterTimer += 1;
//       const currentTime = Date.now();
//       const deltaTime = currentTime - startTime;
//       const timeComponents = getTimeComponents(deltaTime);
//       console.log(timeComponents);
//     }, 1000);
//   },
// };
// timer.start();
