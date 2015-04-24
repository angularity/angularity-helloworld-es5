(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';angular.module('hello-world',['ui.router']).config(require("2"))
},{"2":2}],2:[function(require,module,exports){
helloWorldRoutes.$inject=['$stateProvider','$urlRouterProvider'];'use strict';function helloWorldRoutes(a,b){b.otherwise('/');a.state('home',{url:'/',template:require("3"),controller:require("4")})}module.exports=helloWorldRoutes
},{"3":3,"4":4}],3:[function(require,module,exports){
module.exports='<h1>{{title}}</h1>'
},{}],4:[function(require,module,exports){
HelloWorldController.$inject=['$scope'];'use strict';function HelloWorldController(a){a.title='hello world'}module.exports=HelloWorldController
},{}]},{},[1])
//# sourceMappingURL=index.js.map
