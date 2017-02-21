angular.module('store').factory('saveFactory', saveFactory);
function saveFactory(id, name, descr, price) {
    factory = [

        
            /*{
                id: id,
                name: name,
                description: description,
                price: price
            }*/
            // $scope.products = JSON.parse(localStorage.getItem('products'));
            // $scope.products.push(newProd);
            // var str = JSON.stringify($scope.products);
            // localStorage.setItem('products', str);
        
    ]
    return factory;
}