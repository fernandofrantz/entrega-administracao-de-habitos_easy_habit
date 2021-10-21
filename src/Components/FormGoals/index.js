import { useContext } from "react";
import { GoalsContext } from "../../Providers/Goals";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FormPage } from "./styles";

const FormGoal = ({ idGroup, idGoal, type}) => {
  const { title, 
          setTitle, 
          dificult, 
          setDificult, 
          setShowForm,
          createGoal, 
          editeGoal } = useContext(GoalsContext);

          

  return (
    <FormPage>
      <div className="iconContainer" onClick={() => setShowForm(false)}>
        <IoMdArrowRoundBack />
      </div>
      <form
        onSubmit={() => {
          type === "register" ? createGoal(idGroup) : editeGoal(idGoal);
        }}
      >
        <div className="effect"></div>
        <div className="inputContainer">
          <input
            placeholder="Title"
            type="text"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
            required={type === "register" ? true : false}
          />
          <input
            placeholder="Difficulty"
            type="text"
            value={dificult}
            onChange={(event) => setDificult(event.target.value)}
            required={type === "register" ? true : false}
          />
        </div>

        <button type="submit">
          {type === "register" ? "Create new goal" : "Edit"}
        </button>
      </form>
    </FormPage>
  );
};

export default FormGoal;
