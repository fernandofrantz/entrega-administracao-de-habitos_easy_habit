import { useContext } from "react";
import { MdCreateNewFolder } from "react-icons/md";
import { useParams } from "react-router";
import { GoalsContext } from "../../Providers/Goals";
import { useGroups } from "../../Providers/Groups";
import { CardGoals } from "../CardGoals";
import FormGoal from "../FormGoals";
import { GoalTitle } from "./styles";

const ListGoals = () => {
  const { id } = useParams();

  const { goals, showForm, setShowForm } = useContext(GoalsContext);
  const { showOptionCreate } = useGroups()

  return (
    <>
     <GoalTitle> 
       Goals

       {showOptionCreate && (
        <MdCreateNewFolder 
          backgroundColor={"#87c3d6"}
          style={{ position: "absolute", right: 0, marginRight: "16px"}} 
          onClick={() => setShowForm(!showForm)} 
        />
      )} 
      </GoalTitle >
      <ul>
        {goals.map((item, index) => (
          <li key={index}>
            <div>
              <CardGoals item={item} editable={showOptionCreate} />
            </div>
          </li>
        ))}
      </ul>

      
      
      {showForm && (
        <FormGoal idGroup={id} type={"register"} setShowForm={setShowForm} />
      )}
    </>
  );
};

export default ListGoals;
