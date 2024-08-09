import { createContext, useState } from "react";

export const Context = createContext();

export default function ContextProvider({ children }) {
  const [loginModal, setLoginModal] = useState(false);

  const contextValue = { loginModal, setLoginModal };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
}
