(function () {

    angular.module('app')
    .directive('gridLoading', function () {
        return {
            restrict: 'C',
            require: '^uiGrid',
            link: function ($scope, $elm, $attrs, uiGridCtrl) {
                $scope.grid = uiGridCtrl.grid;
            }
        }
    });


})();