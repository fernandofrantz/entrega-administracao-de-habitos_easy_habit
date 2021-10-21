import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "../../Providers/User";
import { Link } from "react-router-dom";

export const FormLogin = () => {
  const { setAuth } = useUser();
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
  useEffect(() => {
    toast.error(errors.password?.message);
    toast.error(errors.username?.message);
  }, [errors]);

  return (
    <div className="formLogin">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          placeholder="Nome de usuario"
          type="text"
          {...register("username")}
        />
        <br />

        <input placeholder="Senha" type="password" {...register("password")} />

        <br />
        <button type="submit">Submit</button>
        <Link className="about" to="/about">
          <h3>About Us</h3>
        </Link>
      </form>
    </div>
  );
};
