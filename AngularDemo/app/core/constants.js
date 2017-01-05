(function () {

    'use strict';

    angular.module('app')
        .constant('configs',
        {
            "AppName": "Angular Demo",
            "ActivitiesUrl": "AngularJsDemo/app_data/activities.json",
            "ActivityTypesUrl": "AngularJsDemo/app_data/activityTypes.json"
        });
})();