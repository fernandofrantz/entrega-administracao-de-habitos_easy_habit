// import { useContext, useEffect, useState } from "react";
// import { useHistory, useParams } from "react-router";
// import { toast } from "react-toastify";
// import jwt_decode from "jwt-decode";
// import FormGoal from "../../Components/FormGoals";
// import NavigationMenu from "../../Components/NavigationMenu";
// import { api } from "../../Services/api";
// import { CardGoals } from "../../Components/CardGoals";
// import { FormGroup } from "../../Components/FormGroup";
// import { ActivityContext } from "../../Providers/Activity";
// import ListActivity from "../../Components/ListActivity";
// import { useGroups } from "../../Providers/Groups";
// import { FormGoalEdit } from "../../Components/FormGoalEdit";

// export const DetailGroup = () => {
//   const { id } = useParams();
//   const history = useHistory();

//   const [goals, setGoals] = useState([]);
//   const [showForm, setShowForm] = useState(false);
//   const [showOptionCreate, setShowOptionCreate] = useState(false);
//   const [showEditOption, setShowEditOption] = useState(false);
//   const [showEditForm, setShowEditForm] = useState(false);
//   const [nameGroup, setNameGroup] = useState("");
//   const [categoryGroup, setcategoryGroup] = useState("");
//   const [descriptionGroup, setDescriptionGroup] = useState("");
//   const { setActivities } = useContext(ActivityContext);

//   const token = JSON.parse(localStorage.getItem("@EH")) || "";

//   useEffect(() => {
//     api
//       .get(`/groups/${id}/`, null, {
//         headers: { Authorization: "Bearer " + token },
//       })
//       .then((response) => {
//         setGoals(response.data.goals);
//         setActivities(response.data.activities);
//         const { user_id } = jwt_decode(token);
//         const listUser = response.data.users_on_group;
//         const creatorGroup = response.data.creator.id;
//         setNameGroup(response.data.name);
//         setcategoryGroup(response.data.category);
//         setDescriptionGroup(response.data.description);
//         const [searchMyUser] = listUser.filter((item) => item.id === user_id);
//         if (searchMyUser) setShowOptionCreate(true);
//         if (creatorGroup === user_id) setShowEditOption(true);
//       })
//       .catch((_) => console.log("erro ao buscas metas e atividades"));
//   }, []);

//   const subscribeToGroup = (groupId) => {
//     api
//       .post(`/groups/${groupId}/subscribe/`, null, {
//         headers: { Authorization: "Bearer " + token },
//       })
//       .then(() => {
//         toast.success("Sucesso ao se inscrever");
//         setShowOptionCreate(true);
//       })
//       .catch(() => toast.error("Erro ao se inscrever no grupo"));
//   };

//   const handleUnsubscribe = (groupId) => {
//     api
//       .delete(`/groups/${groupId}/unsubscribe/`, {
//         headers: { Authorization: "Bearer " + token },
//       })
//       .then(() => {
//         toast.success("Unsubscribed successfully");
//         setShowOptionCreate(false);
//       })
//       .catch(() => toast.error("Erro ao se inscrever no grupo"));
//   };

//   return (
//     <div>
//       <button onClick={() => history.push("/group")}>voltar</button>
//       {showEditOption && (
//         <button onClick={() => setShowEditForm(!showEditForm)}>Editar</button>
//       )}
//       {showEditForm && (
//         <FormGroup type={"edit"} idGroup={id} setNameGroup={setNameGroup} />
//       )}
//       <h2>{nameGroup}</h2>
//       {!showOptionCreate && (
//         <button onClick={() => subscribeToGroup(id)}>inscrever</button>
//       )}
//       <h2>{descriptionGroup}</h2>

//       <h2> Meta Desafios </h2>

//       <ul>
//         {goals.map((item, index) => (
//           <li key={index}>
//             <div>
//               <CardGoals
//                 item={item}
//                 setGoals={setGoals}
//                 goals={goals}
//                 editable={showOptionCreate}
//               />
//             </div>
//           </li>
//         ))}
//       </ul>

//       {showOptionCreate && (
//         <button onClick={() => setShowForm(!showForm)}>criar meta</button>
//       )}
//       {showForm && (
//         <FormGoal
//           idGroup={id}
//           type={"register"}
//           setGoals={setGoals}
//           goals={goals}
//           showForm={showForm}
//         />
//       )}
//       {showOptionCreate && (
//         <button onClick={() => setShowForm(!showForm)}>criar Atividade</button>
//       )}
//       {showOptionCreate && (
//         <button onClick={() => handleUnsubscribe(id)}>unsubscribe</button>
//       )}

//       <NavigationMenu />
//     </div>
//   );
// };

import { useContext, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import NavigationMenu from "../../Components/NavigationMenu";
import { api } from "../../Services/api";
import { FormGroup } from "../../Components/FormGroup";
import { ActivityContext } from "../../Providers/Activity";
import ListActivity from "../../Components/ListActivity";
import ListGoals from "../../Components/ListGoals";
import { GoalsContext } from "../../Providers/Goals";

export const DetailGroup = () => {
  const { id } = useParams();
  const history = useHistory();

  const [showOptionCreate, setShowOptionCreate] = useState(false);
  const [showEditOption, setShowEditOption] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [nameGroup, setNameGroup] = useState("");
  const [categoryGroup, setcategoryGroup] = useState("");
  const [descriptionGroup, setDescriptionGroup] = useState("");

  const { setActivities } = useContext(ActivityContext);
  const { setGoals } = useContext(GoalsContext);

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
      .catch((_) => console.log("erro ao buscas metas e atividades"));
  }, []);

  const subscribeToGroup = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe/`, null, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(() => {
        toast.success("Sucesso ao se inscrever");
        setShowOptionCreate(true);
      })
      .catch(() => toast.error("Erro ao se inscrever no grupo"));
  };

  const handleUnsubscribe = (groupId) => {
    api
      .delete(`/groups/${groupId}/unsubscribe/`, {
        headers: { Authorization: "Bearer " + token },
      })
      .then(() => {
        toast.success("Unsubscribed successfully");
        setShowOptionCreate(false);
      })
      .catch(() => toast.error("Erro ao se inscrever no grupo"));
  };

  return (
    <div>
      <button onClick={() => history.push("/group")}>voltar</button>
      {showEditOption && (
        <button onClick={() => setShowEditForm(!showEditForm)}>Editar</button>
      )}
      {showEditForm && (
        <FormGroup type={"edit"} idGroup={id} setNameGroup={setNameGroup} />
      )}

      <h2>{nameGroup}</h2>
      {!showOptionCreate && (
        <button onClick={() => subscribeToGroup(id)}>inscrever</button>
      )}

      <h2>{descriptionGroup}</h2>

      <h2> Meta Desafios </h2>

      <ListGoals
        handleUnsubscribe={handleUnsubscribe}
        showOptionCreate={showOptionCreate}
      />

      <h2>atividads</h2>

      <ListActivity showOptionCreate={showOptionCreate} />

      <NavigationMenu />
    </div>
  );
};
