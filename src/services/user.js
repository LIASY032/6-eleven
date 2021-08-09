import axios from "axios";

export async function signIn(email, password) {
  try {
    const { data } = await axios.put("/users/" + email, { email, password });

    return data;
  } catch (ex) {
    console.log(ex);
  }
}
