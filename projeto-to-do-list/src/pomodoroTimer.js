export class PomodoroTimer {
  constructor(workDuration, breakDuration) {
    this.workDuration = workDuration;
    this.breakDuration = breakDuration;
    this.interval = null;
    this.seconds = workDuration * 60;
    this.isPlaying = true;
    this.timerDisplay = document.getElementById("timer-display");
  }

  start() {
    if (!this.interval) {
      this.interval = setInterval(() => {
        this.tick();
      }, 1000);
    }
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  reset() {
    this.stop();
    this.seconds = this.isPlaying
      ? this.workDuration * 60
      : this.breakDuration * 60;
    this.updateDisplay();
  }

  tick() {
    if (this.seconds > 0) {
      this.seconds--;
      this.updateDisplay();
    } else {
      this.isPlaying = !this.isPlaying;
      this.seconds = this.isPlaying
        ? this.workDuration * 60
        : this.breakDuration * 60;
      this.updateDisplay();
    }
  }

  updateDisplay() {
    if (this.timerDisplay) {
      this.timerDisplay.textContent = `${
        this.isPlaying ? "Work" : "Break"
      } Time: ${this.formatTime(this.seconds)}`;
    }
  }

  formatTime(seconds) {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const remainingSeconds = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainingSeconds}`;
  }
}

const timer = new PomodoroTimer(25, 5); 


const element = document.getElementById("start-button");
if (element) {
  element.addEventListener("click", () => {
    timer.start();
  });
}

const stopElement = document.getElementById("stop-button");
if (stopElement) {
  stopElement.addEventListener("click", () => {
    timer.stop();
  });
}

const resetElement = document.getElementById("reset-button");
if (resetElement) {
  resetElement.addEventListener("click", () => {
    timer.reset();
  });
}
