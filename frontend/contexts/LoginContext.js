import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { isLogin } from "../localStorageType/type";

const LoginProvider = React.createContext();

export function useIsLogin() {
  return useContext(LoginProvider);
}

export function LoginContext({ children }) {
  const [islogin, setIsChange] = useLocalStorage(isLogin, 0);

  return (
    <LoginProvider.Provider value={{ islogin, setIsChange }}>
      {children}
    </LoginProvider.Provider>
  );
}

export default LoginContext;
