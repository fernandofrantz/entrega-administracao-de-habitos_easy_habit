import { useHistory } from "react-router";
import { GrGroup } from "react-icons/gr";
import { GiStairsGoal } from "react-icons/gi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { CardStyled, GroupName, TitleGroup } from "./style";


export const CardGroup = ({ item }) => {
  const history = useHistory();
  const handleDirection = (id) => {
    history.push(`/group/${id}/`);
  };

  const { id, name, users_on_group, activities, goals } = item;

  return (
    <CardStyled onClick={() => handleDirection(id)}>
      <GroupName color={"#FABABA"}>
        <TitleGroup fontColor={"#be3a3a"}>{name}</TitleGroup>
      </GroupName>
      <ul>
        <li>
          <div className="iconContainer">
            <GrGroup />
          </div>
          <p>{`Users: ${users_on_group.length}`}</p>
        </li>
        <li>
          <div className="iconContainer">
            <GiStairsGoal />
          </div>
          <p>{`Goals: ${goals.length}`}</p>
        </li>
        <li>
          <div className="iconContainer">
            <BsFillCalendarCheckFill />
          </div>
          <p>{`Activites: ${activities.length}`}</p>
        </li>
      </ul>
    </CardStyled>
  );
};
