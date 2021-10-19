import { useState } from "react";
import { useHabits } from "../../Providers/Habits";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { buttonsBox, CategoryBox, Container } from "./styles";
import { FormCreateHabits } from "../FormCreateHabits";
export const CardHabits = ({ item, editable }) => {
  const [showForm, setShowForm] = useState(false);
  const { deleteHabits } = useHabits();
  return (
    <Container>
      <CategoryBox>{/* <h3>{item.category}</h3> */}</CategoryBox>
      <h2>{item.title}</h2>
      {showForm && (
        <>
          <FormCreateHabits />
        </>
      )}
      {editable && (
        <buttonsBox>
          <MdModeEdit onClick={() => setShowForm(!showForm)} />

          <MdDelete onClick={() => deleteHabits(item.id)} />
        </buttonsBox>
      )}
    </Container>
  );
};
