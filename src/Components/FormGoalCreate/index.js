import { api } from "../../Services/api";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";

export const FormGoalCreate = ({ idGroup }) => {
  const token = JSON.parse(localStorage.getItem("@EH")) || "";

  const formSchema = yup.object().shape({
    title: yup.string().required("Titulo obrigatório"),
    difficulty: yup.string().required("Dificuldade obrigatória"),
  });

  const [goals, setGoals] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const createGoal = (data) => {
    data.how_much_achieved = 100;
    data.group = idGroup;

    api
      .post(`/goals/`, data, {
        headers: { Authorization: "Bearer " + token },
      })
      .then((response) => {
        setGoals([...goals, response.data]);
      })
      .catch((err) => console.log("nao criou"));
  };

  return (
    <form onSubmit={handleSubmit(createGoal)}>
      <input type="text" {...register("title")} placeholder="Título da meta" />
      {errors.title?.message}
      <input
        type="text"
        {...register("difficulty")}
        placeholder="Dificuldade"
      />
      {errors.title?.message}
      <button type="submit"> Cadastrar</button>
    </form>
  );
};
