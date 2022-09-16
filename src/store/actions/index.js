export * from "./itemActions";
export * from "./userActions";
export * from "./modelControllerActions";

export function actionExceptionHandler(
  data,
  trueResult,
  ErrorResult,
  dispatch,
  afterExecution
) {
  if (data !== undefined && data != null && data !== "") {
    dispatch({
      type: trueResult,
      payload: data,
    });

    // if it has a function to be executed
    if (afterExecution) {
      afterExecution(data);
    }
  } else {
    dispatch({
      type: ErrorResult,
      payload: data,
    });
  }
}
