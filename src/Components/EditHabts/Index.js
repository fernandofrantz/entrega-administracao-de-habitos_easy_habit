import { useEffect, useState } from "react";
import { useHabits } from "../../Providers/Habits";
import jwt_decode from "jwt-decode";

export const FormHabitsEdit = ({ idHabit }) => {
  const token = JSON.parse(localStorage.getItem("@EH"));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
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
    if (difficulty !== "") data.difficulty = difficulty;
    else delete data.difficulty;
    if (frequency.length !== 0) data.frequency = frequency.toString();
    else delete data.frequency;


    updateHabits(data, idHabit);
  };

  return (
    <div>
      <input
        placeholder="Titulo do habito"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        placeholder="Categoria"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      />
      <select
        type="text"
        onChange={(evt) => {
          setDifficulty(evt.target.value);
        }}
      >
        <option></option>
        <option value="easy">Facil</option>
        <option value="medium">Medio</option>
        <option value="hard">Dificil</option>
      </select>
      <br />
      <laber> Monday </laber>
      <input
        type="checkbox"
        value="Monday"
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
      <laber> Tuesday </laber>
      <input
        type="checkbox"
        value="Tuesday"
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
      <laber> Wednesday </laber>
      <input
        type="checkbox"
        value="Wednesday"
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
      <laber> Tursday </laber>
      <input
        type="checkbox"
        value="Tursday"
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
      <laber> Friday </laber>
      <input
        type="checkbox"
        value="Friday"
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
      <laber> Saturday </laber>
      <input
        type="checkbox"
        value="Saturday"
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
      <laber> Sunday </laber>
      <input
        type="checkbox"
        value="Sunday"
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
      <button onClick={edit}>Editar </button>
    </div>
  );
};
