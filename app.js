const button = document.getElementById("the-button");
const label = document.getElementById("count");

let presses = 0;
let lastClick = 0;

button.addEventListener("click", () => {
  const now = Date.now();
  if (now - lastClick < 150) return;
  lastClick = now;

  presses += 1;
  label.textContent = `Pressed ${presses} ${presses === 1 ? "time" : "times"}`;
});
