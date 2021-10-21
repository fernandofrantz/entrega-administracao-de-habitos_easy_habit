import { useState } from "react";
import { useHistory } from "react-router-dom";
import { FormCreateHabits } from "../../Components/FormCreateHabits";
import ContainerHabits from "../../Components/ContainerHabits";
import NavigationMenu from "../../Components/NavigationMenu";
import { useHabits } from "../../Providers/Habits";
import { useUser } from "../../Providers/User";
import { GoPlus, GoTriangleDown } from "react-icons/go";
import { Body, Main, SectionCategories } from "./styles";
import {
  BlackLine,
  Header,
} from "../../Components/StylesComponents/HeaderHabitsAndGroupPages/styles";
import HeaderButtons from "../../Components/StylesComponents/HeaderButtons";
import FormEditHabits from "../../Components/EditHabits";

export const Habit = () => {
  const { auth } = useUser();
  const { habits } = useHabits();
  const [showForm, setShowForm] = useState(false);
  // const [ colorIndex, setColorIndex ] = useState(-1);
  // const arrayColors = [ '#e88a8a', '#9fdaef', '#FFE6A6', '#85CC85' ];
  const history = useHistory();

  if (!auth) {
    history.push("/login");
  }

  const categorys = habits
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  // const habitsColor = () =>{
  //   if(colorIndex > 3){
  //     setColorIndex(-1)
  //   }
  //   setColorIndex(colorIndex + 1);
  //   console.log(arrayColors[colorIndex])
  //   return arrayColors[colorIndex];
  // }

  // // console.log(colorString);
  // console.log(colorIndex, "index da cor")

  return (
    <Body>
      <Main>
        <Header>
          {/* <button onClick={() => setShowForm(!showForm)}>asadasd</button> */}

          <HeaderButtons
            children={!showForm ? "Create a habit" : "Show habits"}
            icon={!showForm ? GoPlus : GoTriangleDown}
            backGroundColor={"#BCDFAB"}
            buttonFunction={setShowForm}
            state={showForm}
          />

          <HeaderButtons
            children={"Categories"}
            icon={GoTriangleDown}
            backGroundColor={"#BCDFAB"}
            buttonFunction={() =>
              console.log("mostrar as categorias dos hábitos")
            }
          />
        </Header>
        <BlackLine />
        <SectionCategories>
          {showForm && <FormCreateHabits />}

          {categorys &&
            categorys.map((item, index) => (
              <ContainerHabits
                key={index}
                category={item}
                list={habits}
                sequence={index}
              />
            ))}
        </SectionCategories>
      </Main>

      <NavigationMenu />
    </Body>
  );
};
