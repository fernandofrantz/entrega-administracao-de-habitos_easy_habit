import { useState } from "react";
import { useGroups } from "../../Providers/Groups";
import { Form, FormPage } from "./style";
import { IoMdArrowRoundBack } from "react-icons/io";

export const FormGroup = ({
  type,
  idGroup,
  setNameGroup,
  setShowFormGroup,
}) => {
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
    <FormPage>
      

      <Form onSubmit={type === "register" ? newGroup : newEditGroup}>
        <div className="effect">
        <div className="iconContainer" onClick={() => setShowFormGroup(false)}>
        <IoMdArrowRoundBack />
      </div>
        </div>
        <div className="inputContainer">
          <input
            placeholder="Title"
            type="text"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
            required={type === "register" ? true : false}
          />
          <input
            placeholder="Description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required={type === "register" ? true : false}
          />
          <input
            placeholder="category"
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required={type === "register" ? true : false}
          />
        </div>
        <button type="submit">
          {type === "register" ? "Create new group" : "Editar"}
        </button>
      </Form>
    </FormPage>
  );
};
