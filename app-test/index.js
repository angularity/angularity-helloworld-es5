(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
function HelloWorldController($scope) {
    $scope.title = 'hello world';
}
HelloWorldController.$inject = ['$scope'];
module.exports = HelloWorldController;
},{}],2:[function(require,module,exports){
'use strict';
var helloWorld = require("./hello-world");
describe('hello-world', function () {
    var scope;
    angular.module('hello-world', []).controller('helloWorld', helloWorld);
    beforeEach(angular.mock.module('hello-world'));
    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('helloWorld', { $scope: scope });
    }));
    it('hello world controller', function () {
        expect(scope.title).toBe('hello world');
    });
});
},{"./hello-world":1}]},{},[2])
//# sourceMappingURL=index.js.map
