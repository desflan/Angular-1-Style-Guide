(function () {
    'use strict';

    angular
        .module('app.view')
        .factory('view', view);

    view.$inject = ['$http', 'constants'];

    function view($http, constants) {
        var service = {
            getActivities: getActivities,
            getActivityTypes: getActivityTypes
        };

        return service;

        function getActivities() {

            return $http.get(constants.ActivitiesUrl)
                .then(getActivitiesComplete);
        }
        
        function getActivityTypes() {

            return $http.get(constants.ActivityTypesUrl)
                .then(getActivityTypesComplete);
        }

        function getActivitiesComplete(response) {
            return response.data;
        }

        function getActivityTypesComplete(response) {
            return response.data;
        }
    }
})();