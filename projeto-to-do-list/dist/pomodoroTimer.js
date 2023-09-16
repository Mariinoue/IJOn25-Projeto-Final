"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PomodoroTimer = void 0;
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PomodoroTimer = /*#__PURE__*/function () {
  function PomodoroTimer(workDuration, breakDuration) {
    _classCallCheck(this, PomodoroTimer);
    this.workDuration = workDuration;
    this.breakDuration = breakDuration;
    this.interval = null;
    this.seconds = workDuration * 60;
    this.isPlaying = true;
    this.timerDisplay = document.getElementById("timer-display");
  }
  _createClass(PomodoroTimer, [{
    key: "start",
    value: function start() {
      var _this = this;
      if (!this.interval) {
        this.interval = setInterval(function () {
          _this.tick();
        }, 1000);
      }
    }
  }, {
    key: "stop",
    value: function stop() {
      clearInterval(this.interval);
      this.interval = null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.stop();
      this.seconds = this.isPlaying ? this.workDuration * 60 : this.breakDuration * 60;
      this.updateDisplay();
    }
  }, {
    key: "tick",
    value: function tick() {
      if (this.seconds > 0) {
        this.seconds--;
        this.updateDisplay();
      } else {
        this.isPlaying = !this.isPlaying;
        this.seconds = this.isPlaying ? this.workDuration * 60 : this.breakDuration * 60;
        this.updateDisplay();
      }
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      if (this.timerDisplay) {
        this.timerDisplay.textContent = "".concat(this.isPlaying ? "Work" : "Break", " Time: ").concat(this.formatTime(this.seconds));
      }
    }
  }, {
    key: "formatTime",
    value: function formatTime(seconds) {
      var minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
      var remainingSeconds = (seconds % 60).toString().padStart(2, "0");
      return "".concat(minutes, ":").concat(remainingSeconds);
    }
  }]);
  return PomodoroTimer;
}();
exports.PomodoroTimer = PomodoroTimer;
var timer = new PomodoroTimer(25, 5);
var element = document.getElementById("start-button");
if (element) {
  element.addEventListener("click", function () {
    timer.start();
  });
}
var stopElement = document.getElementById("stop-button");
if (stopElement) {
  stopElement.addEventListener("click", function () {
    timer.stop();
  });
}
var resetElement = document.getElementById("reset-button");
if (resetElement) {
  resetElement.addEventListener("click", function () {
    timer.reset();
  });
}