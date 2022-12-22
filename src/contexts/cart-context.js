import { createContext, useReducer } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,

  cartItems: [],
  addItemToCart: () => null,
  removeItemFromCart: () => null,
  clearItemFromCart: () => null,

  cartCount: 0,
  totalPrice: 0,
});


const INITIAL_STATE = {
  cartItems: [],
  cartCount: 0,
  totalPrice: 0,
  isCartOpen: false,
};


export const CART_ACTION_TYPES = {
  SET_CART_ITEMS: "SET_CART_ITEMS",
  SET_IS_CART_OPEN: "SET_IS_CART_OPEN",
};


const cartReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_CART_ITEMS":
      return {
        ...state,
        ...payload,
      };

    case "SET_IS_CART_OPEN":
      return {
        ...state,
        ...payload,
      };  
  
    default:
      throw new Error(`Unexpected action type of: ${type} in cartReducer`);
  }
};




const addCartItem = (cartItems, itemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToAdd.id
  );
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

const removeCartItem = (cartItems, itemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === itemToRemove.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
  } else {
    return cartItems.map((cartItem) =>
      cartItem.id === itemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
  }
};

const clearCartItem = (cartItems, itemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== itemToRemove.id);
};





export const CartProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
  const { isCartOpen, cartItems, cartCount, totalPrice } = state;


  const setIsCartOpenReducer = (bool) =>
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: {isCartOpen: bool}
  });


  const setCartItemsReducer = (newCartItems) => {
  
     const newCartCount =  newCartItems.reduce(
        (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
        0
      );
    
    const newCartTotal = newCartItems.reduce(
        (accumulatedPrice, cartItem) =>
          accumulatedPrice + cartItem.quantity * cartItem.price,
        0
      );
      
    dispatch({
        type: CART_ACTION_TYPES.SET_CART_ITEMS,
        payload: {
          cartItems: newCartItems, cartCount:newCartCount,  totalPrice: newCartTotal
        }
      });
  };


  const toggleIsCartOpen = () => setIsCartOpenReducer(!isCartOpen);

  const addItemToCart = (itemToAdd) => {
    const newCartItems = addCartItem(cartItems, itemToAdd);
    setCartItemsReducer(newCartItems)
  };

  const removeItemFromCart = (itemToRemove) => {
    const newCartItems = removeCartItem(cartItems, itemToRemove);
    setCartItemsReducer(newCartItems)
  };

  const clearItemFromCart = (itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    setCartItemsReducer(newCartItems)
  };


  

  const value = {
    isCartOpen,
    toggleIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    totalPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
