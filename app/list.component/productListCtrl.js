angular.module('store').controller('productListCtrl', ['$route', '$scope', '$location', 
    function (factory, $route, $scope, $location) {
        console.log('PLC started');
    }]);

angular.module('store').controller('productCtrl', ['$route', '$scope', '$location', 
    function (factory, $route, $scope, $location) {
        console.log('PC started');
    }]);