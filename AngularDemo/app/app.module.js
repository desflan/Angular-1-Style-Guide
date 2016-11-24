
(function() {
    'use strict';

    angular.module('app',
    [
        'app.core',

        /*
         * Features
         */
        'app.add',
        'app.view'
    ]);

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
            })
        .state('view',
            {
                url: '/view',
                templateUrl: '/app/view/view.html',
                controller: 'viewController',
                controllerAs: 'vm'
            })
            .state('add',
            {
                url: '/add',
                templateUrl: '/app/add/add.html',
                controller: 'addController',
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