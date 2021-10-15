import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";

const FormCreateHabits = () => {
  // state com user id
  // state com token

  const formSchema = yup.object().shape({
    title: yup.string().required("Title required"),
    category: yup.string().required("Category required"),
    dificulty: yup.string().required("Dificulty required"),
    frequency: yup.string().required("Frequency required"),
    achieved: false,
    how_much_achieved: 0,
    user: userId,
  });

  const handleCreateHabit = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/habits/", data, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleCreateHabit)}>
          <input placeholder="Habit title" type="text" {...register("title")} />
          {errors.title?.message}

          <input placeholder="Category" type="text" {...register("category")} />
          {errors.category?.message}

          <select
            placeholder="Dificulty"
            type="text"
            {...register("dificulty")}
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
          {errors.dificulty?.message}

          <input
            placeholder="Frequency"
            type="text"
            {...register("frequency")}
          />
          {errors.frequency?.message}

          <button type="submit">Create habit</button>
        </form>
      </div>
    </>
  );
};
