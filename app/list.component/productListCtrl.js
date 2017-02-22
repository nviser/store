angular.module('store').controller('productListCtrl', ['_products', '$route', '$scope', '$location',
    function (_products, $route, $scope, $location) {
        $scope.path = '../../assets/img/';
        $scope.products = JSON.parse(localStorage.getItem('products'));
        $scope.moveTo = function (item) {
            $location.path('/product/' + item.id);
        }
        $scope.delete = function (product) {
            console.log(e);
            var flag = confirm('Are you shure want to remove this product?');
            if(flag){
                var key = $scope.products.indexOf(product);
                $scope.products.splice(key, 1);
                var str = JSON.stringify($scope.products);
                localStorage.setItem('products', str);
            }

            }
    }]);