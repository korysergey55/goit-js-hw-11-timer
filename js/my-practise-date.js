
//   const timerRef = document.querySelector("#timer-1");
//   const daysRef = document.querySelector("[data-value='days']");
//   const hoursRef = document.querySelector("[data-value='hours']");
//   const minsRef = document.querySelector("[data-value='mins']");
//   const secsRef = document.querySelector("[data-value='secs']");
    
//   const stopTimer = 100000;
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
  