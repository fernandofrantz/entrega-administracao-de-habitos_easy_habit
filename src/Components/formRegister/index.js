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

export const RegisterLots = () => {
  const [names, setNames] = useState("");
  const [passwords, setPasswords] = useState("");
  const [emails, setEmails] = useState("");
  const { setAuth } = useUser();
  const history = useHistory()


  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome obrigatorio")
      .matches("[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$", "Somente letras"),
    email: yup.string().required("Email Obrigatorio").email("E-mail invalido"),
    password: yup.string().required("Coloque a senha"),
    confirmPassword: yup.string().required("Você deve confirmar a senha"),
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
        toast.success("Conta criada com sucesso!");
        const ToLogin = { username: evt.username, password: evt.password };
        api.post("/sessions/", ToLogin).then((response) => {
          const token = response.data.access;
          console.log(token);
          localStorage.clear();
          localStorage.setItem("@EH", JSON.stringify(token));
          setAuth(true);
          history.push("/");
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
    <div>
      {localStorage.getItem("@EH") === null ? (
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
      ) : (
        <div className="Edit">
          <form
            onSubmit={(evt) => {
              evt.preventDefault();
              const modifItem = {
                username: names,
                password: passwords,
                email: emails,
              };
              const Token = JSON.parse(localStorage.getItem("@EH"));
              const decode = jwt_decode(Token).user_id;
              api
                .patch(`/users/${decode}/`, modifItem, {
                  headers: { Authorization: `Bearer ${Token}` },
                })
                .then((_) => {
                  toast.success("Modificado com sucesso");
                });
            }}
          >
            <input
              type="text"
              placeholder="Editar Nome"
              name="username"
              onChange={(evt) => setNames(evt.target.value)}
            />
            <input
              type="text"
              placeholder="Editar Senha"
              name="password"
              onChange={(evt) => setPasswords(evt.target.value)}
            />
            <input
              type="text"
              placeholder="editar email"
              name="email"
              onChange={(evt) => setEmails(evt.target.value)}
            />
            <button type="submit">Editar</button>
          </form>
        </div>
      )}{" "}
    </div>
  );
};
