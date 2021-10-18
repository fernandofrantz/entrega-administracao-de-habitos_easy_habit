import { useEffect, useState, useContext } from "react";
import { createContext } from "react";
import { api } from "../../Services/api";

export const GroupsContext = createContext()

export const GroupsProvider = ({ children }) => {

    const [myGroups, setMyGroups] = useState([]);
    const [listGroup, setListGroup] = useState([]);

    useEffect(() => {
        api
            .get("/groups/subscriptions/")
            .then(res => setMyGroups([res]))
            .catch(error => console.log(error))
    }, [])

    const subscribeToGroup = (groupId) => {
        api
            .post(`/groups/${groupId}/subscribe/`)
            .then(res => {
                setMyGroups([...myGroups, res])

                const removeSubiscrebedGroup = listGroup.filter(item => item.name !== res.name)
                setListGroup(removeSubiscrebedGroup)
            })
            .catch(error => console.log(error))
    }

    const createGroup = (data) => {
        api
            .post("/groups/", data)
            .then(res => setMyGroups([...myGroups, res]))
            .catch(error => console.log(error))
    }

    const searchGroup = (category) => {
        api
            .get("/groups/", category)
            .then(res => {
                const filteredGroup = myGroups.filter(item => item.id !== res.results.id)

                setListGroup([filteredGroup])
            })
            .catch(error => console.log(error))
    }

    return (
        <GroupsContext.Provider value={{ myGroups, setMyGroups, listGroup, setListGroup, subscribeToGroup, createGroup, searchGroup }}>
            {children}
        </GroupsContext.Provider>
    )
}

export const useGroups = () => useContext(GroupsContext);