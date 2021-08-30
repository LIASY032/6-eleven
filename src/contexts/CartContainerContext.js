import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { cartsType } from "../constants/localStorageType";

const CartContainerProvider = React.createContext();
export function useCart() {
  return useContext(CartContainerProvider);
}

function CartContainerContext({ children }) {
  const [carts, setCarts] = useLocalStorage(cartsType, []);
  function addItem(item, amount) {
    const isExist = checkExist(item._id);

    if (!isExist) {
      if (amount != null && amount !== undefined) {
        setCarts(carts.concat({ ...item, count: amount }));
      } else {
        setCarts(carts.concat({ ...item, count: 1 }));
      }
    }
  }

  function checkExist(_id) {
    let isExist = false;
    carts.forEach((x) => {
      if (x._id === _id) {
        isExist = true;
      }
    });
    return isExist;
  }

  function removeItem(_id) {
    const newCarts = carts.slice().filter((i) => i._id !== _id);

    setCarts(newCarts);
  }

  function setAmount(item, number) {
    const newCarts = carts.slice();
    newCarts.forEach((x) => {
      if (x._id === item._id) {
        x.count = number;
      }
    });
    setCarts(newCarts);
  }

  // function setItem(_id, amount){
  //   if ()
  // }

  return (
    <CartContainerProvider.Provider
      value={{ removeItem, addItem, carts, setAmount }}
    >
      {children}
    </CartContainerProvider.Provider>
  );
}

export default CartContainerContext;
