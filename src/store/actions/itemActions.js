import { shoppingItems } from "../../services";
import { FETCH_ITEMS, FETCH_ITEMS_ERROR } from "../../constants";

export const fetchItems = async (dispatch) => {
  const data = await shoppingItems();

  if (data !== undefined && data != null && data !== "") {
    dispatch({
      type: FETCH_ITEMS,
      payload: data,
    });
  } else {
    dispatch({
      type: FETCH_ITEMS_ERROR,
    });
  }
};
