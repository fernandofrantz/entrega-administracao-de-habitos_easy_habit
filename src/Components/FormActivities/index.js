import { useContext } from "react";
import { ActivityContext } from "../../Providers/Activity";

const FormActivities = ({ idGroup, idActivity, type }) => {
  const {
    title,
    realizationTime,
    setTitle,
    setRealizationTime,
    createActivity,
    editActivity,
  } = useContext(ActivityContext);

  return (
    <>
      {type === "register" && (
        <section>
          <input
            placeholder="Título da atividade"
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <input
            placeholder="Tempo de realização"
            value={realizationTime}
            type="datetime-local"
            onChange={(e) => setRealizationTime(e.target.value)}
            required
          />
          <button onClick={() => createActivity(idGroup)}> Criar </button>
        </section>
      )}

      {type === "edit" && (
        <section>
          <input
            placeholder="Título da atividade"
            value={title}
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            placeholder="Tempo de realização"
            value={realizationTime}
            type="datetime-local"
            onChange={(e) => setRealizationTime(e.target.value)}
          />
          <button onClick={() => editActivity(idActivity)}> Editar </button>
        </section>
      )}
    </>
  );
};

export default FormActivities;
