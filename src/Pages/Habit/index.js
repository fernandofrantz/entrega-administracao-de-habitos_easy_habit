import { useState, useEffect } from "react";
import { CardHabits } from "../../Components/CardHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { FormCreateHabits } from "../../Components/FormCreateHabits";
import { Container } from "../../Components/CardHabits/styles";
import ContainerHabits from "../../Components/ContainerHabits";

export const Habit = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const [showForm, setShowForm] = useState(false);

  const categorys = habits
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  //console.log(categorys);

  return (
    <div>
      <button onClick={() => setShowForm(!showForm)}> Criar habito </button>
      {showForm && <FormCreateHabits />}
      <ul>
        {categorys &&
          categorys.map((item) => (
            <ContainerHabits item={item} list={habits} />
          ))}
      </ul>
      <NavigationMenu />
    </div>
  );
};
