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
        {homePage
          ? list.map((item) => (
              <Li key={item.id}>
                <CardHabits
                  item={item}
                  editable
                  backGroundColor={arrayColors[sequence]}
                  setShowEditForm={setShowEditForm}
                />
              </Li>
            ))
          : list
              .filter((items) => items.category === category)
              .map((item) => (
                <Li key={item.id}>
                  <CardHabits
                    item={item}
                    editable
                    backGroundColor={arrayColors[sequence]}
                    setShowEditForm={setShowEditForm}
                  />
                </Li>
              ))}
      </HabitsByCategory>
    </CategoryBox>
  );
};

export default ContainerHabits;
