(function () {
    'use strict';

    angular.module('app.core', [

        /*
         * 3rd Party modules
         */
        'ui.router',
        'ui.grid',
        'ui.grid.resizeColumns',
        'ui.grid.selection',
        'ui.grid.exporter',
        'ngAnimate',

       /*
         * Reusable modules
         */
         'app.notification'

    ]);
})();