import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardHabits } from "../../Components/CardHabits";
import { FormCreateHabits } from "../../Components/FormCreateHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { GoPlus, GoChevronDown, GoTriangleDown } from "react-icons/go";
import { Body, Main, Section, SectionCategories } from "./styles";
import {
  BlackLine,
  Header,
} from "../../Components/StylesComponents/HeaderHabitsAndGroupPages/styles";
import HeaderButtons from "../../Components/StylesComponents/HeaderButtons";

export const Habit = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  return (
    <Body>
      <Main>
        <Header>
          <HeaderButtons
            children={`Create a habit`}
            icon={GoPlus}
            backGroundColor={"#BCDFAB"}
            onClick={() => setShowForm(!showForm)}
          />
          <HeaderButtons
            children={"Categories"}
            icon={GoTriangleDown}
            backGroundColor={"#BCDFAB"}
            onClick={() => console.log("mostrar as categorias dos hábitos")}
          />
        </Header>
        <BlackLine />
        <Section>
          <SectionCategories>
            {showForm && (
              <>
                <FormCreateHabits />
              </>
            )}
            <ul>
              {habits &&
                habits.map((item, index) => (
                  <li key={index}>
                    <CardHabits item={item} editable />
                  </li>
                ))}
            </ul>
          </SectionCategories>
        </Section>
      </Main>

      <NavigationMenu />
    </Body>
  );
};
