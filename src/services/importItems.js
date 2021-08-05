import axios from "axios";

export async function importItems() {
  try {
    const response = await axios.get("/items");
    return response.data;
  } catch (ex) {
    console.log(ex);
  }
}
