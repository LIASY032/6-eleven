import axios from "axios";

export async function importItems() {
  try {
    const response = await axios.get("/items", {
      //need a fix
      headers: { "Access-Control-Allow-Origin": "http://localhost:3000" },
    });

    return response.data;
  } catch (ex) {
    console.log(ex);
  }
}
