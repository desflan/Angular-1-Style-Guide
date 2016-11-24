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
                templateUrl: '/app/view/view.html',
                controller: 'viewController',
                controllerAs: 'vm'
            });
    }

    angular
      .module('app.view')
      .run([
       '$state', function ($state) {
           //include $state to kickstart it
       }
      ]);
})();