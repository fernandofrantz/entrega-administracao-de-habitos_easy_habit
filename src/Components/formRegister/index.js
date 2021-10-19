import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
import { useUser } from "../../Providers/User";
import { useHistory } from "react-router-dom";

 const RegisterLots = () => {
  const [names, setNames] = useState("");
  const [passwords, setPasswords] = useState("");
  const [emails, setEmails] = useState("");
  const { setAuth } = useUser();
  const history = useHistory();
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Name required")
      .matches("[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$", "Only letters"),
    email: yup.string().required("Email required").email("E-mail invalido"),
    password: yup
      .string()
      .required("Password required")
      .min(8, "Min 8 characters"),
    confirmPassword: yup
      .string()
      .required("Confirm your password")
      .oneOf([yup.ref("password")], "Passwords must match"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const send = (evt) => {
    const evts = {
      username: evt.username,
      email: evt.email,
      password: evt.password,
    };
    api
      .post("/users/", evts)
      .then((ob) => {
        toast.success("Account created successfully!");
        const ToLogin = { username: evt.username, password: evt.password };
        api.post("/sessions/", ToLogin).then((response) => {
          const token = response.data.access;

          history.push("/login");
        });
      })
      .catch((Result) => {
        toast.error(Result + "");
      });
  };
  useEffect(() => {
    toast.error(errors.username?.message);
    toast.error(errors.email?.message);
    toast.error(errors.password?.message);
    toast.error(errors.confirmPassword?.message);
  }, [errors]);
  return (
    <div className="Register">
      <h3>Formulario de inscrição</h3>
      <form className="form" onSubmit={handleSubmit(send)}>
        <input placeholder="Nome" {...register("username")} />
        <br />
        <input placeholder="E-mail" {...register("email")} />
        <br />
        <input
          placeholder="Senha"
          type="password"
          maxLength="18"
          {...register("password")}
        />
        <br />
        <input
          placeholder="Confirmar Senha"
          type="password"
          maxLength="18"
          {...register("confirmPassword")}
        />
        <br />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default RegisterLots;
