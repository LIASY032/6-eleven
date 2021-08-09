import React from "react";
import CartContainerContext from "./CartContainerContext";
import ItemDetailsContext from "./ItemDetailsContext";
import LoginContext from "./LoginContext";

export default function AllContexts({ children }) {
  return (
    <CartContainerContext>
      <ItemDetailsContext>
        <LoginContext>{children}</LoginContext>
      </ItemDetailsContext>
    </CartContainerContext>
  );
}

export * from "./CartContainerContext";
export * from "./ItemDetailsContext";
export * from "./LoginContext";
