const d = document;
const timer = d.getElementById("timer");
const timerInput = d.querySelector(".timer-input");
const time = d.getElementById("time");
const progress = d.querySelector(".progress");
const gear = d.querySelector(".gear");
const check = d.querySelector(".check");
const buttons = d.querySelector(".buttons");
const btnStart = d.getElementById("start");
const btnStop = d.getElementById("stop");
const minutesInput = d.getElementById("minutes");
const secondsInput = d.getElementById("seconds");

let minutes = minutesInput.value;
let seconds = secondsInput.value;
let counter = Number(minutes) * 60 + Number(seconds);
time.innerHTML = `${minutes}:${seconds}`;
let counterInitial = counter;
let counterTemp = 0;
let minutesInitial = minutes;
let secondsInitial = seconds;
let startCounter;
let stoped = true;

startCounter = setInterval(() => {
  if (!stoped) {
    counter--;
    minutes = Math.floor(counter / 60);
    seconds = counter % 60;
    const degress = (counter * 360) / counterInitial;
    if (degress === 0) {
      progress.style.background = `conic-gradient(#00aa51 360deg, #00aa51 0deg)`;
    } else {
      progress.style.background = `conic-gradient(#9d0000 ${degress}deg, #010100 0deg)`;
    }
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    time.innerHTML = `${minutes}:${seconds}`;
    if (counter === 0) finish();
  }
}, 1000);

function finish() {
  stoped = true;
  btnStart.style.display = "block";
  btnStop.style.display = "none";
  gear.style.display = "block";
  time.innerHTML = `${minutesInitial}:${secondsInitial}`;
  counter = Number(minutesInitial) * 60 + Number(secondsInitial);
  counterInitial = counter;
}

gear.addEventListener("click", () => {
  gear.style.display = "none";
  check.style.display = "block";
  timerInput.style.display = "flex";
  time.style.display = "none";
  btnStart.style.display = "none";
  btnStop.style.display = "none";
});

check.addEventListener("click", () => {
  btnStart.style.display = "block";
  timerInput.style.display = "none";
  gear.style.display = "block";
  check.style.display = "none";
  time.style.display = "block";
  minutes = d.getElementById("minutes").value;
  seconds = d.getElementById("seconds").value;
  minutesInitial = minutes;
  secondsInitial = seconds;
  counter = Number(minutes) * 60 + Number(seconds);
  counterInitial = counter;
  time.innerHTML = `${minutes}:${seconds}`;
});

btnStart.addEventListener("click", () => {
  if (counterInitial > 0) {
    stoped = false;
    btnStart.style.display = "none";
    btnStop.style.display = "block";
    gear.style.display = "none";
  }
});

btnStop.addEventListener("click", () => {
  if (counterTemp === 0 && !stoped) {
    btnStop.textContent = "Continue";
    stoped = true;
  } else {
    stoped = false;
    btnStop.textContent = "Stop";
  }
});

function validateNumber(e) {
  const value = Math.ceil(Number(e.target.value));
  if (value > 60) {
    e.target.value = 60;
  } else if (value < 0) {
    e.target.value = 0;
  }
}

function validateWhenFocusOut(e) {
  const value = Math.ceil(Number(e.target.value));
  if (value >= 0 && value < 10) {
    e.value = "0" + value;
  }
}

minutesInput.addEventListener("keyup", (e) => validateNumber(e));

minutesInput.addEventListener("focusout", (e) => validateWhenFocusOut(e));

secondsInput.addEventListener("keyup", (e) => validateNumber(e));

secondsInput.addEventListener("focusout", (e) => validateWhenFocusOut(e));
