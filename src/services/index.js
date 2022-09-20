export * from "./shoppingItems";
export * from "./user";

export function exceptionHandler(callback, errorCallback) {
  try {
    return callback();
  } catch (ex) {
    console.log(ex.response);
    console.log("====================================");
    console.log(ex.response.data);
    console.log("====================================");

    if (errorCallback) {
      errorCallback(ex);
    }
  }
}
