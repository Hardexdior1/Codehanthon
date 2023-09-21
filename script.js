let menu = document.querySelector(".menu ");
let nav = document.querySelector(".nav");
let pxThree = document.querySelectorAll(".px-3");
let remove = document.querySelector(".remove");

// remove.addEventListener(('click',()=>{
//     nav.classList.add('hidden')
// }))
remove.addEventListener("click", () => {
  nav.classList.add("hidden");
});

console.log(pxThree);
pxThree.forEach((each) => {
  each.addEventListener("click", () => {
    nav.classList.add("hidden");
  });
});

menu.addEventListener("click", () => {
  nav.classList.toggle("hidden");
});

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
