const startDate = new Date('2026-05-08T00:00:00').getTime();
const targetDate = new Date('2027-03-01T00:00:00').getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const progressEl = document.getElementById("progress");
const progressText = document.getElementById("progressText");
const statusEl = document.getElementById("status");

function update() {
  const now = new Date().getTime();

  const total = targetDate - startDate;
  const passed = now - startDate;
  const remaining = targetDate - now;

  if (remaining <= 0) {
    daysEl.innerText = 0;
    hoursEl.innerText = 0;
    minutesEl.innerText = 0;
    secondsEl.innerText = 0;

    progressEl.style.width = "100%";
    progressText.innerText = "100%";
    statusEl.innerText = "🎉 Exam Completed!";
    return;
  }

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  daysEl.innerText = Math.floor(remaining / day);
  hoursEl.innerText = Math.floor((remaining % day) / hour);
  minutesEl.innerText = Math.floor((remaining % hour) / minute);
  secondsEl.innerText = Math.floor((remaining % minute) / second);

  let progress = (passed / total) * 100;
  progress = Math.max(0, Math.min(progress, 100));

  progressEl.style.width = progress + "%";
  progressText.innerText = progress.toFixed(1) + "%";

  statusEl.innerText = "🔥 Stay focused G12!";
}

setInterval(update, 1000);
update();
