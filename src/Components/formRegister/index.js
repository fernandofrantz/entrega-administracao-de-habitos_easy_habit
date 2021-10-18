import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";
import { api } from "../../Services/api";
import { toast } from "react-toastify";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../../Providers/User";

export const FormRegister = ({ type }) => {
  const [nameuser, setNameuser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [idUser, setIdUser] = useState("");
  const { setAuth } = useUser();

  const history = useHistory();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@EH")) || "";
    if (token) {
      const decoded = jwt_decode(token);
      setIdUser(decoded.user_id);
    }
  }, []);

  const login = (data) => {
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
  };

  const register = () => {
    const user = {};
    nameuser ? (user.username = nameuser) : toast.error("nome obrigatoria");
    password ? (user.password = password) : toast.error("senha obrigatoria");
    email ? (user.email = email) : toast.error("email obrigatoria");

    if (nameuser && password && email) {
      api
        .post("/users/", user)
        .then((response) => login(user))
        .catch((err) => console.log("deu erro"));
    }
  };

  const edit = () => {
    const token = JSON.parse(localStorage.getItem("@EH"));
    const user = {};
    if (nameuser) user.username = nameuser;
    if (email) user.email = email;

    api
      .path(`/users/${idUser}/`, user, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => toast.success("Dados auterados"))
      .catch((err) => toast.error("Não foi possivel modificar os dados"));
  };

  return (
    <div>
      <input
        placeholder="nome de usuario"
        type="text"
        value={nameuser}
        onChange={(event) => setNameuser(event.target.value)}
        required={type === "register" ? true : false}
      />
      <input
        placeholder="email"
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required={type === "register" ? true : false}
      />
      {type === "register" && (
        <input
          placeholder="senha"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required
        />
      )}
      <button onClick={type === "register" ? register : edit}>
        {type === "register" ? "Cadastrar" : "Editar"}
      </button>
    </div>
  );
};
