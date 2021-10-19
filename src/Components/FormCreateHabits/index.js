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
  });

  const [list, setList] = useState([]);

  const handleCreateHabit = (data) => {
    const Token = JSON.parse(localStorage.getItem("@EH"));
    const finalInfo = {
      title: data.title,
      category: data.category,
      difficulty: data.dificulty,
      frequency: list.toString(),
      achieved: false,
      how_much_achieved: 0,
      user: jwt_decode(Token).user_id,
    };
    console.log(finalInfo);
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
        <select type="text" {...register("dificulty")}>
          <option></option>
          <option value="easy">Facil</option>
          <option value="medium">Medio</option>
          <option value="hard">Dificil</option>
        </select>
        <br />
        <laber> Monday </laber>
        <input
          type="checkbox"
          value="1"
          onClick={(evt) => {
            const localInfo = list.find((element) => {
              return element === evt.target.value;
            });

            if (localInfo !== undefined) {
              const localItem = list.filter((element) => {
                return element !== evt.target.value;
              });
              setList(localItem);
            } else setList(list.concat(evt.target.value));
          }}
        />
        <laber> Tuesday </laber>
        <input
          type="checkbox"
          value="2"
          onClick={(evt) => {
            const localInfo = list.find((element) => {
              return element === evt.target.value;
            });

            if (localInfo !== undefined) {
              const localItem = list.filter((element) => {
                return element !== evt.target.value;
              });
              setList(localItem);
            } else setList(list.concat(evt.target.value));
          }}
        />
        <laber> Wednesday </laber>
        <input
          type="checkbox"
          value="3"
          onClick={(evt) => {
            const localInfo = list.find((element) => {
              return element === evt.target.value;
            });

            if (localInfo !== undefined) {
              const localItem = list.filter((element) => {
                return element !== evt.target.value;
              });
              setList(localItem);
            } else setList(list.concat(evt.target.value));
          }}
        />
        <laber> Tursday </laber>
        <input
          type="checkbox"
          value="4"
          onClick={(evt) => {
            const localInfo = list.find((element) => {
              return element === evt.target.value;
            });

            if (localInfo !== undefined) {
              const localItem = list.filter((element) => {
                return element !== evt.target.value;
              });
              setList(localItem);
            } else setList(list.concat(evt.target.value));
          }}
        />
        <laber> Friday </laber>
        <input
          type="checkbox"
          value="5"
          onClick={(evt) => {
            const localInfo = list.find((element) => {
              return element === evt.target.value;
            });

            if (localInfo !== undefined) {
              const localItem = list.filter((element) => {
                return element !== evt.target.value;
              });
              setList(localItem);
            } else setList(list.concat(evt.target.value));
          }}
        />
        <laber> Saturday </laber>
        <input
          type="checkbox"
          value="6"
          onClick={(evt) => {
            const localInfo = list.find((element) => {
              return element === evt.target.value;
            });

            if (localInfo !== undefined) {
              const localItem = list.filter((element) => {
                return element !== evt.target.value;
              });
              setList(localItem);
            } else setList(list.concat(evt.target.value));
          }}
        />
        <laber> Sunday </laber>
        <input
          type="checkbox"
          value="0"
          onClick={(evt) => {
            const localInfo = list.find((element) => {
              return element === evt.target.value;
            });

            if (localInfo !== undefined) {
              const localItem = list.filter((element) => {
                return element !== evt.target.value;
              });
              setList(localItem);
            } else setList(list.concat(evt.target.value));
          }}
        />
        <br />
        <button type="submit">Create habit</button>
      </form>
    </div>
  );
};
