import { useState } from "react";
import { api } from "../../Services/api";

const FormGoal = ({
  idGroup,
  idGoal,
  type,
  setGoals,
  goals,
  setShowForm,
  editable,
}) => {
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
    api
      .post(`/goals/`, data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setGoals([...goals, response.data]);
        setShowForm(false);
      })
      .catch((err) => console.log("nao criou"));
  };

  const editeGoal = () => {
    const data = {};
    if (title) data.title = title;
    if (dificult) data.difficulty = dificult;
    api
      .patch(`/goals/${idGoal}/`, data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        const newGols = goals.filter((item) => item.id !== idGoal);
        setGoals([...newGols, response.data]);
      })
      .catch((err) => console.log("deu erro"));
  };

  const deleteGoal = (goalId) => {
    api
      .delete(`/goals/${goalId}/`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        const newGols = goals.filter((item) => item.id !== goalId);
        setGoals([...newGols, response.data]);
      })
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
      {type === "register" ? null : (
        <button onClick={() => deleteGoal(idGoal)}>delete</button>
      )}
    </div>
  );
};

export default FormGoal;
