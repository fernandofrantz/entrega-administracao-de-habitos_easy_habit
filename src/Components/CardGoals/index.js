import { useState } from "react";
import FormGoal from "../FormGoals";

export const CardGoals = ({ item, setGoals, goals, editable }) => {
  const [showFormEditar, setShowFormEditar] = useState(false);
  return (
    <div>
      <div>{item.title}</div>
      {editable && (
        <button onClick={() => setShowFormEditar(!showFormEditar)}>
          Editar
        </button>
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
