import axios from "axios";

const config = require("config");

export async function importItems() {
  try {
    const response = await axios.get(config.get("baseURL") + "/items");
    return response.data;
  } catch (ex) {
    console.log(ex);
  }
}
