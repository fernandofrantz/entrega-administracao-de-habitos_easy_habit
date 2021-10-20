import { useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
import { Form } from "./styles";

const EditProfile = () => {
  const [names, setNames] = useState("");
  const [passwords, setPasswords] = useState("");
  const [emails, setEmails] = useState("");

  return (
    <div className="Edit">
      <Form
        onSubmit={(evt) => {
          evt.preventDefault();
          const modifItem = {
            username: names,
            password: passwords,
            email: emails,
          };
          if (modifItem.username === "") delete modifItem.username;
          if (modifItem.password === "") delete modifItem.password;
          if (modifItem.email === "") delete modifItem.email;
          // console.log(modifItem);
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
      </Form>
    </div>
  );

  //   return (
  //     <div className="Edit">
  //       <form
  //         onSubmit={(evt) => {
  //           evt.preventDefault();
  //           const modifItem = {
  //             username: names,
  //             password: passwords,
  //             email: emails,
  //           };
  //           const Token = JSON.parse(localStorage.getItem("@EH"));
  //           const decode = jwt_decode(Token).user_id;
  //           api
  //             .patch(`/users/${decode}/`, modifItem, {
  //               headers: { Authorization: `Bearer ${Token}` },
  //             })
  //             .then((_) => {
  //               toast.success("Modificado com sucesso");
  //             });
  //         }}
  //       >
  //         <input
  //           type="text"
  //           placeholder="Editar Nome"
  //           name="username"
  //           onChange={(evt) => setNames(evt.target.value)}
  //         />
  //         <input
  //           type="text"
  //           placeholder="Editar Senha"
  //           name="password"
  //           onChange={(evt) => setPasswords(evt.target.value)}
  //         />
  //         <input
  //           type="text"
  //           placeholder="editar email"
  //           name="email"
  //           onChange={(evt) => setEmails(evt.target.value)}
  //         />
  //         <button type="submit">Editar</button>
  //       </form>
  //     </div>
  //   );
};

export default EditProfile;
