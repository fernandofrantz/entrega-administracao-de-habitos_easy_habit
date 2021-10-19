import { useState, useEffect } from "react";
import { CardHabits } from "../../Components/CardHabits";
import ContainerHabits from "../../Components/ContainerHabits";
import { FormHabits } from "../../Components/FormHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";

export const Habit = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const [showForm, setShowForm] = useState(false);

  const categorys = habits
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}> Criar habito </button>
      {
        showForm && <FormHabits type={"register"} /> //chamar o form de cadastro do habits
      }
      {categorys &&
        categorys.map((item) => <ContainerHabits item={item} list={habits} />)}
      <NavigationMenu />
    </div>
  );
};
