import axios from "axios";

export async function fetchItems() {
  try {
    const response = await axios.get("/items");
    return response.data;
  } catch (ex) {
    console.log(ex);
  }
}
