import { useEffect, useState } from "react";
import { CardGroup } from "../../Components/CardGroup";
import ContainerGroup from "../../Components/ContainerGroups";
import { FormGroup } from "../../Components/FormGroup";
import { List } from "../../Components/List";
import NavigationMenu from "../../Components/NavigationMenu";
import { useGroups } from "../../Providers/Groups";

export const Group = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const { searchGroup, listGroup, myGroups, getSubscribes } = useGroups();
  const [showFormGroup, setShowFormGroup] = useState(false);

  const categorys = myGroups
    .map((item) => item.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  useEffect(() => {
    getSubscribes();
  }, []);

  return (
    <div>
      <h2>página de todos os grupos</h2>
      <button onClick={() => setShowFormGroup(!showFormGroup)}>
        Criar grupo
      </button>
      {showFormGroup && (
        <FormGroup type={"register"} setShowFormGroup={setShowFormGroup} />
      )}
      <h2>Meus grupos</h2>

      <ul>
        {categorys &&
          categorys.map((item) => (
            <ContainerGroup item={item} list={myGroups} />
          ))}
      </ul>
      <input
        placeholder="Buscar por categoria"
        type="text"
        value={searchCategory}
        onChange={(event) => setSearchCategory(event.target.value)}
      />
      <button onClick={() => searchGroup(searchCategory)}>Buscar por</button>
      <List>
        {listGroup &&
          listGroup.map((item, index) => (
            <li key={index}>
              <CardGroup item={item} />
            </li>
          ))}
      </List>
      <NavigationMenu />
    </div>
  );
};
