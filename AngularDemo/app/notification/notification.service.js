(function () {
    'use strict';

    angular
        .module('app.notification')
        .factory('notification', notification);

    notification.$inject = ['toastr'];

    function notification(toastr) {
        var service = {
            error: error,
            info: info,
            success: success,
            warning: warning
        };

        return service;
        /////////////////////

        function error(message, title) {
            toastr.error(message, title);
        }

        function info(message, title) {
            toastr.info(message, title);
        }

        function success(message, title) {
             toastr.success(message, title);
        }

        function warning(message, title) {
            toastr.warning(message, title);
        }
    }
}());