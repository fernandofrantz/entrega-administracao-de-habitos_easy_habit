import { CardGroup } from "../CardGroup";
import { GroupCategory, UlStyled } from "./style";

export const ContainerGroup = ({ item, list }) => {
  return (
    <>
      <GroupCategory color={"#D84A4A"}>
        <h2>{item}</h2>
      </GroupCategory>
      <UlStyled fontColor={"#be3a3a"}>
        {list
          .filter((items) => items.category === item)
          .map((item, index) => (
            <li key={index}>
              <CardGroup item={item} />
            </li>
          ))}
      </UlStyled>
    </>
  );
};

export default ContainerGroup;
