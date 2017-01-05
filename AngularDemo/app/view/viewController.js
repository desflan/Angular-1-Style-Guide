(function () {
    'use strict';

    angular
        .module('app.view')
        .controller('viewController', viewController);

    viewController.$inject = ['view','notification'];

    function viewController(view, notification) {

        /* jshint validthis:true */
        var vm = this;
        vm.title;
        vm.activities;
        vm.activityTypes;
        vm.success;
        vm.error;
        vm.gridOptions;
        vm.activityTypeChanged;
        vm.filter;

        activate();
      // loadActivities();   loadActivities();  //put this into activate???

        function activate() {

            vm.title = 'View Activities';
           // vm.activityTypes = [{ Id: 1, Name: "None" }, { Id: 2, Name: "Run" }, { Id: 3, Name: "Cycle" }, { Id: 4, Name: "Swim" }];
            loadActivities();
            loadActivityTypes();
            vm.activityTypeChanged = activityTypeChanged;
            vm.success = false;
            vm.error = false;
            vm.gridOptions = setGridOptions();
            vm.filter = {
                type: '',
                name: ''
            }
        }

        function loadActivities() {

            view.getActivities()
                .then(function (data) {
                        vm.activities = data;
                    },
                    function (error) {
                        notification.error(error.statusText);
                    }
                );
        }

        function loadActivityTypes() {

            view.getActivityTypes()
                .then(function(data) {
                        vm.activityTypes = data;
                    },
                    function(error) {
                        notification.error(error.statusText);
                    });

        }

        function setGridOptions() {
            return {
                data: 'vm.activities',
                enableGridMenu: true,
                enableRowHeaderSelection: false,
                multiSelect: false,
                rowSelection: true,
                showGridFooter: false,
                exporterMenuPdf: false,
                exporterCsvFilename: 'Activity-Export.csv',
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


        function activityTypeChanged(type) {
           vm.filter.type = type;
        }
    }

    
})();