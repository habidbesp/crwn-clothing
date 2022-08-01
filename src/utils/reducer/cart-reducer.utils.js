export const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(({ id }) => id === productToAdd.id);

  return existingCartItem
    ? cartItems.map((product) =>
        product.id === productToAdd.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    : [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const substractCartItem = (cartItems, productToSubstract) => {
  if (productToSubstract.quantity === 1) {
    return cartItems.filter(({ id }) => id !== productToSubstract.id);
  }
  return cartItems.map((product) =>
    product.id === productToSubstract.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};

export const removeItemFromCart = (cartItems, productToRemove) =>
  cartItems.filter(({ id }) => id !== productToRemove.id);
