import React, { useContext } from "react";
import { isRegister } from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";

const AccountProvider = React.createContext();

export function useResigeration() {
  return useContext(AccountProvider);
}

export function RegisterationContext({ children }) {
  const [isRegisteration, setIsRegisteration] = useLocalStorage(isRegister, 0);

  return (
    <AccountProvider.Provider value={{ isRegisteration, setIsRegisteration }}>
      {children}
    </AccountProvider.Provider>
  );
}

export default RegisterationContext;
