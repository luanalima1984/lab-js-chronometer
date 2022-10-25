class Chronometer {
  constructor() {
    // ... your code goes here
    this.currentTime = 0;
    this.IntervalId = null;
  }

  start(printTimeCallback) {
   this.IntervalId = setInterval(() => {

    this.currentTime++

    if (printTimeCallback) {

      printTimeCallback()
      
    }
    
   },1000)
  }

  getMinutes() {

    return Math.floor(this.currentTime /60);
    }

  getSeconds() {
return this.currentTime % 60;

}

  computeTwoDigitNumber(value) {
return value.toString().padStart(2,  "0");

}

  stop() {
clearInterval(this.IntervalId);
this.IntervalId = null;
  }

  reset() {
    this.currentTime = 0;
   
  }

  split() {
    let minute = this.computeTwoDigitNumber(this.getMinutes());
    let second = this.computeTwoDigitNumber(this.getSeconds());
    return 
  `${minute}  ${second}`;
  }
}