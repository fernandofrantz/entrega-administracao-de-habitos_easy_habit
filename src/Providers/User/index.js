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

  /* 
    const token = JSON.parse(localStorage.getItem("@ADM_HABIT:token"))||'';
    if (token) {
      setAuth(true);
    };
  */

  /* const history = useHistory();
  const Login = (data) => {
    console.log(data);
    api
      .post("/sessions/", data)
      .then((response) => {
        const token = response.data.access;
        localStorage.setItem("@EH", JSON.stringify(token));
        setAuth(true);
        history.push("/");
      })
      .catch(() => {
        toast.error("usuário não cadastrado ou senha inválida");
      });
  }; */

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
