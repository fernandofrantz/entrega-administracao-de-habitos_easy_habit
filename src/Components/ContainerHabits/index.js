import { CardHabits } from "../CardHabits";
import { CategoryTitle, HabitsByCategory, CategoryBox, Li } from "./styles";

const ContainerHabits = ({
  category,
  list,
  sequence,
  setShowEditForm,
  homePage,
}) => {
  const arrayColors = [
    "#e88a8a",
    "#9fdaef",
    "#FFE6A6",
    "#85CC85",
    "#FFB8A6",
    "#9174AC",
  ];

  return (
    <CategoryBox>
      <CategoryTitle backGroundColor={arrayColors[sequence]}>
        {category}
      </CategoryTitle>

      <HabitsByCategory>
        {homePage ?
        list.map(item=> <li key={item.id}>
          <CardHabits item={item} editable={false} backGroundColor={arrayColors[sequence]} setShowEditForm={setShowEditForm}/>
        </li> )
        :
        list
          .filter((items) => items.category === category)
          .map((item) => (
            <li key={item.id}>
              <CardHabits item={item} editable backGroundColor={arrayColors[sequence]} setShowEditForm={setShowEditForm}/>
            </li>
          ))
          
          }
      </HabitsByCategory>
    </CategoryBox>
  );
};

export default ContainerHabits;
