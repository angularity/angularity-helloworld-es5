/**
 * @ngInject
 */
function helloWorldRoutes($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('home', {
            url       : '/',
            template  : require('../hello-world/hello-world.html'),
            controller: require('../hello-world/hello-world.js')
        });
}

module.exports = helloWorldRoutes;