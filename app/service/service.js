angular.module('store').factory('storeFactory', storeFactory);
    function storeFactory () {
        factory = [
            {
                id: 1,
                name: "Trainers",
                description: "Light and cosy"
            },
            {
                id: 2,
                name: "Jeans",
                description: "Comfortable to weare"
            },
            {
                id: 3,
                name: "Trousers",
                description: "Good fashioned"
            }
        ]
        return factory;
    }