//coffee : price_1NKvdHDnHuaRjBnMVmv0lNBa
//sunglasses: price_1NKveXDnHuaRjBnMrfUtqQPh
//camera: price_1NKvfaDnHuaRjBnMOXlrlLzA


const productsArray = [
    {
        id: 'price_1NKvdHDnHuaRjBnMVmv0lNBa',
        title: 'Coffee',
        price: 4.99

    },
    {
        id: 'price_1NKveXDnHuaRjBnMrfUtqQPh',
        title: 'Sunglasses',
        price: 9.99

    },
    {
        id: 'price_1NKvfaDnHuaRjBnMOXlrlLzA',
        title: 'Camera',
        price: 39.99

    }
]

function getProductData(id){
    let productData = productsArray.find(product => productData.id === id);
    if (productData == undefined){
        console.log("Product data does not exist for ID:" + id);
       return undefined;
    }
    return productData;
}

export { productsArray, getProductData };