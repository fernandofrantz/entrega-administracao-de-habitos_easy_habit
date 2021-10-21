import { useState } from "react";
import { useHabits } from "../../Providers/Habits";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { ButtonsBox, CategoryColor, Container } from "./styles";
// import { FormCreateHabits } from "../FormCreateHabits";
import { FormHabitsEdit } from "../EditHabts/Index";
import FormEditHabits from "../EditHabits";

export const CardHabits = ({ item, editable, backGroundColor }) => {
  const [showForm, setShowForm] = useState(false);
  const { deleteHabits } = useHabits();
  return (
    <Container>
      <CategoryColor backGroundColor={backGroundColor} />
      <h2>{item.title}</h2>
      {showForm && (
        <FormEditHabits
          type={"edit"}
          idHabit={item.id}
          setShowForm={setShowForm}
        />
      )}
      {editable && (
        <ButtonsBox>
          <MdModeEdit onClick={() => setShowForm(!showForm)} />

          <MdDelete
            style={{ marginLeft: "1rem" }}
            onClick={() => deleteHabits(item.id)}
          />
        </ButtonsBox>
      )}
    </Container>
  );
};
