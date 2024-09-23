const number = document.querySelector(".number");
const plus = document.querySelector(".fa-plus");
const minus = document.querySelector(".fa-minus");
const button = document.querySelector("#btn");
const item = document.querySelector(".cart-item");
const message = document.querySelector(".message");

let counter = 1;

plus.addEventListener("click", () => {
  counter++;
  number.innerText = counter;
});

minus.addEventListener("click", () => {
  if (counter > 1) {
    counter--;
    number.innerText = counter;
  } else {
    counter = 1;
  }
});

button.addEventListener("click", () => {
  if (item.textcontent === "") {
    item.classList.add("card-item-active");
    item.textcontent = 1;
  } else {
    message.classList.add("message-active");
    setTimeout(() => {
      message.classList.remove("message-active");
    }, 2000);
  }
});
