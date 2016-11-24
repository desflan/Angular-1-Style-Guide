(function () {
    'use strict';

    angular
        .module('app.add')
        .controller('addController', addController);


    addController.$inject = ['notification'];

    function addController(notification) {

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'addController';

        activate();

        function activate() {
            vm.name = "add";
            notification.info('Page', 'this is the add page');
        }
    }
})();