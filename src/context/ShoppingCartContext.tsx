import { ReactNode, createContext, useContext } from 'react';

type ShoppingCartProviderProps ={
    children: ReactNode
}



const ShoppingCartContext = createContext({});

//This is the radio
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}


//The radio station... broadcasts said radio signal
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
