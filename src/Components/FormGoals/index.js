import { useContext } from "react";
import { GoalsContext } from "../../Providers/Goals";


const FormGoal = ({ idGroup, idGoal, type, setShowForm}) => {
 
  const { title,  
          setTitle, 
          dificult, 
          setDificult, 
          createGoal, 
          editeGoal} = useContext(GoalsContext);

  return (
    <div>
      <input
        placeholder="Titulo da Meta"
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required={type === "register" ? true : false}
      />
      <input
        placeholder="Dificuldade"
        type="text"
        value={dificult}
        onChange={(event) => setDificult(event.target.value)}
        required={type === "register" ? true : false}
      />

      <button onClick={() => {type === "register" ? createGoal(idGroup) : editeGoal(idGoal)}}>
        {type === "register" ? "Cadastrar" : "Editar"}
      </button>
    </div>
  );
};

export default FormGoal;
