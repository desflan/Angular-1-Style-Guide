(function () {
    'use strict';

    angular
        .module('app.view')
        .controller('viewController', viewController);

    viewController.$inject = ['notification'];

    function viewController(notification) {

        /* jshint validthis:true */
        var vm = this;
        vm.title = 'View Activities';
        vm.activities;
        vm.success;
        vm.error;
        vm.gridOptions;

        activate();

        function activate() {

            vm.name = "activity";
            vm.success = false;
            vm.error = false;
            vm.gridOptions = setGridOptions();
            vm.activities = [
                { name: "Royal National Park", type: "Cycling", start: "01/11/2016 6:10AM", duration: "3 hours 16 mins", distance: "112.5km", comments: "hill workout" },
                { name: "Bondi to Coogee", type: "Run", start: "05/11/2016 7:13PM", duration: "42 mins", distance: "11.6km", comments: "focus on speed" }
            ];
        }
    }

    function setGridOptions() {
        return {
            data: 'vm.activities',
            enableGridMenu: true,
            enableRowHeaderSelection: false,
            multiSelect: false,
            rowSelection: true,
            showGridFooter: false,
            columnDefs: [
                {
                    field: 'name',
                    displayName: 'Name',
                    enableSorting: true,
                    enableHiding: true,
                    width: '20%'
                },
                {
                    field: 'type',
                    displayName: 'Type',
                    enableSorting: true,
                    enableHiding: true,
                    width: '10%'
                },
                {
                    field: 'start',
                    displayName: 'Start',
                    enableSorting: true,
                    enableHiding: true,
                    width: '20%'
                },
                {
                    field: 'duration',
                    displayName: 'Duration',
                    enableSorting: true,
                    enableHiding: true,
                    width: '20%'
                },
                {
                    field: 'distance',
                    displayName: 'Distance',
                    enableSorting: true,
                    enableHiding: true,
                    width: '10%'
                },
                {
                    field: 'comments',
                    displayName: 'Comments',
                    enableSorting: true,
                    enableHiding: true,
                    width: '20%'
                }
            ]
        };
    }
})();