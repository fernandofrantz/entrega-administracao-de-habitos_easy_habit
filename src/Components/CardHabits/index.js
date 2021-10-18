import { useState } from "react";
import { useHabits } from "../../Providers/Habits";
import { FormHabits } from "../FormHabits";

export const CardHabits = ({ item, editable }) => {
  const [showForm, setShowForm] = useState(false);
  const { deleteHabits } = useHabits();
  return (
    <div>
      {item.title}
      {showForm && <FormHabits type={"edit"} idHabit={item.id} />}

      {editable && (
        <>
          <button onClick={() => setShowForm(!showForm)}>Editar</button>
          <button onClick={() => deleteHabits(item.id)}>exluir</button>
        </>
      )}
    </div>
  );
};
