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
      hoursElem: document.querySelector(
        `${this.selector} span[data-value='hours']`
      ),
      minsElem: document.querySelector(
        `${this.selector} span[data-value='mins']`
      ),
      secsElem: document.querySelector(
        `${this.selector} span[data-value='secs']`
      ),
    };
  }
  changeDate() {
    const time = this.targetDate.getTime() - new Date().getTime();
    if (time > 0) {
      this.getTimeComponents(time);
    } else {
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
  targetDate: new Date("Jun 1, 2021"),
});

timerClass.runTimer();
