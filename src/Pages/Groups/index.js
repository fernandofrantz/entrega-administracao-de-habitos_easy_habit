import { useEffect, useState } from "react";
import { useGroups } from "../../Providers/Groups";

import { CardGroup } from "../../Components/Groups_Components/Card_Unit_Group";
import ContainerGroup from "../../Components/Groups_Components/Container_Groups";
import { FormGroup } from "../../Components/Groups_Components/Form_Group_create-edit";
import { List } from "../../Components/List";
import NavigationMenu from "../../Components/NavigationMenu";
import HeaderButtons from "../../Components/StylesComponents/HeaderButtons";
import {
  Header,
  Body,
  Main,
  BlackLine,
} from "../../Components/StylesComponents/GeneralTemplatePages/styles";
import { ContainerInput, H2, InputSearch, Li, SectionCategories } from "./style";
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
            buttonFunction={setShowFormGroup}
            param={!showFormGroup}
          />
          <ContainerInput>
            <InputSearch
              backGroundColor={"#cda2ef"}
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
        <BlackLine />

        <SectionCategories>
          {showFormGroup ? (
            <FormGroup type={"register"} setShowFormGroup={setShowFormGroup} />
          ) : (
            <>
              <H2>My subscriptions</H2>
              <List>
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
              </List>

              <H2>Your search:</H2>
              <List>
                {listGroup &&
                  listGroup.map((item, index) => (
                    <Li key={index}>
                      <CardGroup item={item} />
                    </Li>
                  ))}
              </List>
            </>
          )}
        </SectionCategories>
      </Main>
      <NavigationMenu />
    </Body>
  );
};
