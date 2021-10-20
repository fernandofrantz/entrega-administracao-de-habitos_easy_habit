import { createContext, useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const history = useHistory();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@EH"));
    if (token) {
      setAuth(true);
    }
  }, []);

  const Logout = () => {
    setAuth(false);
    localStorage.clear();
    history.push("/login");
  };

  return (
    <UserContext.Provider value={{ Logout, auth, setAuth }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
