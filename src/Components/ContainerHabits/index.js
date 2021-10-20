import { CardHabits } from "../CardHabits";
import { CategoryTitle, HabitsByCategory, CategoryBox } from "./styles";

export const ContainerHabits = ({ category, list, backGroundColor }) => {
  return (
    <CategoryBox>
      <CategoryTitle backGroundColor={backGroundColor}>{category}</CategoryTitle>

      <HabitsByCategory>
        {list
          .filter((items) => items.category === category)
          .map((item) => (
            <li key={item.id}>
              <CardHabits item={item} editable backGroundColor={backGroundColor}/>
            </li>
          ))}
      </HabitsByCategory>
    </CategoryBox>
  );
};

export default ContainerHabits;
