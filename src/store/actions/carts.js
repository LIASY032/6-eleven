import { CARTS } from "../constants";

export function setCarts(data) {
  return { type: CARTS, data };
}

export function getCarts() {}
