import { useState } from "react";
import { useHabits } from "../../Providers/Habits";
import { FormHabits } from "../FormHabits";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

export const CardHabits = ({ item, editable }) => {
  const [showForm, setShowForm] = useState(false);
  const { deleteHabits } = useHabits();
  return (
    <div>
      <h3>{item.category}</h3>
      <h2>{item.title}</h2>
      {showForm && <FormHabits type={"edit"} idHabit={item.id} />}

      {editable && (
        <>
         <Link to={`/habit/${item.id}`}>
                      <MdModeEdit onClick={() => setShowForm(!showForm)}/>
                    </Link>
                    <MdDelete onClick={()=>deleteHabits(item.id)}/>
          {/* <button onClick={() => setShowForm(!showForm)}>Editar</button> */}
          {/* <button onClick={() => deleteHabits(item.id)}>exluir</button> */}
        </>
      )}
    </div>
  );
};
