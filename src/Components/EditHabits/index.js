import { useEffect, useState } from "react";
import { useHabits } from "../../Providers/Habits";
import jwt_decode from "jwt-decode";
import { InputHabits } from "../FormCreateHabits/styles";
import { ButtonsDiv, CheckboxDiv, ContainerEditForm } from "./styles";
import { Cancel } from "@material-ui/icons";
import { MdModeEdit, MdClose } from "react-icons/md";
import HeaderButtons from "../StylesComponents/HeaderButtons";

const FormEditHabits = ({ idHabit, setShowForm }) => {
  const token = JSON.parse(localStorage.getItem("@EH"));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [frequency, setFrequency] = useState([]);
  const [idUser, setIdUser] = useState("");

  const { updateHabits } = useHabits();

  useEffect(() => {
    if (token) {
      const { user_id } = jwt_decode(token);
      setIdUser(user_id);
    }
  }, []);

  const edit = () => {
    const data = {};
    if (title) data.title = title;
    if (category) data.category = category;
    if (frequency.length !== 0) data.frequency = frequency.toString();
    else delete data.frequency;

    updateHabits(data, idHabit);
    setShowForm(false);
  };

  return (
    <ContainerEditForm>
      <h3>Edit this habit</h3>
      <InputHabits
        placeholder="Habit Title"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <InputHabits
        placeholder="Category"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <br />
      <CheckboxDiv>
        <div>
          <label> Monday </label>
          <input
            type="checkbox"
            value="1"
            onClick={(evt) => {
              const localInfo = frequency.find((element) => {
                return element === evt.target.value;
              });

              if (localInfo !== undefined) {
                const localItem = frequency.filter((element) => {
                  return element !== evt.target.value;
                });
                setFrequency(localItem);
              } else setFrequency(frequency.concat(evt.target.value));
            }}
          />
        </div>
        <div>
          <label> Tuesday </label>
          <input
            type="checkbox"
            value="2"
            onClick={(evt) => {
              const localInfo = frequency.find((element) => {
                return element === evt.target.value;
              });

              if (localInfo !== undefined) {
                const localItem = frequency.filter((element) => {
                  return element !== evt.target.value;
                });
                setFrequency(localItem);
              } else setFrequency(frequency.concat(evt.target.value));
            }}
            style={{ accentColor: "#9453c8" }}
          />
        </div>
        <div>
          <label> Wednesday </label>
          <input
            type="checkbox"
            value="3"
            onClick={(evt) => {
              const localInfo = frequency.find((element) => {
                return element === evt.target.value;
              });

              if (localInfo !== undefined) {
                const localItem = frequency.filter((element) => {
                  return element !== evt.target.value;
                });
                setFrequency(localItem);
              } else setFrequency(frequency.concat(evt.target.value));
            }}
          />
        </div>
        <div>
          <label> Thursday </label>
          <input
            type="checkbox"
            value="4"
            onClick={(evt) => {
              const localInfo = frequency.find((element) => {
                return element === evt.target.value;
              });

              if (localInfo !== undefined) {
                const localItem = frequency.filter((element) => {
                  return element !== evt.target.value;
                });
                setFrequency(localItem);
              } else setFrequency(frequency.concat(evt.target.value));
            }}
          />
        </div>
        <div>
          <label> Friday </label>
          <input
            type="checkbox"
            value="5"
            onClick={(evt) => {
              const localInfo = frequency.find((element) => {
                return element === evt.target.value;
              });

              if (localInfo !== undefined) {
                const localItem = frequency.filter((element) => {
                  return element !== evt.target.value;
                });
                setFrequency(localItem);
              } else setFrequency(frequency.concat(evt.target.value));
            }}
          />
        </div>
        <div>
          <label> Saturday </label>
          <input
            type="checkbox"
            value="6"
            onClick={(evt) => {
              const localInfo = frequency.find((element) => {
                return element === evt.target.value;
              });

              if (localInfo !== undefined) {
                const localItem = frequency.filter((element) => {
                  return element !== evt.target.value;
                });
                setFrequency(localItem);
              } else setFrequency(frequency.concat(evt.target.value));
            }}
          />
        </div>
        <div>
          <label> Sunday </label>
          <input
            type="checkbox"
            value="0"
            onClick={(evt) => {
              const localInfo = frequency.find((element) => {
                return element === evt.target.value;
              });

              if (localInfo !== undefined) {
                const localItem = frequency.filter((element) => {
                  return element !== evt.target.value;
                });
                setFrequency(localItem);
              } else setFrequency(frequency.concat(evt.target.value));
            }}
          />
        </div>
      </CheckboxDiv>
      <ButtonsDiv>
        <HeaderButtons
          children={"Edit"}
          icon={MdModeEdit}
          backGroundColor={"#C986FF"}
          buttonFunction={edit}
        />
        <MdClose onClick={() => setShowForm(false)}></MdClose>
      </ButtonsDiv>
    </ContainerEditForm>
  );
};

export default FormEditHabits;
