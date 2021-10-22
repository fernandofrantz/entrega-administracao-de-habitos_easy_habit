import { useContext, useState } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import { useParams } from "react-router";
import { GoalsContext } from "../../../Providers/Goals";
import { useGroups } from "../../../Providers/Groups";
import { CardGoals } from "../CardGoals";
import FormGoal from "../FormGoals";
import { UlStyled } from "../../List/style";
import { ChangeList, GoalTitle, Section } from "./styles";
import { FaExchangeAlt } from "react-icons/fa";

const ListGoals = ({ setIsGoals }) => {
  const { id } = useParams();

  const { goals, showForm, setShowForm } = useContext(GoalsContext);
  const { showOptionCreate } = useGroups();
  const [showFormEdit, setShowFormEdit] = useState(false);
  const [ idCardToEdit, setIdCardToEdit ] = useState("");


  return (
    <Section>
      {showForm ? (
        <FormGoal idGroup={id} type={"register"} setShowForm={setShowForm} />
       ) : 
     showFormEdit ? <FormGoal idGoal={idCardToEdit} type={"edit"} setShowFormEdit={setShowFormEdit}/>
       : (
        <>
          <GoalTitle>
            Goals
            {showOptionCreate && (
              <MdCreateNewFolder
                backgroundColor={"#87c3d6"}
                style={{ position: "absolute", right: 0, marginRight: "16px" }}
                onClick={() => setShowForm(!showForm)}
              />
            )}
          </GoalTitle>
          <ChangeList onClick={() => setIsGoals(false)}>
            Change to Activities
            <FaExchangeAlt />
          </ChangeList>
          <UlStyled>
            {goals.map((item, index) => (
              <li key={index}>
                <div>
                  <CardGoals item={item} editable={showOptionCreate} setShowFormEdit={setShowFormEdit} setIdCardToEdit={setIdCardToEdit}/>
                </div>
              </li>
            ))}
          </UlStyled>
        </>
      )}
    </Section>
  );
};

export default ListGoals;
