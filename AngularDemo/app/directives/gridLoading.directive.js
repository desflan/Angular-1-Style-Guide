(function () {
    
    angular.module('app')
    .directive('gridLoading', gridLoading);

    function gridLoading() {
        return {
            restrict: 'C',
            require: '^uiGrid',
            link: function ($scope, $elm, $attrs, uiGridCtrl) {
                $scope.grid = uiGridCtrl.grid1;
            }
        }
    }


})();