import axios from "axios";
export async function shoppingItems() {
  try {
    const response = await axios.get("/items", {
      //need a fix
      Accept: "application/json",
      "Content-Type": "application/json",
    });

    const data = await response.data;

    return data;
  } catch (ex) {
    console.log(ex);
  }
}

export function findItemById(items, id) {
  for (const item of items) {
    if (item._id === id) {
      return item;
    }
  }
}
