function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function event() {
  const body = document.querySelector("body");
  body.style.backgroundColor = getRandomHexColor();
  const textSpan = document.querySelector(".color");
  textSpan.textContent = body.style.backgroundColor;
}

const btn = document.querySelector(".change-color");
btn.addEventListener("click", event);
