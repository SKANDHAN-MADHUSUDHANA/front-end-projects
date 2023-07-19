import "./styles.css";
let toggleCheck = false;
var screen = document.getElementById("app");
var ball = document.getElementById("toggle-ball");
var toggle = document.getElementById("toggle-holder");
var text = document.getElementById("toggle-text");
toggle.addEventListener("click", function () {
  if (toggleCheck === false) {
    ball.style.marginLeft = "10.5vw";
    screen.style.backgroundColor = "black";
    ball.style.backgroundColor = "white";
    toggle.style.border = "5px solid white";
    text.style.color = "white";
    text.innerText = "Dark Mode";
  } else {
    ball.style.marginLeft = "0.5vw";
    screen.style.backgroundColor = "white";
    ball.style.backgroundColor = "black";
    toggle.style.border = "5px solid black";
    text.style.color = "black";
    text.innerText = "Light Mode";
  }
  toggleCheck = !toggleCheck;
});
