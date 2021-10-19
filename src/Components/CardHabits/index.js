import { useState } from "react";
import { useHabits } from "../../Providers/Habits";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FormHabitsEdit } from "../EditHabts/Index";
import { Container, buttonsBox, CategoryBox } from "./styles";

export const CardHabits = ({ item, editable }) => {
  const [showForm, setShowForm] = useState(false);
  const { deleteHabits } = useHabits();
  return (
    <Container>
      <CategoryBox>
        <h3>{item.category}</h3>
      </CategoryBox>
      <h2>{item.title}</h2>
      {showForm && <FormHabitsEdit type={"edit"} idHabit={item.id} />}
      {editable && (
        <buttonsBox>
          <MdModeEdit onClick={() => setShowForm(!showForm)} />

          <MdDelete onClick={() => deleteHabits(item.id)} />
        </buttonsBox>
      )}
    </Container>
  );
};
