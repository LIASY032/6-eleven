import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { cartsType } from "../constants/localStorageType";

const CartContainerProvider = React.createContext();
export function useCart() {
  return useContext(CartContainerProvider);
}

function CartContainerContext({ children }) {
  const [carts, setCarts] = useLocalStorage(cartsType, []);

  // add an item in the cart
  function addItem(item, amount) {
    const isExist = checkExist(item._id);

    if (!isExist) {
      // check the amount
      if (amount != null && amount !== undefined) {
        setCarts(carts.concat({ ...item, count: amount }));
      } else {
        // default amount is one
        setCarts(carts.concat({ ...item, count: 1 }));
      }
    }
  }

  // check shopping items existing in the cart
  function checkExist(_id) {
    let isExist = false;
    carts.forEach((x) => {
      if (x._id === _id) {
        isExist = true;
      }
    });
    return isExist;
  }

  // remove an item from the cart

  function removeItem(_id) {
    const newCarts = carts.slice().filter((i) => i._id !== _id);

    setCarts(newCarts);
  }

  // when the amount changed, update, the user is able to see it in cart
  function setAmount(item, number) {
    const newCarts = carts.slice();
    newCarts.forEach((x) => {
      if (x._id === item._id) {
        x.count = number;
      }
    });
    setCarts(newCarts);
  }

  return (
    <CartContainerProvider.Provider
      value={{ removeItem, addItem, carts, setAmount }}
    >
      {children}
    </CartContainerProvider.Provider>
  );
}

export default CartContainerContext;
