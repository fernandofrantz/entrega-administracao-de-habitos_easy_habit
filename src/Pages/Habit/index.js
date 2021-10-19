import { useState } from "react";
import { useHistory } from "react-router-dom";
import { CardHabits } from "../../Components/CardHabits";
import { FormCreateHabits } from "../../Components/FormCreateHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { GoPlus } from "react-icons/go"
import { Body, Header, Section, SectionCategories } from "./styles";
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
      <Header>
        <HeaderButtons children={`Create a habit`} icon={GoPlus} backGroundColor={
"#BCDFAB"} onClick={() => setShowForm(!showForm)}/>
      </Header>
      <Section>

<SectionCategories>

      {showForm && (
        <>
          <FormCreateHabits />
          {/* <FormHabits type={"register"} /> */}
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
      <NavigationMenu />
    </Body>
  );
};
