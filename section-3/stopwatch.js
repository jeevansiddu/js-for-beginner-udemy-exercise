function StopWatch() {
  let duration = 0;
  let starttime;
  let endtime;
  let state = "";
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
    set: function (value) {
      duration = value;
    },
  });
  Object.defineProperty(this, "starttime", {
    get: function () {
      return starttime;
    },
    set: function (value) {
      starttime = value;
    },
  });
  Object.defineProperty(this, "endtime", {
    get: function () {
      return endtime;
    },
    set: function (value) {
      endtime = value;
    },
  });
  Object.defineProperty(this, "state", {
    get: function () {
      return state;
    },
    set: function (value) {
      state = value;
    },
  });
}

StopWatch.prototype.start = function () {
  if (this.state == "start") {
    throw new Error("Already started");
  }
  this.starttime = new Date().getTime() / 1000;
  this.state = "start";
  //   console.log(this.duration + " " + this.starttim);
};
StopWatch.prototype.stop = function () {
  if (this.state == "stop") {
    throw new Error("Already stopped");
  }
  this.endtime = new Date().getTime() / 1000;
  this.duration += this.endtime - this.starttime;
  this.state = "stop";
};
StopWatch.prototype.reset = function () {
  this.starttime = null;
  this.endtime = null;
  this.duration = 0;
  this.state = "";
};
const sw = new StopWatch();
