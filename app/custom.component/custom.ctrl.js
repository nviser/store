angular.module('store').controller('customCtrl', ['storeFactory', '$route', '$scope', '$location', '$routeParams',
    function (factory, $route, $scope, $location, $routeParams) {
           $scope.notification = false;
           //$scope.products = [];
       $scope.addProd = function(arg){
        if($scope.id && $scope.name && $scope.description && $scope.price){
            $scope.notification = false;
        var newProd = {
            id: $scope.id,
            name: $scope.name,
            description: $scope.description,
            price: $scope.price
        };
        $scope.products = JSON.parse(localStorage.getItem('products'));
        $scope.products.push(newProd);
        var str = JSON.stringify($scope.products);
        localStorage.setItem('products', str);
        } else {
            $scope.notification = true;
        }
       }
    }]);