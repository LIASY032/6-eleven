import { shoppingItems } from "../../services";
import { FETCH_ITEMS } from "../constants";

export const fetchItems = async (dispatch) => {
  const data = await shoppingItems();

  dispatch({
    type: FETCH_ITEMS,
    payload: data,
  });
};
