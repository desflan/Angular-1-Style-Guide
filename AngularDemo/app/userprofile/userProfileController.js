(function () {
    'use strict';

    angular
        .module('app')
        .controller('userProfileController', userProfileController);
    
    function userProfileController() {

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'userProfileController';
        
        activate();

        function activate() {
            vm.user = {
                firstname: "Des",
                lastname: "Flanagan"
            };
        }
    }
})();