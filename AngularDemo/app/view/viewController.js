(function () {
    'use strict';

    angular
        .module('app.view')
        .controller('viewController', viewController);

    viewController.$inject = ['$timeout','view','notification'];

    function viewController($timeout, view, notification) {

        /* jshint validthis:true */
        var vm = this;
        vm.title;
        vm.activities;
        vm.selectedActivity;
        vm.activityTypes;
        vm.gridOptions;
        vm.activityTypeChanged;
        vm.filter;

        vm.updateActivity;

        activate();

        function activate() {

            vm.title = 'View Activities';
            loadActivities();
            loadActivityTypes();
            vm.activityTypeChanged = activityTypeChanged;   //is this needed???
            vm.gridOptions = setGridOptions();
            vm.filter = {
                type: ''
            }

            vm.updateActivity = updateActivity;
        }

        function loadActivities() {

            view.getActivities()
                .then(function (data) {
                    vm.gridOptions.data = data;

                    //auto select first row in grid
                        if (vm.gridApi.selection.selectRow) {
                            $timeout(function () {
                                vm.gridApi.selection.selectRow(vm.gridOptions.data[0]);
                            });
                        }
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

        function rowSelected(row) {
            vm.selectedActivity = row.entity;
        }

        function updateActivity() {
            notification.info("Demo app - changes not persisted", "Update Successful!");
        }

        function setGridOptions() {
            return {
                enableGridMenu: true,
                enableRowHeaderSelection: false,
                multiSelect: false,
                rowSelection: true,
                showGridFooter: false,
                exporterMenuPdf: false,
                enableHorizontalScrollbar: 0,
                exporterCsvFilename: 'Activity-Export.csv',
                onRegisterApi: function (gridApi) {
                    vm.gridApi = gridApi;
                    gridApi.selection.on.rowSelectionChanged(null, rowSelected);  //triggers callback when grid row selected/unselected
                },
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