"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var List = /*#__PURE__*/function () {
  function List() {
    _classCallCheck(this, List);
    _defineProperty(this, "todoItems", void 0);
    this.todoItems = [];
  }
  _createClass(List, [{
    key: "addTodoItem",
    value: function addTodoItem(todoItem) {
      this.todoItems.push(todoItem);
    }
  }, {
    key: "removeTodoItem",
    value: function removeTodoItem(todoItem) {
      this.todoItems = this.todoItems.filter(function (word) {
        return word !== todoItem;
      });
    }
  }, {
    key: "getTodoItems",
    value: function getTodoItems() {
      return this.todoItems;
    }
  }]);
  return List;
}();
var todoList = new List();
var todoListElement = document.getElementById("todo-list");
var newItemInput = document.getElementById("new-item");
var addButton = document.getElementById("add-button");
addButton.addEventListener("click", function () {
  var newItem = newItemInput.value.trim();
  if (newItem !== "") {
    todoList.addTodoItem(newItem);
    newItemInput.value = "";
    renderTodoList();
  }
});
todoListElement.addEventListener("click", function (event) {
  if (event.target.tagName === "LIXO") {
    var todoItem = event.target.previousSibling.textContent;
    todoList.removeTodoItem(todoItem);
  }
});
function renderTodoList() {
  todoListElement.innerHTML = "";
  var todoItems = todoList.getTodoItems();
  todoItems.forEach(function (todoItem) {
    var li = document.createElement("li");
    li.textContent = todoItem;
    var deleteButton = document.createElement("button");
    deleteButton.textContent = "LIXO";
    li.appendChild(deleteButton);
    todoListElement.appendChild(li);
  });
}
renderTodoList();
var PomodoroTimer = /*#__PURE__*/function () {
  function PomodoroTimer(workDuration, breakDuration) {
    _classCallCheck(this, PomodoroTimer);
    this.workDuration = workDuration;
    this.breakDuration = breakDuration;
    this.interval = null;
    this.seconds = workDuration * 60;
    this.isWorking = true;
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
      this.seconds = this.isWorking ? this.workDuration * 60 : this.breakDuration * 60;
      this.updateDisplay();
    }
  }, {
    key: "tick",
    value: function tick() {
      if (this.seconds > 0) {
        this.seconds--;
        this.updateDisplay();
      } else {
        this.isWorking = !this.isWorking;
        this.seconds = this.isWorking ? this.workDuration * 60 : this.breakDuration * 60;
        this.updateDisplay();
      }
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      var timerDisplay = document.getElementById("timer-display");
      timerDisplay.textContent = "".concat(this.isWorking ? "Foco" : "Break", " Time: ").concat(this.formatTime(this.seconds));
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