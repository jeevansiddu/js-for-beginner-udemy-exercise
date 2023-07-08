function StopWatch() {
  let duration = 0;
  let starttime;
  let endtime;
  let state = "";

  this.start = () => {
    if (state == "start") {
      throw new Error("Already started");
    }
    starttime = new Date().getTime() / 100;
    state = "start";
  };
  this.stop = () => {
    if (state == "stop") {
      throw new Error("Already stopped");
    }
    endtime = new Date().getTime() / 1000;
    duration += endtime - starttime;
    state = "stop";
  };
  this.reset = () => {
    starttime = null;
    endtime = null;
    duration = 0;
    state = "";
  };
  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();
