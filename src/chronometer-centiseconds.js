class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
    // ... your code goes here
    this.intervalId = setInterval(() => {
      this.currentTime++;
      if (printTimeCallback) printTimeCallback();
    }, 10);
  }

  getMinutes() {
    let minute = Math.floor(this.currentTime / 100 / 60);
    return minute;
  }

  getSeconds() {
    let second = Math.floor((this.currentTime / 100) % 60);
    return second;
  }

  getCentiseconds() {
    let centisecond = this.currentTime % 100;
    return centisecond;
  }

  computeTwoDigitNumber(value) {
    value = `${value}`;
    if (value.length === 1) return `0${value}`;
    return `${value}`;
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    let splitSecond = this.computeTwoDigitNumber(this.getSeconds());
    let splitMinute = this.computeTwoDigitNumber(this.getMinutes());
    let splitCentiseconds = this.computeTwoDigitNumber(this.getCentiseconds());
    return `${splitMinute}:${splitSecond}.${splitCentiseconds}`;
  }
}
