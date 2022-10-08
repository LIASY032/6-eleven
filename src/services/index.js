import DeviceDetector from "device-detector-js";

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

const ua = navigator.userAgent;
const deviceDetector = new DeviceDetector();
const device = deviceDetector.parse(ua);
export const deviceString = `${device.device.type} ${device.device.brand} ${device.os.name} ${device.os.version}`;
