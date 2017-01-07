(function () {
    'use strict';

    angular
       .module('app')
       .config(['$stateProvider', '$urlRouterProvider', configRoutes]);

    function configRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home',
            {
                url: '/',
                templateUrl: 'AngularJsDemo/app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }
  
})();