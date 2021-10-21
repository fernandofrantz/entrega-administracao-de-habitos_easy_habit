import { useEffect, useState } from "react";
import { CardGroup } from "../../Components/CardGroup";
import ContainerGroup from "../../Components/ContainerGroups";
import { FormGroup } from "../../Components/FormGroup";
import { List } from "../../Components/List";
import NavigationMenu from "../../Components/NavigationMenu";
import HeaderButtons from "../../Components/StylesComponents/HeaderButtons";
import { useGroups } from "../../Providers/Groups";
import { Header } from "../../Components/StylesComponents/HeaderHabitsAndGroupPages/styles";
import { Body, Main, Section, SectionCategories } from "../Habit/styles";
import { ContainerInput, HeaderStyled, InputSearch } from "./style";
import { GoPlus } from "react-icons/go";
import { BsSearch } from "react-icons/bs";

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
          <ContainerInput>
            <InputSearch
              backGroundColor={"#BCDFAB"}
              placeholder="Search for group"
              type="text"
              value={searchCategory}
              onChange={(event) => setSearchCategory(event.target.value)}
            />
            <button onClick={() => searchGroup(searchCategory)}>
              <BsSearch />
            </button>
          </ContainerInput>
        </Header>

        <SectionCategories>
          {showFormGroup && (
            <FormGroup type={"register"} setShowFormGroup={setShowFormGroup} />
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

          <List>
            {listGroup &&
              listGroup.map((item, index) => (
                <li key={index}>
                  <CardGroup item={item} />
                </li>
              ))}
          </List>
        </SectionCategories>
      </Main>
      <NavigationMenu />
    </Body>
  );
};
