angular.module('store').controller('productCtrl', ['storeFactory', '$route', '$scope', '$location', '$routeParams',
    function (factory, $route, $scope, $location, $routeParams) {
        var id = $routeParams['id'];
        var products = JSON.parse(localStorage.getItem('products'));
        angular.forEach(products, function (value, key) {
            if (value.id == id) {
                $scope.product = value;
            }
        });
    }]);