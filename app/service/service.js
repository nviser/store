angular.module('store').factory('storeFactory', storeFactory);
    function storeFactory () {
        factory = [
            {
                id: 1,
                name: "Trainers",
                description: "Light and cosy",
                price: 100,
                img: "trainers.jpg"
            },
            {
                id: 2,
                name: "Jeans",
                description: "Comfortable to wear",
                price: 120,
                img: "jeans.jpg"
            },
            {
                id: 3,
                name: "Trousers",
                description: "Good fashioned",
                price: 95,
                img: "trousers.jpg"

            }
        ]
        return factory;
    };
