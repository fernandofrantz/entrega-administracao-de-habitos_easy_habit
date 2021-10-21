import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../../Services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {

  const [myGroups, setMyGroups] = useState([]);
  const [listGroup, setListGroup] = useState([]);
  const [showOptionCreate, setShowOptionCreate] = useState(false);

  const token = JSON.parse(localStorage.getItem("@EH")) || "";

  const getSubscribes = () => {
    if (token) {
      api
        .get("/groups/subscriptions/", {
          headers: { Authorization: "Bearer " + token },
        })
        .then((res) => {
          setMyGroups(res.data);
        })
        .catch((error) => console.log(error));
    }
  };

  useEffect(() => {
    getSubscribes();
  }, []);

  const createGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setMyGroups([...myGroups, res.data]);
      })
      .catch((error) => console.log(error));
  };

  const editGroup = (idGroup, data) => {
    api
      .patch(`/groups/${idGroup}/`, data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setMyGroups([...myGroups, res.data]);
      })
      .catch((error) => console.log(error));
  };

  const searchGroup = (category) => {
    api
      .get(`/groups/`, { params: { category: category ? category : null } })
      .then((res) => {
        setListGroup(res.data.results);
      })
      .catch((error) => console.log(error));
  };

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
    <GroupsContext.Provider
      value={{
        myGroups,
        setMyGroups,
        listGroup,
        getSubscribes,
        setListGroup,
        createGroup,
        searchGroup,
        editGroup,
        subscribeToGroup,
        handleUnsubscribe,
        showOptionCreate,
        setShowOptionCreate,
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
