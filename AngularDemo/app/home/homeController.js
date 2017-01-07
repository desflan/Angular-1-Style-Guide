(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

     function homeController() {

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'homeController';

        activate();

        function activate() {
            vm.name = "home";
        }
    }
})();
