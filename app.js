const button = document.getElementById("the-button");
const label = document.getElementById("count");

let presses = 0;

button.addEventListener("click", () => {
  presses += 1;
  label.textContent = `Pressed ${presses} ${presses === 1 ? "time" : "times"}`;
});
