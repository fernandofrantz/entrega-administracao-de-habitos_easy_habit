import { CardGroup } from "../Card_Unit_Group";
import { GroupCategory, UlStyled } from "./style";

export const ContainerGroup = ({ item, list, themColor }) => {
  let title = "";
  if (themColor === "red") title = "#D84A4A";
  if (themColor === "blue") title = "#6FBAD1";
  if (themColor === "green") title = "#7AAE62";
  if (themColor === "purple") title = "#C986FF";

  console.log(themColor);
  return (
    <>
      <GroupCategory color={title}>
        <h2>{item}</h2>
      </GroupCategory>
      <UlStyled>
        {list
          .filter((items) => items.category === item)
          .map((item, index) => (
            <li key={index}>
              <CardGroup item={item} themColor={themColor} />
            </li>
          ))}
      </UlStyled>
    </>
  );
};

export default ContainerGroup;
