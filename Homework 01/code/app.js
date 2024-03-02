function applyDiscounts(productArray,discountPercentage,productId){
    if(productArray.length === 0)return[];
    if(productId){
        let product = productArray.find(product => product.id === productId);
        if(!product)return "Error: Product isnth find with that ID ";
        let discountedPrice = product.price * (1 - discountPercentage / 100);
        return { ...product, price: discountedPrice };
    }
    return productArray.map(product => {
        if (product.price > 100) {
            let discountedPrice = product.price * (1 - discountPercentage / 100);
            return { ...product, price: discountedPrice };
        }
        return product;
    });
}
let products = [
    { id: 1, name: "Product A", price: 150 },
    { id: 2, name: "Product B", price: 90 },
    { id: 3, name: "Product C", price: 120 },
    { id: 4, name: "Product D", price: 80 },
    { id: 5, name: "Product E", price: 200 }
];
console.log(applyDiscounts(products, 10, 1));
console.log(applyDiscounts(products, 10));