(function () {
    'use strict';

    angular
        .module('app.view')
        .controller('viewController', viewController);

    viewController.$inject = ['$timeout','view','notification'];

    function viewController($timeout, view, notification) {

        var vm = this;
        vm.title;
        vm.activities;
        vm.activityTypes;
        vm.clearFilter;
        vm.doFilter;
        vm.filter;
        vm.gridIsLoading;
        vm.gridOptions;
        vm.selectedActivity;
        vm.updateActivity;


        activate();

        function activate() {

            vm.title = 'View Activities';
            loadActivities();
            loadActivityTypes();
            vm.gridOptions = setGridOptions();
            vm.filter = {
                type: ''
            };
            vm.gridIsLoading = true;

            vm.updateActivity = updateActivity;
            vm.doFilter = doFilter;
            vm.clearFilter = clearFilter;
        }

        function loadActivities() {

            view.getActivities()
                .then(function(data) {
                    vm.gridOptions.data = data;
                    vm.activities = data;
                    vm.gridIsLoading = false;

                    //auto select first row in grid
                    if (vm.gridApi.selection.selectRow) {
                        $timeout(function() {
                            vm.gridApi.selection.selectRow(vm.gridOptions.data[0]);
                        });
                    }
                })
                .catch(function(error) {
                    notification.error("Error retrieving activities. Message: " + error.statusText);
                });
        }

        function loadActivityTypes() {

            view.getActivityTypes()
                .then(function(data) {
                    vm.activityTypes = data;
                })
                .catch(function(error) {
                    notification.error("Error retrieving activity types. Message: " + error.statusText);
                });
        }

        function rowSelected(row) {
            vm.selectedActivity = row.entity;
        }

        function updateActivity() {
            notification.info("Demo app - changes not persisted", "Update Successful!");
        }

        function doFilter()
        {
            var data = [];
            angular.forEach(vm.activities,
                function (item) {
                    if (item.type === vm.filter.type) {
                        data.push(item);
                    }
                });
           
            vm.gridOptions.data = data;
        }

        function clearFilter() {
            vm.gridOptions.data = vm.activities;
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
                        cellFilter: 'activityTypeMap',
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
    }

    
})();