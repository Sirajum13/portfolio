let time = 0;
let timer = null;

window.onload = function () {
  resetTimer();
};


function startTimer() {
  if (timer !== null || time >= 30) return;

  timer = setInterval(function () {
    time += 3;
    if (time >= 30) {
      time = 30;
      updateDisplay();
      clearInterval(timer);
      timer = null; } 
      
    else {
      updateDisplay();
    }
  }, 3000);
}
function updateDisplay() {
  document.getElementById("display").textContent = time;
}
function stopTimer() {
  if (timer !== null) {
    clearInterval(timer);
    timer = null;
  }
}

function resetTimer() {
  stopTimer();
  time = 0;
  updateDisplay();
}