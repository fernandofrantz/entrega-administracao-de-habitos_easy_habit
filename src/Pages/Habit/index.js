import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormCreateHabits } from "../../Components/Habits_Components/Form_Create_Habits"
import ContainerHabits from "../../Components/Habits_Components/Container_Habits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { GoPlus, GoTriangleDown } from "react-icons/go";
import {  SectionCategories } from "./styles";
import {
  BlackLine,
  Header,Body, Main,
} from "../../Components/StylesComponents/GeneralTemplatePages/styles";
import HeaderButtons from "../../Components/StylesComponents/HeaderButtons";

export const Habit = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const [showForm, setShowForm] = useState(false);
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  const categories = habits
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

    const selectColor = (list) => {
    let count = 0;
    const loop = list.map(() => {
      let result = "";
      if (count === 0) result = "#e88a8a";
      if (count === 1) result = "#9fdaef";
      if (count === 2) result = "#FFE6A6";
      if (count === 3) result = "#85CC85";
      if (count === 4) result = "#FFB8A6";
      if (count === 5) result = "#cda2ef";
      count++;
      if (count > 3) count = 0;
      return result;
    });

    return loop;
  };
  const colors = selectColor(categories);

  return (
    <Body>
      <Main>
        <Header>
          <HeaderButtons
            children={!showForm ? "Create a habit" : "Show habits"}
            icon={!showForm ? GoPlus : GoTriangleDown}
            buttonFunction={setShowForm}
            param={!showForm}
          />
        </Header>
        <BlackLine />
        <SectionCategories>
          {showForm ? <FormCreateHabits setShowForm={setShowForm} />
          :
          (categories &&
            categories.map((item, index) => (
              <ContainerHabits
              key={index}
              category={item}
              list={habits}
              themeColor={colors[index]}
              />
              )))
            }
        </SectionCategories>
      </Main>

      <NavigationMenu />
    </Body>
  );
};
