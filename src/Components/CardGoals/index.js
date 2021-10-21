import { useContext, useState } from "react";
import { GoalsContext } from "../../Providers/Goals";
import FormGoal from "../FormGoals";

export const CardGoals = ({ item, editable }) => {
  const [showFormEdit, setShowFormEdit] = useState(false);

  const { deleteGoal } = useContext(GoalsContext);

  return (
    <div>
      <div>{item.title}</div>
      {editable && (
        <>
          <button onClick={() => setShowFormEdit(!showFormEdit)}>Edit</button>
          <button onClick={() => deleteGoal(item.id)}>Delete</button>
        </>
      )}
      {showFormEdit && <FormGoal idGoal={item.id} type={"edit"} />}
    </div>
  );
};
