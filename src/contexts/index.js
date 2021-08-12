import React from "react";
import CartContainerContext from "./CartContainerContext";
import ItemDetailsContext from "./ItemDetailsContext";
import LoginContext from "./LoginContext";
import RegisterationContext from "./RegisterationContext";

export default function AllContexts({ children }) {
  return (
    <CartContainerContext>
      <ItemDetailsContext>
        <LoginContext>
          <RegisterationContext>{children}</RegisterationContext>
        </LoginContext>
      </ItemDetailsContext>
    </CartContainerContext>
  );
}

export * from "./CartContainerContext";
export * from "./ItemDetailsContext";
export * from "./LoginContext";
export * from "./RegisterationContext";
