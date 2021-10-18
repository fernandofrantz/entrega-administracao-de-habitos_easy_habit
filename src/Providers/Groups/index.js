import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { api } from "../../Services/api";

export const GroupsContext = createContext();

export const GroupsProvider = ({ children }) => {
  const [myGroups, setMyGroups] = useState([]);
  const [listGroup, setListGroup] = useState([]);
  const token = JSON.parse(localStorage.getItem("@EH")) || "";

  useEffect(() => {
    getSubscribes();
  }, []);

  const getSubscribes = () => {
    //{ params: { null: null } },
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

  /* const subscribeToGroup = (groupId) => {
    api
      .post(`/groups/${groupId}/subscribe/`, null, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setMyGroups([...myGroups, res]);

        const removeSubiscrebedGroup = listGroup.filter(
          (item) => item.name !== res.name
        );
        setListGroup(removeSubiscrebedGroup);
      })
      .catch((error) => console.log(error));
  }; */

  const createGroup = (data) => {
    api
      .post("/groups/", data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((res) => {
        setMyGroups([...myGroups, res.data]);
        console.log(res.data);
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
      }}
    >
      {children}
    </GroupsContext.Provider>
  );
};

export const useGroups = () => useContext(GroupsContext);
