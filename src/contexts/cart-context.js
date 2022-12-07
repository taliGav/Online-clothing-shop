import { createContext, useState } from "react";

const addCartItem = (cartItems, itemToAdd) => {
  console.log("cartItems in add item func", cartItems);
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
  console.log("existingCartItem", existingCartItem);
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...itemToAdd, quantity: 1 }];
  }
};

const sumCartItems = (cartItems) => {
  return cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );
};

export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
  cartItems: [],
  setCartItems: () => null,
  itemsInCart: "",
  setItemsInCart: () => null,
});

export const CartStatusProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [itemsInCart, setItemsInCart] = useState("");

  const addItemToCart = (item) => {
    console.log("addItemToCart: ", item);
    const newCartItems = addCartItem(cartItems, item);
    console.log("newCartItems: ", newCartItems);
    setCartItems(newCartItems);
    // setCartItems(addCartItem(cartItems, item));
    console.log("cartItems: ", cartItems);
    setItemsInCart(sumCartItems(cartItems));
    console.log("cartItems: ", itemsInCart);

  };


  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart , itemsInCart };

  return <cartContext.Provider value={value}>{children}</cartContext.Provider>;
};
