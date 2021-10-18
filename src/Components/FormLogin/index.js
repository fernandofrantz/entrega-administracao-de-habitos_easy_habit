import axios from "axios";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../Providers/User";

//import { api } from "../../Services/api";

export const FormLogin = () => {
  const { setAuth } = useUser();
  //const [auth, setAuth] = useState(false);
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome de usuário obrigatório"),
    password: yup.string().required("senha obrigatoria"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleLogin = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/sessions/", data)
      .then((response) => {
        const token = response.data.access;

        localStorage.clear();
        localStorage.setItem("@EH", JSON.stringify(token));
        setAuth(true);
        history.push("/");
      })
      .catch(() => {
        toast.error("usuário não cadastrado ou senha inválida");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          placeholder="Nome de usuario"
          type="text"
          {...register("username")}
        />
        {errors.username?.message}
        <input placeholder="Senha" type="text" {...register("password")} />
        {errors.password?.message}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
