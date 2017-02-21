angular.module('store').controller('productListCtrl', ['storeFactory', '$route', '$scope', '$location',
    function (factory, $route, $scope, $location) {
        console.log('PLC started');
        console.log(factory);
        $scope.items = factory;
        $scope.moveTo = function (item) {
            $location.path('/product/' + item.id);
        }
    }]);

angular.module('store').controller('productCtrl', ['storeFactory', '$route', '$scope', '$location', '$routeParams',
    function (factory, $route, $scope, $location, $routeParams) {
        console.log('PC started');
        var id = $routeParams['id'];
        var products = factory;
        angular.forEach(products, function (value, key) {
            if (value.id == id) {
                $scope.product = value;
            }
        });
    }]);