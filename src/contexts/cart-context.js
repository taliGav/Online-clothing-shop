import { createContext, useState} from "react";


export const cartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => null,
});

export const CartStatusProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return (
    <cartContext.Provider value={value}>
      {children}
    </cartContext.Provider>
  );
};
