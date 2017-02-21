angular.module('store').controller('productCtrl', ['storeFactory', '$route', '$scope', '$location', '$routeParams',
    function (factory, $route, $scope, $location, $routeParams) {
        $scope.editProduct = $scope.saved = false;
        var id = $routeParams['id'];
        var products = JSON.parse(localStorage.getItem('products'));
        angular.forEach(products, function (value, key) {
            if (value.id == id) {
                $scope.product = value;
                $scope.key = key;
            }
        });
        $scope.edit = function() {
            $scope.editProduct = true;
            $scope.saved = false;
        }
        $scope.addProd = function(arg){
        if($scope.product.id && $scope.product.name && $scope.product.description && $scope.product.price){
            $scope.notification = false;
        var newProd = {
            id: $scope.product.id,
            name: $scope.product.name,
            description: $scope.product.description,
            price: $scope.product.price
        };
        products.splice($scope.key, 1, newProd);
        var str = JSON.stringify(products);
        localStorage.setItem('products', str);
        $scope.editProduct = false;
        $scope.saved = true;
        } else {
            $scope.notification = true;
        }
       }
    }]);