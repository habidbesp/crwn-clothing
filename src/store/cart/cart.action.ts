import { CategoryItem } from "../categories/category.types";

import { CART_ACTION_TYPES, CartItem } from "./cart.types";

import {
  createAction,
  withMatcher,
  ActionWithPayload,
} from "../../utils/reducer/reducer.utils";

// ****************************************************************************************
// utils
const addCartItem = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
): CartItem[] => {
  const existingCartItem = cartItems.find(({ id }) => id === productToAdd.id);

  return existingCartItem
    ? cartItems.map((product) =>
        product.id === productToAdd.id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    : [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
): CartItem[] => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (existingCartItem && existingCartItem.quantity === 1) {
    return cartItems.filter(({ id }) => id !== cartItemToRemove.id);
  }
  return cartItems.map((product) =>
    product.id === cartItemToRemove.id
      ? { ...product, quantity: product.quantity - 1 }
      : product
  );
};

const clearCartItem = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
): CartItem[] =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// ****************************************************************************************
// types
export type SetIsCartOpen = ActionWithPayload<
  CART_ACTION_TYPES.SET_IS_CART_OPEN,
  boolean
>;

export type SetCartItems = ActionWithPayload<
  CART_ACTION_TYPES.SET_CART_ITEMS,
  CartItem[]
>;
// ******************************************************************************************

// actions

export const setIsCartOpen = withMatcher(
  (boolean: boolean): SetIsCartOpen =>
    createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean)
);

export const setCartItems = withMatcher(
  (cartItems: CartItem[]): SetCartItems =>
    createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems)
);

export const addItemToCart = (
  cartItems: CartItem[],
  productToAdd: CategoryItem
) => {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
};

export const removeItemFromCart = (
  cartItems: CartItem[],
  cartItemToRemove: CartItem
) => {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
};

export const clearItemFromCart = (
  cartItems: CartItem[],
  cartItemToClear: CartItem
) => {
  const newCartItems = clearCartItem(cartItems, cartItemToClear);
  return setCartItems(newCartItems);
};
