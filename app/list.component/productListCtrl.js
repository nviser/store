angular.module('store').controller('productListCtrl', ['_products', '$route', '$scope', '$location',
    function (_products, $route, $scope, $location) {
        // localStorage.setItem('products', JSON.sringify(_products));
        // var str = JSON.sringify(_products);
        // console.log(JSON.stringify(_products));
        // localStorage.setItem('products', str);
        $scope.products = JSON.parse(localStorage.getItem('products'));
        $scope.moveTo = function (item) {
            $location.path('/product/' + item.id);
        }
    }]);