angular.module('store').controller('productListCtrl', ['_products', '$route', '$scope', '$location',
    function (_products, $route, $scope, $location) {
        $scope.products = JSON.parse(localStorage.getItem('products'));
        $scope.moveTo = function (item) {
            $location.path('/product/' + item.id);
        }
        $scope.edit = function () {
            $location.path('/create');
        }
    }]);