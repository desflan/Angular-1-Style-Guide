(function () {
    'use strict';

    angular
        .module('app.view')
        .factory('view', view);

    view.$inject = ['$http', '$q', 'constants'];

    function view($http, $q, constants) {
        var service = {
            getActivities: getActivities,
            getActivityTypes: getActivityTypes
        };

        return service;

        function getActivities() {
            
            var deferred = $q.defer();

            $http.get(constants.ActivitiesUrl)
                .then(function(response) {
                    deferred.resolve(response.data);
                    },
                    function(error) {
                        deferred.reject(error);
                    });

            return deferred.promise;
        }

        function getActivityTypes() {
            var deferred = $q.defer();

            $http.get(constants.ActivityTypesUrl)
                .then(function(response) {
                        deferred.resolve(response.data);
                    },
                    function(error) {
                        deferred.reject(error);
                    });

            return deferred.promise;
        }
    }
})();