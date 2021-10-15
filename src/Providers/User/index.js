import { createContext, useContext, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);

  const Login = () => {
    const token = JSON.parse(localStorage.getItem("@ADM_HABIT:token"));
    if (token) {
      setAuth(true);
    }
  };

  const Logout = () => {
    setAuth(false);
    localStorage.clear();
  };



  return (
    <UserContext.Provider value={{ Login, Logout, auth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
