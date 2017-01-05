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
                templateUrl: 'AngularJsDemo/app/add/add.html',
                controller: 'addController',
                controllerAs: 'vm'
            });
    }

    angular
      .module('app.add')
      .run([
       '$state', function ($state) {
           //include $state to kickstart it
       }
      ]);
})();