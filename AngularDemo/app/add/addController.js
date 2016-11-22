(function () {
    'use strict';

    angular
        .module('app')
        .controller('addController', addController);

    function addController() {

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'addController';

        activate();

        function activate() {
            vm.name = "add";
        }
    }
})();