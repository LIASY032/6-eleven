import React, { useContext } from "react";
import { isRegister } from "../constants";
import useLocalStorage from "../hooks/useLocalStorage";

const AccountProvider = React.createContext();

export function useRegistration() {
  return useContext(AccountProvider);
}

export function RegistrationContext({ children }) {
  const [isRegistration, setIsRegistration] = useLocalStorage(isRegister, 0);

  return (
    <AccountProvider.Provider value={{ isRegistration, setIsRegistration }}>
      {children}
    </AccountProvider.Provider>
  );
}

export default RegistrationContext;
