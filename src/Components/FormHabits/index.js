// import { useEffect, useState } from "react";
// import { useHabits } from "../../Providers/Habits";
// import jwt_decode from "jwt-decode";

// export const FormHabits = ({ type, idHabit }) => {
//   const token = JSON.parse(localStorage.getItem("@EH"));
//   const [title, setTitle] = useState("");
//   const [category, setCategory] = useState("");
//   const [difficulty, setDifficulty] = useState("");
//   const [frequency, setFrequency] = useState("");
//   const [idUser, setIdUser] = useState("");

//   const { createHabits, updateHabits } = useHabits();

//   useEffect(() => {
//     if (token) {
//       const { user_id } = jwt_decode(token);
//       setIdUser(user_id);
//     }
//   }, []);

//   const register = () => {
//     const data = {
//       title: title,
//       category: category,
//       difficulty: difficulty,
//       frequency: frequency,
//       how_much_achieved: 30,
//       user: idUser,
//     };
//     createHabits(data);
//   };

//   const edit = () => {
//     const data = {};
//     if (title) data.title = title;
//     if (category) data.category = category;
//     if (difficulty) data.difficulty = difficulty;
//     if (frequency) data.frequency = frequency;

//     updateHabits(data, idHabit);
//   };

//   return (
//     <div>
//       <input
//         placeholder="Titulo do habito"
//         type="text"
//         value={title}
//         onChange={(event) => setTitle(event.target.value)}
//         required={type === "register" ? true : false}
//       />
//       <input
//         placeholder="Categoria"
//         type="text"
//         value={category}
//         onChange={(event) => setCategory(event.target.value)}
//         required={type === "register" ? true : false}
//       />
//       <input
//         placeholder="dificuldade"
//         type="text"
//         value={difficulty}
//         onChange={(event) => setDifficulty(event.target.value)}
//         required={type === "register" ? true : false}
//       />
//       <input
//         placeholder="frequencia"
//         type="text"
//         value={frequency}
//         onChange={(event) => setFrequency(event.target.value)}
//         required={type === "register" ? true : false}
//       />
//       <button onClick={type === "register" ? register : edit}>
//         {type === "register" ? "Cadastrar" : "Editar"}
//       </button>
//     </div>
//   );
// };

import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
export const FormHabits = () => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Title required"),
    category: yup.string().required("Category required"),
    dificulty: yup.string().required("Dificulty required"),
    frequency: yup.string().required("Frequency required"),
  });
  const handleCreateHabit = (data) => {
    const Token = JSON.parse(localStorage.getItem("@EH"));
    const finalInfo = {
      title: data.title,
      category: data.category,
      difficulty: data.dificulty,
      frequency: data.frequency,
      achieved: false,
      how_much_achieved: 0,
      user: jwt_decode(Token).user_id,
    };
    api
      .post("/habits/", finalInfo, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((response) => toast.success("criado com sucesso"))
      .catch((err) => toast.error(err + ""));
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  useEffect(() => {
    toast.error(errors.title?.message);
    toast.error(errors.category?.message);
    toast.error(errors.dificulty?.message);
    toast.error(errors.frequency?.message);
  }, [errors]);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleCreateHabit)}>
          <input placeholder="Habit title" type="text" {...register("title")} />
          <input placeholder="Category" type="text" {...register("category")} />
          <select
            placeholder="Dificulty"
            type="text"
            {...register("dificulty")}
          >
            <option></option>
            <option value="easy">Facil</option>
            <option value="medium">Medio</option>
            <option value="hard">Dificil</option>
          </select>
          <select
            placeholder="Frequency"
            type="text"
            {...register("frequency")}
          >
            <option></option>
            <option value="diary">dia</option>
            <option value="week">mes</option>
            <option value="month">ano</option>
          </select>
          <button type="submit">Create habit</button>
        </form>
      </div>
    </>
  );
};
