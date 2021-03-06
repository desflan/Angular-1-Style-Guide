﻿(function () {

    'use strict';

    angular.module('app.core')
    .config(configure);

    function configure(toastrConfig) {
        angular.extend(toastrConfig, {
            autoDismiss: false,
            containerId: 'toast-container',
            maxOpened: 1,
            newestOnTop: true,
            positionClass: 'toast-top-right',
            preventDuplicates: false,
            preventOpenDuplicates: false,
            target: 'body',
            timeOut: 5000,
            extendedTimeout: '0',
            closeButton: true
        });
    }
})();