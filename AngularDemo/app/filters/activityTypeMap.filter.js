

(function () {

    'use strict';

    angular.module('app')
        .filter('activityTypeMap',
            function () {
                var mapping = {
                    1: 'Run',
                    2: 'Cycle',
                    3: 'Swim'
                };

                return function (input) {
                    if (input === undefined) {
                        return '';
                    } else {
                        var result = mapping[input];
                        return result;
                    }
                };
            });
})();