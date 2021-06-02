const EventEmitter = require("events");

class School extends EventEmitter {
  startPeriod() {
    console.log("Class started");

    // raise event when bell ring
    // raise an event
    setTimeout(() => {
      // emitter.emit("bellRing", "second period ended");
      // pass multiple parameter
      this.emit("bellRing", {
        period: "first",
        text: "period is ended",
      });
    }, 1000);
  }
}

module.exports = School;
