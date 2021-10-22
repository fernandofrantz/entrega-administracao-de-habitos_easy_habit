import { useHistory } from "react-router-dom";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { AppTitle, SectionCategories } from "./styles";
import {
  BlackLine,
  Header,
  Body,
  Main,
} from "../../Components/StylesComponents/GeneralTemplatePages/styles";
import { useEffect, useState } from "react";
import ContainerHabits from "../../Components/Habits_Components/Container_Habits";

export const Homepage = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const history = useHistory();
  const [todaysHabits, setTodaysHabits] = useState([]);
  const [tomorrowsHabits, setTomorrowsHabits] = useState([]);

  let newDate = new Date();
  const today = newDate.getDay();
  const tomorrow = today === 6 ? 0 : today + 1;

  if (!auth) {
    history.push("/login");
  }

  const sethabits = () => {
    setTodaysHabits(
      habits.filter((item) => {
        const { frequency } = item;
        const splited = frequency.split(",");
        if (splited.includes(today.toString())) {
          return item;
        }
      })
    );
    setTomorrowsHabits(
      habits.filter((item) => {
        const { frequency } = item;
        const splited = frequency.split(",");
        if (splited.includes(tomorrow.toString())) return item;
      })
    );
  };

  useEffect(() => sethabits(), [habits]);
  // console.log(tomorrowsHabits)

  return (
    <Body>
      <Main>
        <Header>
          <AppTitle>Easy Habit</AppTitle>
        </Header>
        <BlackLine />

        <SectionCategories>
          {todaysHabits ? (
            <ContainerHabits
              category={"Today's habits"}
              list={todaysHabits}
              themeColor={"#cda2ef"}
              homePage
            />
          ) : (
            <h2 onClick={()=> history.push("/habit")} style={{cursor:"pointer"}}>Set up a new habit for today!</h2>
          )}

  
            <ContainerHabits
              category={"Tomorrow's habits"}
              list={tomorrowsHabits}
              themeColor={"#d9c3ea"}
              homePage
            />
            
            {tomorrowsHabits === [] && <p>oioi</p>}
        </SectionCategories>
      </Main>
      <NavigationMenu />
    </Body>
  );
};
