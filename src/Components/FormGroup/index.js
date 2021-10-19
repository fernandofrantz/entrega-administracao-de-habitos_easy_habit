import { useState } from "react";
import { useGroups } from "../../Providers/Groups";
import axios from "axios";

export const FormGroup = ({ type, idGroup, setNameGroup }) => {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const { createGroup, editGroup } = useGroups();

  const newGroup = () => {
    const data = {
      name: groupName,
      description: description,
      category: category,
    };
    createGroup(data);
  };

  const newEditGroup = () => {
    const data = {};
    if (groupName) {
      data.name = groupName;
      setNameGroup(groupName);
    }
    if (description) data.description = description;
    if (category) data.category = category;
    editGroup(idGroup, data);
  };

  return (
    <div>
      <input
        placeholder="nome do grupo"
        type="text"
        value={groupName}
        onChange={(event) => setGroupName(event.target.value)}
        required={type === "register" ? true : false}
      />
      <input
        placeholder="Descrição do grupo"
        type="text"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        required={type === "register" ? true : false}
      />
      <input
        placeholder="categoria"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required={type === "register" ? true : false}
      />
      <button onClick={type === "register" ? newGroup : newEditGroup}>
        {type === "register" ? "Cadastrar" : "Editar"}
      </button>
    </div>
  );
};
