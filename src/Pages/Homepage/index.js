import { useHistory } from "react-router-dom";
// import { CardHabits } from "../../Components/CardHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { AppTitle, Body, Main, SectionCategories } from "./styles";
import {
  BlackLine,
  Header,
} from "../../Components/StylesComponents/HeaderHabitsAndGroupPages/styles";
import { useEffect, useState } from "react";
import ContainerHabits from "../../Components/ContainerHabits";

export const Homepage = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const history = useHistory();
  let newDate = new Date();
  const today = newDate.getDay();
  const tomorrow = today === 6 ? 0 : today + 1;

  const [todaysHabits, setTodaysHabits] = useState([]);
  const [tomorrowsHabits, setTomorrowsHabits] = useState([]);

  if (!auth) {
    history.push("/login");
  }

  // useEffect(() => {
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
// useEffect(()=> {sethabits(); setTomorrowsHabits()},[])
  // }, []);

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
              sequence={5}
              homePage
            />
          ) : (
            <h2>Crie uma meta</h2>
          )}

          {tomorrowsHabits !==[]? (
            <ContainerHabits
              category={"Tomorrow's habits"}
              list={tomorrowsHabits}
              sequence={2}
              homePage
            />
          ) : (
            <h2>Crie uma meta para amanhã</h2>
          )}
        </SectionCategories>
       
      </Main>
      <NavigationMenu />
    </Body>
  );
};
