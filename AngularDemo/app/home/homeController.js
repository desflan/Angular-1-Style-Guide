(function () {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

     homeController.$inject = ['notification'];

     function homeController(notification) {

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'homeController';

        activate();

        function activate() {
            vm.name = "home";
        }
    }
})();
