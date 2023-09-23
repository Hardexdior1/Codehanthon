let menu = document.querySelector(".menu");
console.log(menu);
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

