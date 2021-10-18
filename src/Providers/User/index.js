import { createContext, useContext, useEffect, useState } from "react";

export const UserContext = createContext([]);

export const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);


  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("@EH"));
  // },[]);
  
//   const Login = () => {
//     const token = JSON.parse(localStorage.getItem("@EH"));

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
    <UserContext.Provider value={{ Login, Logout, auth, setAuth }}>
    {/* <UserContext.Provider value={{ Logout, auth, setAuth }}> */}
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
