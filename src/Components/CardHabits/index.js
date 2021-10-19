import { useState } from "react";
import { useHabits } from "../../Providers/Habits";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FormHabitsEdit } from "../EditHabts/Index";

export const CardHabits = ({ item, editable }) => {
  const [showForm, setShowForm] = useState(false);
  const { deleteHabits } = useHabits();
  return (
    <div>
      <h3>{item.category}</h3>
      <h2>{item.title}</h2>
      {showForm && <FormHabitsEdit idHabit={item.id} />}
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

// <Container>
//       <CategoryBox>{/* <h3>{item.category}</h3> */}</CategoryBox>
//       <h2>{item.title}</h2>
//       {/* {showForm && <FormHabits type={"edit"} idHabit={item.id} />} */}
//       {showForm && <FormCreateHabits type={"edit"} idHabit={item.id} />}
//       {editable && (
//         <buttonsBox>
//           <MdModeEdit onClick={() => setShowForm(!showForm)} />

//           <MdDelete onClick={() => deleteHabits(item.id)} />
//         </buttonsBox>
//       )}
//     </Container>
