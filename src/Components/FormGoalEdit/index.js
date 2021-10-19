import { api } from "../../Services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export const FormGoalEdit = ({ idGoal }) => {
  const token = JSON.parse(localStorage.getItem("@EH")) || "";

  const formSchema = yup.object().shape({
    title: yup.string(),
    difficulty: yup.string(),
  });

  const [goals, setGoals] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const editGoal = ({ title, difficulty }) => {
    const data = {};
    if (title) data.title = title;
    if (difficulty) data.difficulty = difficulty;

    api
      .patch(`/goals/${idGoal}/`, data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        const newGols = goals.filter((item) => item.id !== idGoal);
        setGoals([...newGols, response.data]);
        console.log(response.data);
      })
      .catch((err) => console.log("deu erro"));
  };

  return (
    <form onSubmit={handleSubmit(editGoal)}>
      <input type="text" {...register("title")} placeholder="Título da meta" />
      {errors.title?.message}
      <input
        type="text"
        {...register("difficulty")}
        placeholder="Dificuldade"
      />
      {errors.title?.message}
      <button type="submit"> Editar</button>
    </form>
  );
};
