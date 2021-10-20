import { useContext, useState } from "react";
import { ActivityContext } from "../../Providers/Activity";
import FormActivities from "../FormActivities";

export const CardActivities = ({ item, editable }) => {

  const [showFormEdit, setShowFormEdit] = useState(false)

  const { deleteActivity } = useContext(ActivityContext)

  return (
    <div>
      <div>{item.title}</div>
      <p> { item.realization_time } </p>
      {editable && (
        <>
          <button onClick={() => setShowFormEdit(!showFormEdit)}> Editar </button>
          <button onClick={() => deleteActivity(item.id)}> Delete </button>
        </>
      )}

      
      {showFormEdit && <FormActivities idActivity={item.id} type={"edit"} />}
    </div>
  );
};

