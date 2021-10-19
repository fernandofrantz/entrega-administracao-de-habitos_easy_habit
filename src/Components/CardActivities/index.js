import { useState } from "react";
import FormActivities from "../FormActivities";

export const CardActivities = ({ item, editable }) => {

  const [showFormEdit, setShowFormEdit] = useState(false)

  return (
    <div>
      <h4>{item.title}</h4>
      <p> {item.realization_time} </p>
      {editable && (
        <button onClick={() => setShowFormEdit(!showFormEdit)}>
          Editar
        </button>
      )}


      {showFormEdit && (
        <FormActivities
          idActivity={item.id}
          type={"edit"}
        />
      )}
    </div>
  );
};

