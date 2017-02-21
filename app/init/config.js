angular.module('store').config(['$routeProvider',
  function ($routeProvider) {
      $routeProvider
          .when('/', {
              templateUrl: "app/list.component/products.html",
              controller: "productListCtrl"
          })
          .when('/product/:id', {
              templateUrl: "app/list.component/product.html",
              controller: "productCtrl"
          }).otherwise({
              redirectTo: "/"
          })      
  }]);