const PRODUCTS = [
    {
        id: 100,
        name: 'Birthday cake',
        price: 35,
        image: require('../assets/Products/Birthday Cake.jpg'),
        description: 'A cake covered with colours made for boys.'
    },
    {
        id: 101,
        name: 'Chocolate Cake',
        price: 60,
        image: require('../assets/Products/Chocolate Cake.jpg'),
        description: 'Made out of Chocolate and skimmed milk.'
    },
    {
        id: 102,
        name: 'Colored Layer Cake',
        price: 20,
        image: require('../assets/Products/Colored Layer Cake.jpg'),
        description: 'A cake is a color-favoured cake designed to serve the whole crew.'
    },
    {
        id: 103,
        name: 'Rainbow Cake',
        price: 25,
        image: require('../assets/Products/Rainbow Cake.jpg'),
        description: 'A cake is a color-favoured cake designed to serve the whole crew.'
    },
    {
        id: 104,
        name: 'Raspberry Cake',
        price: 14,
        image: require('../assets/Products/Rainbow Cake.jpg'),
        description: 'A cake is a color-favoured cake designed to serve the whole crew.'
    },
    {
        id: 105,
        name: 'Unicorn Cake',
        price: 52,
        image: require('../assets/Products/Colored Layer Cake.jpg'),
        description: 'A cake is a color-favoured cake designed to serve the whole crew.'
    },
    {
        id: 106,
        name: 'Vanilla Cake',
        price: 2,
        image: require('../assets/Products/Vanilla Cake.jpg'),
        description: 'A cake is a color-favoured cake designed to serve the whole crew.'
    },
    {
        id: 107,
        name: 'Waffle Cake',
        price: 60,
        image: require('../assets/Products/Waffle Cake.jpg'),
        description: 'A cake is a color-favoured cake designed to serve the whole crew.'
    },
];

export function getProducts() {
    return PRODUCTS;
}

export function getProduct(id) {
    return PRODUCTS.find((product) => (product.id == id));
}