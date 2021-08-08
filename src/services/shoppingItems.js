import axios from "axios";

export async function shoppingItems() {
  try {
    const response = await axios.get("/items", {
      //need a fix
      headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
    });

    const data = await response.data;

    console.log(data);
    return data;
  } catch (ex) {
    console.log(ex);
  }
}
