// import { useEffect, useState } from "react";
// import { useHistory } from "react-router";
// import { CardHabits } from "../../Components/CardHabits";
// import NavigationMenu from "../../Components/NavigationMenu";
// import { useHabits } from "../../Providers/Habits";
// import { useUser } from "../../Providers/User";

// export const Homepage = () => {
//   const { auth } = useUser();
//   const { habits } = useHabits();
//   const history = useHistory();
//   const [todayDate, setTodayDate] = useState("");

//   const weekDay = [
//     "Domingo",
//     "Segunda-Feira",
//     "Terça-Feira",
//     "Quarta-Feira",
//     "Quinta-Feira",
//     "Sexta-Feira",
//     "Sábado",
//   ];
//   useEffect(() => {
//     const day = new Date();
//     setTodayDate(weekDay[day.getDay()]);
//   }, []);

//   //filter por frequencia e apresentar so o de hj,
//   //separar por categoria

//   return (
//     <div>
//       <h2>Homepage apresentação dos hábitos do dia e do dia seguinte</h2>
//       <div>{todayDate}</div>
//       <button onClick={() => history.push("/habit")}>Meus habitos</button>
//       <ul>
//         {habits &&
//           habits.map((item, index) => (
//             <li key={index}>
//               <CardHabits item={item} />
//             </li>
//           ))}
//       </ul>
//       <NavigationMenu />
//     </div>
//   );
// };

import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import NavigationMenu from "../../Components/NavigationMenu";
import { CardHabits } from "../../Components/CardHabits";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { co } from "co";

export const Homepage = () => {
  const { auth } = useUser();
  // const [habits, setHabits] = useState([]);
  const { habits } = useHabits();
  const history = useHistory();
  let newDate = new Date();
  const weekDay = newDate.getDay();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@EH"));
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        Authorization: "Bearer " + token,
      })
      // .then((response) => {
      //   setHabits(response);
      // })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHabit = (id) => {
    axios.delete(`https://kenzie-habits.herokuapp.com/habits/${id}/`);
  };

  if (!auth) {
    history.push("/login");
  }
  console.log("habits homepage", habits);
  return (
    <div>
      <h2>Yours Habits</h2>
      <h3>{weekDay}</h3>
      <main>
        <div>
          <h2>Today's habits</h2>
        </div>
        <div>
          <ul>
            {habits
              .filter(
                (item) =>
                  item.frequency === weekDay || item.frequency === "daily"
              )
              .map((item) => (
                <li key={item.id}>
                  <CardHabits item={item} editable={true} />
                </li>
              ))}
          </ul>
          {/* INCLUIR MÉTODO SORT */}
        </div>
        <div>
          <h2>Tomorrow's habits</h2>
          <div>
            <ul>
              {habits
                .filter((item) => {
                  if (weekDay === 6) {
                    return item.frequency === 0;
                  } else {
                    return (
                      item.frequency === weekDay + 1 ||
                      item.frequency === "Diária"
                    );
                  }
                })
                .map((item) => (
                  <li key={item.id}>
                    <CardHabits item={item} editable={true} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </main>
      <NavigationMenu />
    </div>
  );
};
