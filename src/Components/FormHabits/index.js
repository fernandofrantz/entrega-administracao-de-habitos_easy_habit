import { useEffect, useState } from "react";
import { useHabits } from "../../Providers/Habits";
import jwt_decode from "jwt-decode";

export const FormHabits = ({ type, idHabit }) => {
  const token = JSON.parse(localStorage.getItem("@EH"));
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [frequency, setFrequency] = useState("");
  const [idUser, setIdUser] = useState("");

  const { createHabits, updateHabits } = useHabits();

  useEffect(() => {
    if (token) {
      const { user_id } = jwt_decode(token);
      setIdUser(user_id);
    }
  }, []);

  const register = () => {
    const data = {
      title: title,
      category: category,
      difficulty: difficulty,
      frequency: frequency,
      how_much_achieved: 30,
      user: idUser,
    };
    createHabits(data);
  };

  const edit = () => {
    const data = {};
    if (title) data.title = title;
    if (category) data.category = category;
    if (difficulty) data.difficulty = difficulty;
    if (frequency) data.frequency = frequency;

    updateHabits(data, idHabit);
  };

  return (
    <div>
      <input
        placeholder="Titulo do habito"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required={type === "register" ? true : false}
      />
      <input
        placeholder="Categoria"
        type="text"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        required={type === "register" ? true : false}
      />
      <input
        placeholder="dificuldade"
        type="text"
        value={difficulty}
        onChange={(event) => setDifficulty(event.target.value)}
        required={type === "register" ? true : false}
      />
      <input
        placeholder="frequencia"
        type="text"
        value={frequency}
        onChange={(event) => setFrequency(event.target.value)}
        required={type === "register" ? true : false}
      />
      <button onClick={type === "register" ? register : edit}>
        {type === "register" ? "Cadastrar" : "Editar"}
      </button>
    </div>
  );
};
