// import { useState } from "react";
// import { useHabits } from "../../Providers/Habits";
// import { FormHabits } from "../FormHabits";

// export const CardHabits = ({ item, editable }) => {
//   const [showForm, setShowForm] = useState(false);
//   const { deleteHabits } = useHabits();
//   return (
//     <div>
//       {item.title}
//       {showForm && <FormHabits type={"edit"} idHabit={item.id} />}

//       {editable && (
//         <>
//           <button onClick={() => setShowForm(!showForm)}>Editar</button>
//           <button onClick={() => deleteHabits(item.id)}>exluir</button>
//         </>
//       )}
//     </div>
//   );
// };

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
          <div>
            <MdModeEdit onClick={() => setShowForm(!showForm)} />
          </div>
          <div>
            <MdDelete onClick={() => deleteHabits(item.id)} />
          </div>
        </>
      )}
    </div>
  );
};
