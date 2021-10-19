import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const GoalsContext = createContext();

export const GoalsProvider = ({ children }) => {

    const [title, setTitle] = useState("");
    const [dificult, setDificult] = useState("");
    const [goals, setGoals] = useState([]);
    const [showForm, setShowForm] = useState(false)

    const token = JSON.parse(localStorage.getItem("@EH"));

    const createGoal = (idGroup) => {

        const data = {
            title: title,
            difficulty: dificult,
            how_much_achieved: 100,
            group: idGroup,
        };
        
        api
          .post(`/goals/`, data, {
                headers: { Authorization: "Bearer " + token },
          })
          .then((res) => {
                setGoals([...goals, res.data]);
                setShowForm(false);
                toast.success("Meta criada com sucesso!")
          })
          .catch((_) => toast.error("Não foi possível criar a meta."));
      };

      const editGoal = (idGoal) => {
            const data = {};
            if (title) data.title = title;
            if (dificult) data.dificult = dificult;
        
            api
                .patch(`/goals/${idGoal}/`, data, {
                    headers: { Authorization: "Bearer " + token },
                })
                .then((res) => {
                    const newGols = goals.filter(item => item.id !== idGoal);
                    setGoals([...newGols, res.data]);
                    toast.success("Meta editada com sucesso!")
                })
                .catch((_) => toast.error("Não foi possível editar a meta."));
        };

        const deleteGoal = (goalId) => {
            api
                .delete(`/goals/${goalId}/`, {
                    headers: { Authorization: "Bearer " + token },
                })
                .then((_) => {
                    const newGols = goals.filter((item) => item.id !== goalId);
        
                    setGoals([...newGols]);
                    toast.success("Meta excluída com sucesso!")
                })
                .catch((_) => toast.error("Não foi possível excluir a meta."));
          };

    return (
        <GoalsContext.Provider 
            value={{
                title,
                setTitle,
                dificult,
                setDificult,
                goals,
                setGoals,
                createGoal,
                editGoal,
                deleteGoal,
                showForm,
                setShowForm,
            }}
        >
            {children}
        </GoalsContext.Provider>
    )
}