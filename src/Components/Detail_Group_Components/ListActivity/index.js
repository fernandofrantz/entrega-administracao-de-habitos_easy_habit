import { useContext, useState } from "react";
import { useParams } from "react-router";
import { CardActivities } from "../CardActivities";
import FormActivities from "../FormActivities";
import { ActivityContext } from "../../../Providers/Activity";
import { useGroups } from "../../../Providers/Groups";
import { MdCreateNewFolder } from "react-icons/md";
import { ActivityTitle, ChangeList, Section } from "./styles";
import { UlStyled } from "../../List/style";
import { FaExchangeAlt } from "react-icons/fa";

const ListActivity = ({ setIsGoals }) => {
  const { id } = useParams();

  const { activities, showFormActivity, setShowFormActivity } =
    useContext(ActivityContext);
  const { showOptionCreate } = useGroups();
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [idCardToEdit, setIdCardToEdit] = useState("");

  return (
    <Section>
      {showFormActivity ? (
        <FormActivities idGroup={id} type={"register"} />
      ) : showFormEdit ? (
        <FormActivities
          idActivity={idCardToEdit}
          type={"edit"}
          setShowFormEdit={setShowFormEdit}
        />
      ) : (
        <>
          <ActivityTitle>
            Activities
            {showOptionCreate && (
              <MdCreateNewFolder
                backgroundColor={"#ef7070"}
                style={{ position: "absolute", right: 0, marginRight: "16px" }}
                onClick={() => setShowFormActivity(!showFormActivity)}
              />
            )}
          </ActivityTitle>
          <ChangeList onClick={() => setIsGoals(true)}>
            Change to Goals
            <FaExchangeAlt />
          </ChangeList>

          <UlStyled>
            {activities.map((item) => (
              <li key={item.id}>
                <div>
                  <CardActivities
                    item={item}
                    editable={showOptionCreate}
                    setShowFormEdit={setShowFormEdit}
                    setIdCardToEdit={setIdCardToEdit}
                  />
                </div>
              </li>
            ))}
          </UlStyled>
        </>
      )}
    </Section>
  );
};

export default ListActivity;
