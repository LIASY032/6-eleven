export * from "./itemActions";
export * from "./userActions";
export * from "./modelControllerActions";

export function actionExceptionHandler(
  data,
  trueResult,
  ErrorResult,
  dispatch
) {
  if (data !== undefined && data != null && data !== "") {
    dispatch({
      type: trueResult,
      payload: data,
    });
  } else {
    dispatch({
      type: ErrorResult,
      payload: data,
    });
  }
}
