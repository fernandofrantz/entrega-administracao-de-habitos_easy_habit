import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.min.css";
import { api } from "../../Services/api";
import jwt_decode from "jwt-decode";
import {
  CheckboxDiv,
  ColoredButton,
  ContainerForm,
  InputHabits,
} from "./styles";
import HeaderButtons from "../StylesComponents/HeaderButtons";

export const FormCreateHabits = ({ setShowForm }) => {
  const formSchema = yup.object().shape({
    title: yup.string().required("Title required"),
    category: yup.string().required("Category required"),
  });

  const [list, setList] = useState([]);

  const handleCreateHabit = (data) => {
    const Token = JSON.parse(localStorage.getItem("@EH"));
    const finalInfo = {
      title: data.title,
      category: data.category,
      difficulty: "facil",
      frequency: list.toString(),
      achieved: false,
      how_much_achieved: 0,
      user: jwt_decode(Token).user_id,
    };
    // console.log(finalInfo);
    api
      .post("/habits/", finalInfo, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((response) => toast.success("criado com sucesso"))
      .catch((err) => toast.error(err + ""));

    setShowForm(false);
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
    toast.error(errors.frequency?.message);
  }, [errors]);

  return (
    <ContainerForm className="criarHabito">
      <h3>Create a new habit!</h3>
      <form onSubmit={handleSubmit(handleCreateHabit)}>
        <InputHabits
          placeholder="Habit title"
          type="text"
          {...register("title")}
        />
        <br />
        <InputHabits
          placeholder="Category"
          type="text"
          {...register("category")}
        />
        <br />
        <CheckboxDiv>
          <h3>Choose your weekly frequency:</h3>
          <div>
            <label> Monday </label>
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
          </div>
          <div>
            <label> Tuesday </label>
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
          </div>
          <div>
            <label> Wednesday </label>
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
          </div>
          <div>
            <label> Tursday </label>
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
          </div>
          <div>
            <label> Friday </label>
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
          </div>

          <div>
            <label> Saturday </label>
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
          </div>
          <div>
            <label> Sunday </label>
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
          </div>
        </CheckboxDiv>

        <br />
        <ColoredButton type="submit" backGroundColor={"rgb(148,83,200)"}>
          Add habit
        </ColoredButton>
      </form>
    </ContainerForm>
  );
};
