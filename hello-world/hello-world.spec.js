/* globals describe, beforeEach, inject, it, expect */

var helloWorld = require('./hello-world');

describe('hello-world', function () {
    var scope;

    angular.module('hello-world', [])
        .controller('helloWorld', helloWorld);

    beforeEach(angular.mock.module('hello-world'));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('helloWorld', {
            $scope: scope
        });
    }));

    it('hello world controller', function(){
      expect(scope.title).toBe('hello world');
    });

});