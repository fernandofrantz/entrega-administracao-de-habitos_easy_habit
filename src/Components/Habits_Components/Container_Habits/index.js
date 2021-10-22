import { useHistory } from "react-router-dom";
import { CardHabits } from "../Card_Unit_Habit";
import { CategoryTitle, HabitsByCategory, CategoryBox, TextForEmptyArray } from "./styles";

const ContainerHabits = ({
  category,
  list,
  themeColor,
  setShowEditForm,
  homePage,
}) => {
  
  const history = useHistory();

  return (
    <CategoryBox>
      <CategoryTitle backGroundColor={themeColor}>
        {category}
      </CategoryTitle>

      <HabitsByCategory>
        {homePage ?
        list.length === 0 ?  <TextForEmptyArray onClick={()=> history.push("/habit")} >Any plans for these days? Click here to change some habits!</TextForEmptyArray> 
        :
        list.map(item=> <li key={item.id}>
          <CardHabits item={item} editable={false} backGroundColor={themeColor} setShowEditForm={setShowEditForm}/>
        </li> )
        :
        list
          .filter((items) => items.category === category)
          .map((item) => (
            <li key={item.id}>
              <CardHabits item={item} editable backGroundColor={themeColor} setShowEditForm={setShowEditForm}/>
            </li>
          ))
          
          }
      </HabitsByCategory>
    </CategoryBox>
  );
};

export default ContainerHabits;
