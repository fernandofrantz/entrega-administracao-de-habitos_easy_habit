// import { useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
// import { api } from "../../Services/api";
// import { toast } from "react-toastify";
// import { useHistory } from "react-router";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import * as yup from "yup";
// import { useUser } from "../../Providers/User";

// export const FormRegister = ({ type }) => {
//   const [nameuser, setNameuser] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [idUser, setIdUser] = useState("");
//   const { setAuth } = useUser();

//   const history = useHistory();

//   useEffect(() => {
//     const token = JSON.parse(localStorage.getItem("@EH")) || "";
//     if (token) {
//       const decoded = jwt_decode(token);
//       setIdUser(decoded.user_id);
//     }
//   }, []);

//   const login = (data) => {
//     api
//       .post("/sessions/", data)
//       .then((response) => {
//         const token = response.data.access;
//         localStorage.setItem("@EH", JSON.stringify(token));
//         setAuth(true);
//         history.push("/");
//       })
//       .catch(() => {
//         toast.error("usuário não cadastrado ou senha inválida");
//       });
//   };

//   const register = () => {
//     const user = {};
//     nameuser ? (user.username = nameuser) : toast.error("nome obrigatoria");
//     password ? (user.password = password) : toast.error("senha obrigatoria");
//     email ? (user.email = email) : toast.error("email obrigatoria");

//     if (nameuser && password && email) {
//       api
//         .post("/users/", user)
//         .then((response) => login(user))
//         .catch((err) => console.log("deu erro"));
//     }
//   };

//   const edit = () => {
//     const token = JSON.parse(localStorage.getItem("@EH"));
//     const user = {};
//     if (nameuser) user.username = nameuser;
//     if (email) user.email = email;

//     api
//       .path(`/users/${idUser}/`, user, {
//         headers: { Authorization: "Bearer " + token },
//       })
//       .then((response) => toast.success("Dados auterados"))
//       .catch((err) => toast.error("Não foi possivel modificar os dados"));
//   };

//   // const formSchema = yup.object().shape({
//   //   nname: yup.string().min(8),
//   //   eemail: yup.string().email(),
//   //   ppassword: yup
//   //     .string()
//   //     .matches(
//   //       /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
//   //       "Should contain at least one letter, one number and a symbol."
//   //     ),
//   // });

//   // const {
//   //   register,
//   //   handleSubmit,
//   //   formState: { errors },
//   // } = useForm({ resolver: yupResolver(formSchema) });

//   return (
//     <div>
//       <input
//         placeholder="username"
//         type="text"
//         value={nameuser}
//         onChange={(event) => setNameuser(event.target.value)}
//         required={type === "register" ? true : false}
//       />
//       <input
//         placeholder="email"
//         type="text"
//         value={email}
//         onChange={(event) => setEmail(event.target.value)}
//         required={type === "register" ? true : false}
//       />
//       {type === "register" && (
//         <input
//           placeholder="senha"
//           type="password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//           required
//         />
//       )}
//       <button onClick={type === "register" ? register : edit} type="submit">
//         {type === "register" ? "Cadastrar" : "Editar"}
//       </button>
//     </div>
//   );
// };

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

export default RegisterLots;
