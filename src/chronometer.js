class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
  //printTimeCallback é uma função que vem do index.js; caso a função tenha sido passada, vamos invocar a função
  this.intervalId = setInterval(()=>{
    this.currentTime++;
    // checnado se printTimeCallback existe
    if(printTimeCallback){
      printTimeCallback();
    }

  }, 1000);
  }

  getMinutes() {
   return Math.floor(this.currentTime/60);

  }

  getSeconds() {
    return this.currentTime%60;
  }

  computeTwoDigitNumber(value) {
    // let twoNumbers = ('0' + value)
    // if(twoNumbers.length === 3){
    //   return twoNumbers.slice(1,3)
    // }
    // return twoNumbers
    return ("0"+value).slice(-2,);

  }

  stop() {
   return clearInterval(this.intervalId);
  }

  reset() {
    return this.currentTime = 0;
  }

  split() {

   const minutes = this.getMinutes();
   const seconds = this.getSeconds();
   const minStr = this.computeTwoDigitNumber(minutes);
   const secStr = this.computeTwoDigitNumber(seconds);
   return `${minStr}:${secStr}`;
    
  }
}
