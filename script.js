let question = document.querySelectorAll(".question");
let minus = document.querySelectorAll(".minus");
let plus = document.querySelectorAll(".plus");
let para = document.querySelectorAll(".para");

console.log(question[0]);

question[0].addEventListener("click", () => {
  plus[0].classList.toggle("minus");
  minus[0].classList.toggle("minus");
  para[0].classList.toggle("para");
});
question[1].addEventListener("click", () => {
  plus[1].classList.toggle("minus");
  minus[1].classList.toggle("minus");
  para[1].classList.toggle("para");
});
question[2].addEventListener("click", () => {
  plus[2].classList.toggle("minus");
  minus[2].classList.toggle("minus");
  para[2].classList.toggle("para");
});
question[3].addEventListener("click", () => {
  plus[3].classList.toggle("minus");
  minus[3].classList.toggle("minus");
  para[3].classList.toggle("para");
});
question[4].addEventListener("click", () => {
  plus[4].classList.toggle("minus");
  minus[4].classList.toggle("minus");
  para[4].classList.toggle("para");
});
// question[5].addEventListener("click", () => {
//   plus[5].classList.toggle("minus");
//   minus[5].classList.toggle("minus");
//   para[5].classList.toggle("para");

// });

// question[0].addEventListener("click", () => {
//
// });

let hour = document.querySelector(".hour");
let minute = document.querySelector(".minute");
let second = document.querySelector(".second");

// hour.textContent=60
// minute.textContent=60
// second.textContent=60

function start() {
  let hours = 60;
  let minutes = 60;
  let seconds = 60;
  timer = setInterval(function () {
    seconds--;
    if (seconds === 0) {
      seconds = 60;
      minutes--;
    }
    if (minutes === 0) {
      // minutes==60
      hours--;
      seconds = 60;
      minutes = 60;
    }
    if (hours === 0) {
      seconds = 60;
      minutes = 60;
      hours = 60;
    }

    //   time.textContent=hours+ ' '+ minutes+' '+ seconds

    hour.textContent = hours;
    minute.textContent = minutes;
    second.textContent = seconds;
  },3000);
}
start();
