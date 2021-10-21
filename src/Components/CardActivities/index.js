import { useContext, useState } from "react";
import { ActivityContext } from "../../Providers/Activity";
import { ButtonsBox } from "../CardHabits/styles";
import { Container } from "../DetailsGroup/styles"
import { MdModeEdit, MdDelete } from "react-icons/md";
import FormActivities from "../FormActivities";

export const CardActivities = ({ item, editable }) => {

  const [showFormEdit, setShowFormEdit] = useState(false)

  const { deleteActivity } = useContext(ActivityContext)

  return (
    <Container>
      <h2>{item.title}</h2>
      {editable && (
        <ButtonsBox>
          <MdModeEdit onClick={() => setShowFormEdit(!showFormEdit)} />
          <MdDelete style={{ marginLeft: "1rem" }} onClick={() => deleteActivity(item.id)} />
        </ButtonsBox>
      )}


      {showFormEdit && <FormActivities idActivity={item.id} type={"edit"} />}
    </Container>
  );
};

