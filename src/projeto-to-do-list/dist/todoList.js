"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.List = void 0;
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
      console.log("todoItem populando array", this.todoItems);
    }
  }, {
    key: "removeTodoItem",
    value: function removeTodoItem(todoItem) {
      this.todoItems = this.todoItems.filter(function (word) {
        return word !== todoItem;
      });
      console.log("removendo todoItems");
      console.log("removendo", this.todoItems);
    }
  }, {
    key: "getTodoItems",
    value: function getTodoItems() {
      console.log("getTodoItems", this.todoItems);
      return this.todoItems;
    }
  }]);
  return List;
}(); //module.exports = List;
// const listinha = new List();
// listinha.addTodoItem("Banho e tosa");
// listinha.addTodoItem("Banho e tosa");
// listinha.addTodoItem("Banho e tosa");
// listinha.addTodoItem("Banho e tosa");
// listinha.getTodoItems();
// listinha.removeTodoItem("Banho e tosa");
// listinha.removeTodoItem("Banho e tosa");
// listinha.removeTodoItem("Banho e tosa");
// listinha.removeTodoItem("Banho e tosa");
exports.List = List;