(function () {
    'use strict';

    angular
        .module('app.view')
        .controller('viewController', viewController);

    viewController.$inject = ['notification'];

    function viewController(notification) {

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'viewController';

        activate();

        function activate() {
            vm.name = "view";
            notification.info('Page', 'this is the view page');
        }
    }
})();