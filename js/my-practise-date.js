const stopTimer = 5;
let counterTimer = null;

const timer = {
  start() {
    const startTime = Date.now();
    setInterval(() => {
      if (counterTimer === stopTimer) return;
      const currentTime = Date.now();
      counterTimer += 1;
      const deltaTime = currentTime - startTime;
      const timeComponents = getTimeComponents(deltaTime)
    //   console.log("current date", currentTime);
    //   console.log("difference", startTime - currentTime);
      console.log(timeComponents);
    }, 1000);
  },
};
timer.start(); 

// Принимает число, приводит к строке и длбавляет 0  если число меньше 2-х знаков
function pad(value){
    return String(value).padStart(2, '0');
}

function getTimeComponents(time) {
  const days =  pad(Math.floor(time / (1000 * 60 * 60 * 24)));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins =  pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs =  pad(Math.floor((time % (1000 * 60)) / 1000));
  return { days, hours, mins, secs };
}
