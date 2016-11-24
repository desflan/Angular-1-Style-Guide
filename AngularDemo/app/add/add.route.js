(function () {
    'use strict';

    angular
       .module('app.add')
       .config(['$stateProvider', configRoutes]);

    function configRoutes($stateProvider) {

        $stateProvider
            .state('add',
            {
                url: '/add',
                templateUrl: '/app/add/add.html',
                controller: 'addController',
                controllerAs: 'vm'
            });
    }
})();