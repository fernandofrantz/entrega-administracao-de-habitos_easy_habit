import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { api } from "../../Services/api";

export const FormLogin = () => {
  //const { setAuth } = useContext("userContext");
  const [auth, setAuth] = useState(false);
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    const user = { username: userName, password: password };
    api
      .post("/sessions/", user)
      .then((response) => {
        const token = response.data.access;
        localStorage.setItem("@EH", token);
        setAuth(true);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <input
        placeholder="Nome de usuario"
        type="text"
        value={userName}
        onChange={(event) => setUsername(event.target.value)}
        required
      />
      <input
        placeholder="Senha"
        type="text"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        required
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};
