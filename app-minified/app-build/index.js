(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";angular.module("hello-world",["ui.router"]).config(require("________________________________0"));
},{"________________________________0":2}],2:[function(require,module,exports){
"use strict";function e(e,l){l.otherwise("/");e.state("home",{url:"/",template:require("______________________________1"),controller:require("____________________________2")})}e.$inject=["$stateProvider","$urlRouterProvider"];module.exports=e;
},{"______________________________1":3,"____________________________2":4}],3:[function(require,module,exports){
module.exports="<h1>{{title}}</h1>";
},{}],4:[function(require,module,exports){
"use strict";function l(l){l.title="hello world"}l.$inject=["$scope"];module.exports=l;
},{}]},{},[1])


//# sourceMappingURL=index.js.map