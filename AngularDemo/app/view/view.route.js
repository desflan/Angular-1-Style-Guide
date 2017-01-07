(function () {
    'use strict';

    angular
       .module('app.view')
       .config(['$stateProvider', configRoutes]);

    function configRoutes($stateProvider) {

        $stateProvider
            .state('view',
            {
                url: '/view',
                templateUrl: 'AngularJsDemo/app/view/view.html',
                controller: 'viewController',
                controllerAs: 'vm'
            });
    }

   
})();