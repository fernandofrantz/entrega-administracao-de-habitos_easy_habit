import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../../Services/api";

export const HabitContext = createContext([]);

export const HabitProvider = ({ children }) => {
  const [habits, setHabits] = useState([]);
  const token = JSON.parse(localStorage.getItem("@EH"));

  useEffect(() => {
    api
      .get("/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))
      .catch((err) => console.log(err));
  }, [habits]);

  const createHabits = (data) => {
    api
      .post("/habits/", data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setHabits([...habits, response.data]);
      })
      .catch((err) => console.log(err));
  };

  //update habits
  const updateHabits = (dataToUpdate, habitId) => {
    api
      .patch(`/habits/${habitId}/`, dataToUpdate, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const newHabits = habits.filter((item) => item.id !== response.data.id);
        setHabits([...newHabits, response.data]);
      })
      .catch((err) => console.log(err));
  };

  //delete habit
  const deleteHabits = (habitId) => {
    api
      .delete(`/habits/${habitId}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const newHabits = habits.filter((item) => item.id !== habitId);
        setHabits([...newHabits]);
      })
      .catch((err) => console.log(err));
  };

  return (
    <HabitContext.Provider
      value={{ habits, deleteHabits, updateHabits, createHabits }}
    >
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);
