import { useState } from "react";
import { useHabits } from "../../Providers/Habits";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { ButtonsBox, CategoryBox, Container } from "./styles";
import { FormCreateHabits } from "../FormCreateHabits";
export const CardHabits = ({ item, editable }) => {
  const [showForm, setShowForm] = useState(false);
  const { deleteHabits } = useHabits();
  return (
    <Container>
      <CategoryBox></CategoryBox>
      <h2>{item.title}</h2>
      {showForm && (
        <>
          <FormCreateHabits />
        </>
      )}
      {editable && (
        <ButtonsBox>
          <MdModeEdit onClick={() => setShowForm(!showForm)} />

          <MdDelete style={{marginLeft:'1rem'}} onClick={() => deleteHabits(item.id)} />
        </ButtonsBox>
      )}
    </Container>
  );
};
