import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormCreateHabits } from "../../Components/FormCreateHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { GoPlus, GoTriangleDown } from "react-icons/go";
import { Body, Main, Section, SectionCategories } from "./styles";
import {
  BlackLine,
  Header,
} from "../../Components/StylesComponents/HeaderHabitsAndGroupPages/styles";
import HeaderButtons from "../../Components/StylesComponents/HeaderButtons";
import ContainerHabits from "../../Components/ContainerHabits";

export const Habit = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  const categorys = habits
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  return (
    <Body>
      <Main>
        <Header>
          <button onClick={() => setShowForm(!showForm)}>asadasd</button>

          <HeaderButtons
            children={`Create habit`}
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
            {showForm && <FormCreateHabits />}
            {/* <ul>
              {habits &&
                habits.map((item, index) => (
                  <li key={index}>
                    <CardHabits item={item} editable />
                  </li>
                ))}
            </ul> */}

            {/* #9fdaef */}
            {/* #e88a8a */}

            {categorys &&
              categorys.map((item, index) => (
                <ContainerHabits
                  key={index}
                  category={item}
                  list={habits}
                  backGroundColor={"#9fdaef "}
                />
              ))}
          </SectionCategories>
        </Section>
      </Main>

      <NavigationMenu />
    </Body>
  );
};
