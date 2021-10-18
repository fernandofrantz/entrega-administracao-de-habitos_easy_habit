import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { CardHabits } from "../../Components/CardHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";

export const Homepage = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const history = useHistory();
  const [todayDate, setTodayDate] = useState("");

  const weekDay = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];
  useEffect(() => {
    const day = new Date();
    setTodayDate(weekDay[day.getDay()]);
  }, []);

  //filter por frequencia e apresentar so o de hj,
  //separar por categoria

  return (
    <div>
      <h2>Homepage apresentação dos hábitos do dia e do dia seguinte</h2>
      <div>{todayDate}</div>
      <button onClick={() => history.push("/habit")}>Meus habitos</button>
      <ul>
        {habits &&
          habits.map((item, index) => (
            <li key={index}>
              <CardHabits item={item} />
            </li>
          ))}
      </ul>
      <NavigationMenu />
    </div>
  );
};
