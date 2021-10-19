import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const ActivityContext = createContext();

export const ActivityProvider = ({ children }) => {
  const [title, setTitle] = useState("");
  const [realizationTime, setRealizationTime] = useState("");
  const [activities, setActivities] = useState([]);
  const [showFormActivity, setShowFormActivity] = useState(false)

  const token = JSON.parse(localStorage.getItem("@EH")) || "";

  const createActivity = (idGroup) => {
    const newActivity = {
      title: title,
      realization_time: realizationTime,
      group: idGroup,
    };

    api
      .post("/activities/", newActivity, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setActivities([...activities, res.data]);
        toast.success("Atividade criada com sucesso!");
        setShowFormActivity(false)
      })
      .catch((_) => toast.error("Não foi possível criar a atividade"));
  };

  const editActivity = (idActivity) => {
    const data = {};
    if (title) data.title = title;
    if (realizationTime) data.realization_time = realizationTime;

    api
      .patch(
        `/activities/${idActivity}/`, data, {
          headers: { Authorization: "Bearer " + token }
        }
      )
      .then((res) => {
        const edited = activities.filter((item) => item.id !== idActivity);
        setActivities([...edited, res.data]);
        toast.success("Atividade editada com sucesso!");
      })
      .catch((_) => toast.error("Não foi possível editar a atividade"));
  };

  const deleteActivity = (idActivity) => {
    api
      .delete(`/activities/${idActivity}/`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((_) => {
        const deleted = activities.filter(item => item.id !== idActivity)
        setActivities([...deleted]);
        toast.success("Atividade excluída");
      })
      .catch((_) => toast.error("Não foi possível deletar a atividade"));
  };

  return (
    <ActivityContext.Provider
      value={{
        activities,
        setActivities,
        createActivity,
        editActivity,
        deleteActivity,
        setTitle,
        setRealizationTime,
        showFormActivity,
        setShowFormActivity,
      }}
    >
      {children}
    </ActivityContext.Provider>
  );
};
