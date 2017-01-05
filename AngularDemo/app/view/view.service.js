(function () {
    'use strict';

    angular
        .module('app.view')
        .factory('view', view);

    view.$inject = ['$http', '$q', 'configs'];

    function view($http, $q, configs) {
        var service = {
            getActivities: getActivities,
            getActivityTypes: getActivityTypes
        };

        return service;

        function getActivities() {
            
            var deferred = $q.defer();

            $http.get(configs.ActivitiesUrl)
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

            $http.get(configs.ActivityTypesUrl)
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