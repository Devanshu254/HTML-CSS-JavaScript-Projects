// Here we will write a function, so whenever we will click on this button, the color will be changed.
const button = document.querySelector("button"); // Here we are targeting our body.
const body = document.querySelector("body");
const color = ["red", "#fff", "green", "yellow", "blue"];
// Here first we need to give initial value.
body.style.backgroundColor = "violet";

button.addEventListener("click", changeB);
function changeB() {
  const colorIndex = parseInt(Math.random() * color.length);
  body.style.backgroundColor = color[colorIndex];
}
