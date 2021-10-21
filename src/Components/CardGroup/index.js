import { useHistory } from "react-router";
import { GrGroup } from "react-icons/gr";
import { GiStairsGoal } from "react-icons/gi";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { CardStyled, GroupName, TitleGroup } from "./style";
import { useState } from "react";
export const CardGroup = ({ item, themColor }) => {
  const history = useHistory();
  const handleDirection = (id) => {
    history.push(`/group/${id}/`);
  };
  const { id, name, users_on_group, activities, goals } = item;

  let groupName = "";
  let titleColor = "";

  if (themColor === "red") {
    groupName = "#FABABA";
    titleColor = "#be3a3a";
  }
  if (themColor === "blue") {
    groupName = "#87C3D6";
    titleColor = "#5696AA";
  }
  if (themColor === "green") {
    groupName = "#C1E7AF";
    titleColor = "#95C67F";
  }
  if (themColor === "purple") {
    groupName = "#D095FF";
    titleColor = "#9E52DB";
  }

  return (
    <CardStyled onClick={() => handleDirection(id)}>
      <GroupName color={groupName}>
        <TitleGroup fontColor={titleColor}>{name}</TitleGroup>
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
