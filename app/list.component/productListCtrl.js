angular.module('productListCtrl', ['store']).controller('productListCtrl', ['storeFactory', '$route', '$scope', '$location', 
    function (factory, $route, $scope, $location) {
        console.log('PLC started');
    }]);