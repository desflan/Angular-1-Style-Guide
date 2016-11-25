(function () {
    'use strict';

    angular.module('app.core', [

        /*
         * 3rd Party modules
         */
        'ui.router',
        'ui.grid',
        'ui.grid.resizeColumns',
        'ngAnimate',

       /*
         * Reusable modules
         */
         'app.notification'

    ]);
})();