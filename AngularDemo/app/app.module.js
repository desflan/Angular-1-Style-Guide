//'use strict';

//var app = angular.module('app', [
//    'ui.router',
//    'ui.grid'
//]);

(function() {
    'use strict';

    angular.module('app',
    [
        'app.core'
    ]);

    angular
       .module('app')
       .config(['$stateProvider', '$urlRouterProvider', configRoutes]);

    function configRoutes($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('home',
            {
                url: '/home',
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
           //include $route to kickstart the router
       }
    ]);

})();