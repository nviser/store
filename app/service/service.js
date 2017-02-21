angular.module('store').factory('storeFactory', storeFactory);
    function storeFactory () {
        factory = [
            {
                id: 1,
                name: "Trainers",
                description: "Light and cosy",
                price: 100
            },
            {
                id: 2,
                name: "Jeans",
                description: "Comfortable to wear",
                price: 120
            },
            {
                id: 3,
                name: "Trousers",
                description: "Good fashioned",
                price: 95
            }
        ]
        return factory;
    };
