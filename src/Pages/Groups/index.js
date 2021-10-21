import { useEffect, useState } from "react";
import { CardGroup } from "../../Components/CardGroup";
import ContainerGroup from "../../Components/ContainerGroups";
import { FormGroup } from "../../Components/FormGroup";
import { List } from "../../Components/List";
import NavigationMenu from "../../Components/NavigationMenu";
import HeaderButtons from "../../Components/StylesComponents/HeaderButtons";
import { Header } from "../../Components/StylesComponents/HeaderHabitsAndGroupPages/styles";
import { useGroups } from "../../Providers/Groups";
import { Body, Main, Section, SectionCategories } from "../Habit/styles";
import { UlStyled } from "./style";
import { GoPlus, GoTriangleDown } from "react-icons/go";

export const Group = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const { searchGroup, listGroup, myGroups, getSubscribes } = useGroups();
  const [showFormGroup, setShowFormGroup] = useState(false);

  const categorys = myGroups
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const selectColor = (list) => {
    let count = 0;
    const loop = list.map(() => {
      let result = "";
      if (count === 0) result = "green";
      if (count === 1) result = "purple";
      if (count === 2) result = "red";
      if (count === 3) result = "blue";
      count++;
      if (count > 3) count = 0;
      return result;
    });

    return loop;
  };
  const colors = selectColor(categorys);

  useEffect(() => {
    getSubscribes();
  }, []);

  return (
    <Body>
      <Main>
        <Header>
          <HeaderButtons
            children={`Create Group`}
            icon={GoPlus}
            backGroundColor={"#BCDFAB"}
            onClick={() => setShowFormGroup(!showFormGroup)}
          />
          <HeaderButtons
            children={"Categories"}
            icon={GoTriangleDown}
            backGroundColor={"#BCDFAB"}
            onClick={() => console.log("mostrar as categorias dos hábitos")}
          />
        </Header>
        <Section>
          <SectionCategories>
            {showFormGroup && (
              <FormGroup
                type={"register"}
                setShowFormGroup={setShowFormGroup}
              />
            )}
            <h2>Meus grupos</h2>

            <ul>
              {categorys &&
                categorys.map((item, index) => {
                  const themeSelect = colors[index];
                  return (
                    <li key={index}>
                      <ContainerGroup
                        item={item}
                        list={myGroups}
                        themColor={themeSelect}
                      />
                    </li>
                  );
                })}
            </ul>
            <input
              placeholder="Buscar por categoria"
              type="text"
              value={searchCategory}
              onChange={(event) => setSearchCategory(event.target.value)}
            />
            <button onClick={() => searchGroup(searchCategory)}>
              Buscar por
            </button>
            <List>
              {listGroup &&
                listGroup.map((item, index) => (
                  <li key={index}>
                    <CardGroup item={item} />
                  </li>
                ))}
            </List>
          </SectionCategories>
        </Section>
      </Main>
      <NavigationMenu />
    </Body>
  );
};
