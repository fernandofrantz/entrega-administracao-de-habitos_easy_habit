import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
export const FormCreateHabits = () => {
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
    <div className="criarHabito">
      <h3>Criar novo habito</h3>
      <form onSubmit={handleSubmit(handleCreateHabit)}>
        <input placeholder="Habit title" type="text" {...register("title")} />
        <br />
        <input placeholder="Category" type="text" {...register("category")} />
        <br />
        <select placeholder="Dificulty" type="text" {...register("dificulty")}>
          <option></option>
          <option value="easy">Facil</option>
          <option value="medium">Medio</option>
          <option value="hard">Dificil</option>
        </select>
        <br />
        <select placeholder="Frequency" type="text" {...register("frequency")}>
          <option></option>
          <option value="diary">dia</option>
          <option value="week">mes</option>
          <option value="month">ano</option>
        </select>
        <br />
        <button type="submit">Create habit</button>
      </form>
    </div>
  );
};
