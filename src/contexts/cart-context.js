import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  if (existingCartItem) {
    // return updateCartItemQty(cartItems, itemToAdd, 1);
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

// const updateCartItemQty = (cartItems, currItem , delta) =>
//   cartItems.map((cartItem) =>
//   cartItem.id === currItem.id
//     ? { ...cartItem, quantity: cartItem.quantity + delta }
//     : cartItem
// )

const sumCartItems = (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

const calcTotalPrice = (cartItems) =>
  cartItems.reduce(
    (accumulatedPrice, cartItem) =>
      accumulatedPrice + cartItem.quantity * cartItem.price,
    0
  );

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  cartItemsCount: 0,
  setCartItemsCount: () => null,
  totalPrice: 0,
  setTotalPrice: () => null,
});

export const CartStatusProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    setCartItemsCount(sumCartItems(cartItems));
    setTotalPrice(calcTotalPrice(cartItems));
  }, [cartItems]);

  const toggleCartDropdown = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addItemToCart = (item) => {
    setCartItems(addCartItem(cartItems, item));
  };

  const updateCartItemQty = (currItem, delta) =>
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === currItem.id
          ? { ...cartItem, quantity: cartItem.quantity + delta }
          : cartItem
      )
    );

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartItemsCount,
    toggleCartDropdown,
    totalPrice,
    updateCartItemQty,
  };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
