import { useState } from "react";
import { api } from "../../Services/api";
import FormGoal from "../FormGoals";

export const CardGoals = ({ item, setGoals, goals, editable }) => {
  const [showFormEditar, setShowFormEditar] = useState(false);
  const token = JSON.parse(localStorage.getItem("@EH")) || "";

  const deleteGoal = (goalId) => {
    api
      .delete(`/goals/${goalId}/`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        const newGols = goals.filter((item) => item.id !== goalId);

        setGoals([...newGols]);
      })
      .catch((err) => console.log("deu erro"));
  };

  return (
    <div>
      <div>{item.title}</div>
      {editable && (
        <>
          <button onClick={() => setShowFormEditar(!showFormEditar)}>
            Editar
          </button>
          <button onClick={() => deleteGoal(item.id)}>delete</button>
        </>
      )}
      {showFormEditar && (
        <FormGoal
          idGoal={item.id}
          type={"edit"}
          setGoals={setGoals}
          goals={goals}
        />
      )}
    </div>
  );
};
