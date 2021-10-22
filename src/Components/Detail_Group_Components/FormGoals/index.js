import { useContext } from "react";
import { GoalsContext } from "../../../Providers/Goals";
// import { IoMdArrowRoundBack } from "react-icons/io";
import { FormPageGoal, Input, Section } from "./styles";

const FormGoal = ({ idGroup, idGoal, type, setShowFormEdit }) => {
  const {
    title,
    setTitle,
    dificult,
    setDificult,
    setShowForm,
    createGoal,
    editeGoal,
  } = useContext(GoalsContext);

  return (
    <FormPageGoal>
      <div className="iconContainer" onClick={() => setShowForm(false)}>
        {/* <IoMdArrowRoundBack /> */}
      </div>
      <Section>
        <div className="effect">
          {type === "register" ? <h2>Creating</h2> : <h2>Editing</h2>}
        </div>
        <form
          onSubmit={() => {
            type === "register" ? createGoal(idGroup) : editeGoal(idGoal);
          }}
        >
          <div className="inputContainer">
            <Input
              placeholder="Title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required={type === "register" ? true : false}
            />
            <Input
              placeholder="Difficulty"
              type="text"
              value={dificult}
              onChange={(event) => setDificult(event.target.value)}
              required={type === "register" ? true : false}
            />

            <button type="submit">
              {type === "register" ? "Create new goal" : "Edit"}
            </button>
            <h3
              style={{
                color: "#c986ff",
                fontSize: "12px",
                cursor: "pointer",
                marginTop: "16px",
              }}
              onClick={() => {
                setShowFormEdit(false);
                setShowForm(false);
              }}
            >
              Cancel
            </h3>
          </div>
        </form>
      </Section>
    </FormPageGoal>
  );
};

export default FormGoal;
