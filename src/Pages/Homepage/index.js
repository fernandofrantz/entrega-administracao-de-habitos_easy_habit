import { useHistory } from "react-router-dom";

import NavigationMenu from "../../Components/NavigationMenu";
import { CardHabits } from "../../Components/CardHabits";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";

export const Homepage = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const history = useHistory()
  
  let newDate = new Date();
  const weekDay = newDate.getDay();

  if(!auth){
    history.push("/login")
  }
  return (
    <div>
      <h2>Yours Habits</h2>

      <main>
        <div>
          <h2>Today's habits</h2>
        </div>
        <div>
          <ul>

          {habits
            .filter(
              (item) =>
              item.frequency === weekDay || item.frequency === "Diária"
              )
              .map((item) => (
                <li key={item.id}>
                <CardHabits item={item} editable={true}/>
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
                <CardHabits item={item} editable={true}/>
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
