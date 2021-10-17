import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast, ToastContainer } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
export const RegisterLots = ({ setAutenticaçao }) => {
  const formSchema = yup.object().shape({
    username: yup
      .string()
      .required("Nome obrigatorio")
      .matches("[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$", "Somente letras"),
    email: yup.string().required("Email Obrigatorio").email("E-mail invalido"),
    password: yup.string().required("Coloque a senha"),
    confirmPassword: yup.string().required("Voce deve confirmar a senha"),
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
    axios
      .post("https://kenzie-habits.herokuapp.com/users/", evts)
      .then((Result) => {
        console.log(Result);
        toast.success("Conta criada com sucesso!");
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
      <div className="Register">
        <ToastContainer />
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
    </div>
  );
};
