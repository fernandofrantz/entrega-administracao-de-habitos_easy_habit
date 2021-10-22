import { useContext } from "react";
import { ActivityContext } from "../../../Providers/Activity";
import { FormPageActivity, Input, Section } from "./styles";
// import { IoMdArrowRoundBack } from "react-icons/io";

const FormActivities = ({ idGroup, idActivity, type, setShowFormEdit }) => {
  const {
    title,
    realizationTime,
    setTitle,
    setRealizationTime,
    createActivity,
    editActivity,
    setShowFormActivity,
  } = useContext(ActivityContext);

  return (
    <FormPageActivity>
      <div className="iconContainer">
        {/* <IoMdArrowRoundBack /> */}
      </div>
      <Section>
      <div className="effect">
        {type === "register" ? <h2>Creating</h2> : <h2>Editing</h2>}
        </div>

        {type === "register" && (
          <div className="inputContainer">
            <Input
              placeholder="Ttile"
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <Input
              placeholder="Period of realization"
              value={realizationTime}
              type="datetime-local"
              onChange={(e) => setRealizationTime(e.target.value)}
              required
            />
            <button onClick={() => createActivity(idGroup)}>
              Create new activity</button>
            <h3
              style={{
                color: "#c986ff",
                fontSize: "12px",
                cursor: "pointer",
                marginTop: "16px",
              }}
              onClick={() => setShowFormActivity(false)}
            >
              Cancel
            </h3>
          </div>
        )}

        {type === "edit" && (

          <div className="inputContainer">
            <Input
              placeholder="Título da atividade"
              value={title}
              type="text"
              onChange={(e) => setTitle(e.target.value)}
            />
            <Input
              placeholder="Tempo de realização"
              value={realizationTime}
              type="datetime-local"
              onChange={(e) => setRealizationTime(e.target.value)}
            />
            <button onClick={() => editActivity(idActivity)}> Edit </button>
            <h3
              style={{
                color: "#c986ff",
                fontSize: "12px",
                cursor: "pointer",
                marginTop: "16px",
              }}
              onClick={() => {
                setShowFormEdit(false);
                setShowFormActivity(false);
              }}
            >
              Cancel
            </h3>
          </div>
        )}
      </Section>
    </FormPageActivity>
  );
};

export default FormActivities;
