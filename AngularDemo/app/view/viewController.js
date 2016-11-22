(function () {
    'use strict';

    angular
        .module('app')
        .controller('viewController', viewController);

    function viewController() {

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'viewController';

        activate();

        function activate() {
            vm.name = "view";
        }
    }
})();