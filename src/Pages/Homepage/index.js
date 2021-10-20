import { useHistory } from "react-router-dom";
import NavigationMenu from "../../Components/NavigationMenu";
import { CardHabits } from "../../Components/CardHabits";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";

export const Homepage = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const history = useHistory();
  let newDate = new Date();
  const today = newDate.getDay();
  const tomorrow = today === 6 ? 0 : today + 1;

  if (!auth) {
    history.push("/login");
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
            {habits &&
              habits
                .filter((item) => {
                  const { frequency } = item;
                  const splited = frequency.split(",");
                  if (splited.includes(today.toString())) {
                    return item;
                  }
                })
                .map((item, index) => (
                  <li key={index}>
                    <CardHabits item={item} />
                  </li>
                ))}
          </ul>
        </div>
        <div>
          <h2>Tomorrow's habits</h2>
          <div>
            <ul>
              <ul>
                {habits &&
                  habits
                    .filter((item) => {
                      const { frequency } = item;
                      const splited = frequency.split(",");
                      if (splited.includes(tomorrow.toString())) {
                        return item;
                      }
                    })
                    .map((item, index) => (
                      <li key={index}>
                        <CardHabits item={item} />
                      </li>
                    ))}
              </ul>
            </ul>
          </div>
        </div>
      </main>

      <NavigationMenu />
    </div>
  );
};
