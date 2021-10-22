import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { ActivityContext } from "../../../Providers/Activity";
import { GoalsContext } from "../../../Providers/Goals";
import { useGroups } from "../../../Providers/Groups";
import { api } from "../../../Services/api";
import jwt_decode from "jwt-decode";

import { FormGroup } from "../../Groups_Components/Form_Group_create-edit";
import {
  ButtonSubs,
  DescriptionGroup,
  DetailsContainer,
  GroupTitle,
  ListDetails,
} from "./styles";
import ListActivity from "../ListActivity";
import ListGoals from "../ListGoals";

// import { IoMdArrowRoundBack } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";
import {
  BlackLine,
  Header,
  Body,
  Main,
} from "../../StylesComponents/GeneralTemplatePages/styles";
import HeaderButtons from "../../StylesComponents/HeaderButtons";

const DetailsGroup = () => {
  const { id } = useParams();
  const history = useHistory();

  const [showEditOption, setShowEditOption] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [nameGroup, setNameGroup] = useState("");
  const [categoryGroup, setcategoryGroup] = useState("");
  const [descriptionGroup, setDescriptionGroup] = useState("");
  const [isGoals, setIsGoals] = useState(true);

  const { setActivities } = useContext(ActivityContext);
  const { setGoals } = useContext(GoalsContext);
  const {
    showOptionCreate,
    setShowOptionCreate,
    subscribeToGroup,
    handleUnsubscribe,
  } = useGroups();

  const token = JSON.parse(localStorage.getItem("@EH")) || "";

  useEffect(() => {
    api
      .get(`/groups/${id}/`, null, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setGoals(response.data.goals);
        setActivities(response.data.activities);
        const { user_id } = jwt_decode(token);
        const listUser = response.data.users_on_group;
        const creatorGroup = response.data.creator.id;
        setNameGroup(response.data.name);
        setcategoryGroup(response.data.category);
        setDescriptionGroup(response.data.description);
        const [searchMyUser] = listUser.filter((item) => item.id === user_id);
        if (searchMyUser) setShowOptionCreate(true);
        if (creatorGroup === user_id) setShowEditOption(true);
      })
      .catch((_) => console.log("erro ao buscar metas e atividades"));
  }, []);

  const backPageGroup = () => {
    history.push("/group");
  };

  return (
    <Body>
      <Main>
        <Header>
          <div onClick={backPageGroup} className="iconContainer">
            {/* <IoMdArrowRoundBack /> */}
            <HeaderButtons
              children={"Back to all groups"}
              buttonFunction={backPageGroup}
            />
          </div>
          {!showOptionCreate && (
            <>
              <ButtonSubs
                backGroundColor={"#cda2ef"}
                onClick={() => subscribeToGroup(id)}
              >
                Subscribe
              </ButtonSubs>
            </>
          )}

          {showOptionCreate && (
            <>
              <ButtonSubs
                backGroundColor={"#cecece"}
                onClick={() => handleUnsubscribe(id)}
              >
                Unsubscribe
              </ButtonSubs>
            </>
          )}
        </Header>

        <BlackLine />

        <DetailsContainer>
          {showEditForm && (
            <FormGroup
              type={"edit"}
              setNameGroup={setNameGroup}
              setShowEditForm={setShowEditForm}
            />
          )}
          <GroupTitle backgroundColor={"#cda2ef"}>
            {nameGroup}
            {showEditOption && (
              <MdModeEdit onClick={() => setShowEditForm(!showEditForm)} />
            )}
          </GroupTitle>

          <DescriptionGroup>{descriptionGroup}</DescriptionGroup>

          {!showEditForm && (
            <>
              <ListDetails>
                {isGoals ? <ListGoals setIsGoals={setIsGoals}/> : <ListActivity setIsGoals={setIsGoals}/>}
              </ListDetails>
            </>
          )}
        </DetailsContainer>
      </Main>
    </Body>
  );
};

export default DetailsGroup;
