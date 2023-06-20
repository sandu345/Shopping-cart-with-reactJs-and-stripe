import { createContext, useState } from "react";
import { productsArray, getProductData } from "./productsStore";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOnetoCart: () => {},
  removeOneFromcart: () => {},
  deleteFromcart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);

  // [{ id: 1, quantity: 2}]
  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }

  function addOnetoCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      // product is not in cart.
      setCartProducts([
        ...cartProducts, //bring all the elements in cart to the front
        {
          id: id,
          quantity: 1,
        },
      ]);
    } else {
      // product is in the cart
      // [{ id: 1, quantity: 3 }, { id; 2, quantity: 1 }]   add to product id of 2
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    }
  }

  function removeOneFromcart(id) {
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromcart(id);
    } else {
      setCartProducts(
        cartProducts.map((product) =>
          product.id === id
            ? { ...product, quantity: product.quantity - 1 }
            : product
        )
      );
    }
  }

  function deleteFromcart(id) {
    // [] if ann object meets a condition, add the object to array
    // [product1, product2, product3]     want to remove product2
    // [product1, product3]
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  function getTotalCost() {
    let totalCost = 0;
    cartProducts.map((cartItem) => {
      const productData = getProductData(cartItem.id);
      totalCost += productData.price * cartItem.quantity;
    });
    return totalCost;
  }

  const contextvalue = {
    items: [],
    getProductQuantity,
    addOnetoCart,
    removeOneFromcart,
    deleteFromcart,
    getTotalCost,
  };

  return (
    <CartContext.Provider value={contextvalue}>{children}</CartContext.Provider>
  );
}

export default CartProvider;

// Context (cart, addTo Cart, removeCart)
// Provider -> gives your React app access to all the things in your context.
