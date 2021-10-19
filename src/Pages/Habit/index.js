import { useState, useEffect } from "react";
import { CardHabits } from "../../Components/CardHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { FormCreateHabits } from "../../Components/FormCreateHabits";
export const Habit = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}> Criar habito </button>
      {showForm && <FormCreateHabits />}
      <ul>
        {habits &&
          habits.map((item, index) => (
            <li key={index}>
              <CardHabits item={item} editable />
            </li>
          ))}
      </ul>
      <NavigationMenu />
    </div>
  );
};
