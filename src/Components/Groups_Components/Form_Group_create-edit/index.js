import { useState } from "react";
import { useGroups } from "../../../Providers/Groups";

import { Form, FormPage, Input } from "./style";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useParams } from "react-router";

export const FormGroup = ({ type, setNameGroup, setShowFormGroup, setShowEditForm }) => {
  const [groupName, setGroupName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const { createGroup, editGroup } = useGroups();

  const { id } = useParams();

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
    editGroup(id, data);
  };

  return (
    <FormPage>
      <Form onSubmit={type === "register" ? newGroup : newEditGroup}>
        <div className="effect">
          {/* <IoMdArrowRoundBack onClick={() => setShowFormGroup(false)}/> */}
        </div>
        <div className="inputContainer">
          <Input
            placeholder="Title to Group"
            type="text"
            value={groupName}
            onChange={(event) => setGroupName(event.target.value)}
            required={type === "register" ? true : false}
          />
          <Input
            placeholder="Description"
            type="text"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            required={type === "register" ? true : false}
          />
          <Input
            placeholder="Category"
            type="text"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            required={type === "register" ? true : false}
          />
        </div>
        {type === "register" ? (
          <>
            <button type="submit">Create new group</button>
            <h3
              style={{
                color: "#c986ff",
                fontSize: "12px",
                cursor: "pointer",
                marginTop: "16px",
              }}
              onClick={() => setShowFormGroup(false)}
            >
              Cancel
            </h3>
          </>
        ) : (
          <>
            <button type="submit">Edit group's infos</button>
            <h3
              style={{
                color: "#c986ff",
                fontSize: "12px",
                cursor: "pointer",
                marginTop: "16px",
              }}
              onClick={() => setShowEditForm(false)}
            >
              Cancel
            </h3>
          </>
        )}
      </Form>
    </FormPage>
  );
};
