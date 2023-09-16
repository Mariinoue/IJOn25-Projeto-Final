import { PomodoroTimer } from "../src/pomodoroTimer";

jest.useFakeTimers();

describe("PomodoroTimer", () => {
  let timer;

  beforeEach(() => {
    timer = new PomodoroTimer(25, 5);
    document.body.innerHTML = '<div id="timer-display"></div>';
    timer.timerDisplay = document.getElementById("timer-display");
  });

  afterEach(() => {
    jest.clearAllTimers();
  });

  it("PomodoroTimer starts and stops correctly", () => {
    timer.start();

    expect(timer.interval).not.toBeNull();

    timer.stop();

    expect(timer.interval).toBeNull();
  });

  it("PomodoroTimer starts correctly and time been update each 1s", () => {
    timer.start();
    jest.advanceTimersByTime(1000);

    expect(timer.isPlaying).toBeTruthy();
  });

  it("PomodoroTimer switches between work and break", () => {
    timer.start();

    expect(timer.isPlaying).toBe(true);

    timer.seconds = 0;
    timer.tick();
    
    expect(timer.isPlaying).toBe(false);

    timer.seconds = 0;
    timer.tick();

    expect(timer.isPlaying).toBe(true);
  });

  it("should update the display with work time when is playing is true", () => {
    timer.isPlaying = true;
    timer.workDuration = 1500; 
    timer.updateDisplay();

    expect(timer.timerDisplay.textContent).toBe("Work Time: 25:00");
  });

  it("should update the display with break time when is playing is false", () => {
    timer.isPlaying = false;
    timer.breakDuration = 5;
    timer.reset();
    timer.updateDisplay();

    expect(timer.timerDisplay.textContent).toBe("Break Time: 05:00");
  });
});
