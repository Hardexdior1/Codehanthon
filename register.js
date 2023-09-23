let successWrap = document.querySelector(".successWrap");
let registerNow = document.querySelector(".registerNow");
let registerNow1 = document.querySelector(".registerNow1");

let email = document.querySelector(".email");
let text = document.querySelector(".text");
let text1 = document.querySelector(".text1");
let phoneNumber = document.querySelector(".phoneNumber");

// successWrapShow

// function formHandLing() {
//     if()
// }

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^\d{10}$/;

function validateInput() {
  const email1 = email.value.trim();
  const phone1 = phoneNumber.value.trim();
  const text2 = text.value.trim();
  const text3 = text1.value.trim();



  if (email1 === "" || phone1 === "" || text2 == "" || text3 == "") {
    alert('please any of the input can"t be empty');
  } else if (!emailRegex.test(email1)) {
    alert("Please enter a valid email address.");
  } 
  else if (!phoneRegex.test(phone1)) {
    alert(    "Please enter a valid 10-digit phone number you don't need the first 0." )
  } 
  else {
  
    successWrap.classList.remove("successWrap");
    successWrap.classList.add("successWrapShow");
  }
}

registerNow1.addEventListener("click", () => {
  successWrap.classList.add("successWrap");
  successWrap.classList.remove("successWrapShow");
});

registerNow.addEventListener('click',()=>{
    validateInput()
})