import React, { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(({ id }) => id === productToAdd.id);

  return existingCartItem
    ? cartItems.map((product) =>
        product.id === productToAdd.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    : [...cartItems, { ...productToAdd, quantity: 1 }];
};

const substractCartItem = (cartItems, productToSubstract) => {
  if (productToSubstract.quantity === 1) {
    return cartItems.filter(({ id }) => id !== productToSubstract.id);
  }
  return cartItems.map((product) =>
    product.id === productToSubstract.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};

const removeItemFromCart = (cartItems, productToRemove) =>
  cartItems.filter(({ id }) => id !== productToRemove.id);

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  substractItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => (total += cartItem.quantity * cartItem.price),
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const substractItemFromCart = (productToSubstract) => {
    setCartItems(substractCartItem(cartItems, productToSubstract));
  };
  const removeCartItem = (productToRemove) => {
    setCartItems(removeItemFromCart(cartItems, productToRemove));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    substractItemFromCart,
    cartCount,
    setCartCount,
    removeCartItem,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
