import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { cartsType } from "../localStorageType/type";

const CartContainerProvider = React.createContext();
export function useCart() {
  return useContext(CartContainerProvider);
}

function CartContainerContext({ children }) {
  const [carts, setCarts] = useLocalStorage(cartsType, []);
  function addItem(item) {
    setCarts(carts.concat(item));
  }

  function removeItem(id) {
    setCarts(carts.map((i) => i.id !== id));
  }

  return (
    <CartContainerProvider.Provider value={{ removeItem, addItem, carts }}>
      {children}
    </CartContainerProvider.Provider>
  );
}

export default CartContainerContext;
