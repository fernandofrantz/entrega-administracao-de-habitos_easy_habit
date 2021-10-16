import axios from "axios";
import { useState } from "react";

const FormGoal = ({ idGroup, idGoal, type }) => {
  const [title, setTitle] = useState("");
  const [dificult, setDificult] = useState("");
  const token = JSON.parse(localStorage.getItem("@EH"));
  const createGoal = () => {
    const data = {
      title: title,
      difficulty: dificult,
      how_much_achieved: 100,
      group: idGroup,
    };

    axios
      .post(`https://kenzie-habits.herokuapp.com/goals/`, data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log("nao criou"));
  };

  const editeGoal = () => {
    const data = {};
    if (title) data.title = title;
    if (dificult) data.difficulty = dificult;
    console.log(data);
    axios
      .patch(`https://kenzie-habits.herokuapp.com/users/${idGoal}/`, data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => console.log(response.data))
      .catch((err) => console.log("deu erro"));
  };

  return (
    <div>
      <input
        placeholder="Titulo da Meta"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required={type === "register" ? true : false}
      />
      <input
        placeholder="Dificuldade"
        type="text"
        value={dificult}
        onChange={(event) => setDificult(event.target.value)}
        required={type === "register" ? true : false}
      />
      <button onClick={type === "register" ? createGoal : editeGoal}>
        {type === "register" ? "Cadastrar" : "Editar"}
      </button>
    </div>
  );
};

export default FormGoal;
