import React from "react";
import CartContainerContext from "./CartContainerContext";

export default function AllContexts({ children }) {
  return <CartContainerContext>{children}</CartContainerContext>;
}

export * from "./CartContainerContext";
