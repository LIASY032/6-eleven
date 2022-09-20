import axios from "axios";

import { exceptionHandler } from ".";
export function shoppingItems() {
  return exceptionHandler(async () => {
    const response = await axios.get("/items", {
      //need a fix
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    const data = await response.data;

    return data;
  });
}

export function findItemById(items, id) {
  for (const item of items) {
    if (item._id === id) {
      return item;
    }
  }
}
