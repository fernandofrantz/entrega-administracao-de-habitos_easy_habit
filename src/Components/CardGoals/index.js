import { useContext, useState } from "react";
import { GoalsContext } from "../../Providers/Goals";
import FormGoal from "../FormGoals";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { ButtonsBox} from "../Habits_Components/Card_Unit_Habit/styles";
import { Container } from "../DetailsGroup/styles"

export const CardGoals = ({ item, editable }) => {
  const [showFormEdit, setShowFormEdit] = useState(false);

  const { deleteGoal } = useContext(GoalsContext);

  return (
    <Container>
      <h2>{item.title}</h2>
      {editable && (
        <ButtonsBox>
          <MdModeEdit onClick={() => setShowFormEdit(!showFormEdit)} />
          <MdDelete style={{ marginLeft: "1rem" }} onClick={() => deleteGoal(item.id)} />
        </ButtonsBox>
      )}
      {showFormEdit && <FormGoal idGoal={item.id} type={"edit"} />}
    </Container>
  );
};
