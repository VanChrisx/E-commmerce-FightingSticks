import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    let exist = isInCart(product.id);

    if (exist) {
      let newCart = cart.map((e) => {
        if (e.id === product.id) {
          return {
            ...e,
            quantity: product.quantity,
          };
        } else {
          return e;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, product]);
    }
  };

  const isInCart = (id) => {
    return cart.some((e) => e.id === id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const getQuantityById = (id) => {
    const prodSelected = cart.find((e) => e.id === id);
    return prodSelected?.quantity;
  };

  const getTotalQuantity = () => {
    return cart.reduce((acc, e) => {
      return acc + e.quantity;
    }, 0);
  };
  const getTotalPrice = () => {
    let totalPrice = cart.reduce((acc, e) => {
      return acc + e.quantity * e.price;
    }, 0);

    return totalPrice;
  };

  const deleteElementById = (id) => {
    const newCart = cart.filter((e) => e.id !== id);
    setCart(newCart);
  };

  let data = {
    cart,
    getQuantityById,
    addToCart,
    getTotalQuantity,
    getTotalPrice,
    clearCart,
    deleteElementById,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
