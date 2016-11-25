﻿(function () {
    'use strict';

    angular
       .module('app')
       .config(['$stateProvider', '$urlRouterProvider', configRoutes]);

    function configRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home',
            {
                url: '/',
                templateUrl: '/app/home/home.html',
                controller: 'homeController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }

    angular
       .module('app')
       .run([
        '$state', function ($state) {
            //include $state to kickstart it
        }
       ]);
})();