import React from "react";
import CartContainerContext from "./CartContainerContext";
import ItemDetailsContext from "./ItemDetailsContext";
import LoginContext from "./LoginContext";
import RegistrationContext from "./RegistrationContext";

export default function AllContexts({ children }) {
  return (
    <CartContainerContext>
      <ItemDetailsContext>
        <LoginContext>
          <RegistrationContext>{children}</RegistrationContext>
        </LoginContext>
      </ItemDetailsContext>
    </CartContainerContext>
  );
}

export * from "./CartContainerContext";
export * from "./ItemDetailsContext";
export * from "./LoginContext";
export * from "./RegistrationContext";
