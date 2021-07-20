import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { cartsType } from "../localStorageType/type";

const CartContainerProvider = React.createContext();
export function useCart() {
  return useContext(CartContainerProvider);
}

function CartContainerContext({ children }) {
  const [carts, setCarts] = useLocalStorage(cartsType, []);
  function addItem(item, amount) {
    const isExist = checkExist(item.id);

    if (!isExist) {
      if (amount != null || amount !== undefined) {
        setCarts(carts.concat({ ...item, count: amount }));
      } else {
        setCarts(carts.concat({ ...item, count: 1 }));
      }
    }
  }

  function checkExist(id) {
    let isExist = false;
    carts.forEach((x) => {
      if (x.id === id) {
        isExist = true;
      }
    });
    return isExist;
  }

  function removeItem(id) {
    const newCarts = carts.slice().filter((i) => i.id !== id);
    console.log(newCarts);

    setCarts(newCarts);
  }

  function addAmount(id, number) {
    // const newCarts = carts.slice().forEach((c) => {
    //   if (c.id === id) {
    //     c.count = c.count + number;
    //   }
    // });

    // setCarts(newCarts);
    const isExist = checkExist(id);
    if (isExist) {
      const newCarts = carts.slice().forEach((i) => {
        if (i.id === id) {
          id.count = id.count - number;
        }
      });
      setCarts(newCarts);
    }
  }

  function deleteAmount(id, number) {
    const isExist = checkExist(id);
    if (isExist) {
      const newCarts = carts.slice();
      for (var i in carts) {
        if (i.id === id) {
          i.count = i.count + number;
        }
      }
      setCarts(newCarts);
    }
  }

  return (
    <CartContainerProvider.Provider
      value={{ removeItem, addItem, carts, addAmount, deleteAmount }}
    >
      {children}
    </CartContainerProvider.Provider>
  );
}

export default CartContainerContext;
