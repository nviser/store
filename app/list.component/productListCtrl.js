angular.module('store').controller('productListCtrl', ['_products', '$route', '$scope', '$location',
    function (_products, $route, $scope, $location) {
        $scope.products = JSON.parse(localStorage.getItem('products'));
        $scope.moveTo = function (item) {
            $location.path('/product/' + item.id);
        }
        $scope.delete = function (product) {
            var key = $scope.products.indexOf(product);
            $scope.products.splice(key, 1);
            var str = JSON.stringify($scope.products);
            localStorage.setItem('products', str);
        }
    }]);