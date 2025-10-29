// Add your code here

const intervalInput = document.getElementById("interval");
const button = document.getElementById("button");

let isChanging = true; // Checking if the background is changing colors
let intervalTime = 3; // Default interval time
let colorInterval; // Store interval reference

// Function to generate a random color
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = 0.5;
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Function to change the background color
function changeBackgroundColor() {
  document.body.style.backgroundColor = randomColor();
}

// Start changing color
function startChangingColor() {
  colorInterval = setInterval(changeBackgroundColor, intervalTime * 1000);
  changeBackgroundColor(); // Change color immediately
}

// Stop changing color
function stopChangingColor() {
  clearInterval(colorInterval);
}

// Button click event to start/stop background color change
button.addEventListener("click", () => {
  if (isChanging) {
    // If the background is changing, stop it
    stopChangingColor();
    button.textContent = "Start";
    button.className = "btn btn-primary";
    intervalInput.disabled = false; // Enable input when stopped
  } else {
    // Background stopped changing, start it
    // First check if the user provides a new interval time
    const newInterval = intervalInput.value;
    if (!isNaN(newInterval) && newInterval > 0) {
      intervalTime = newInterval;
    }
    intervalInput.disabled = true; // Disable input when running

    startChangingColor();
    button.textContent = "Stop";
    button.className = "btn btn-danger";
  }

  isChanging = !isChanging; // Toggle the button
});

// When loading the page, the page changes bg color every 3 seconds
window.addEventListener("load", () => {
  startChangingColor();
  button.textContent = "Stop";
  button.className = "btn btn-danger";
  intervalInput.disabled = true;
});
