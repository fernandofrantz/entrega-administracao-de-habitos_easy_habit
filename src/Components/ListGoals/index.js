import { useContext } from "react";
import { useParams } from "react-router";
import { GoalsContext } from "../../Providers/Goals";
import { CardGoals } from "../CardGoals";
import FormGoal from "../FormGoals";

const ListGoals = ({ showOptionCreate, handleUnsubscribe }) => {
  const { id } = useParams();

  const { goals, showForm, setShowForm } = useContext(GoalsContext);

  return (
    <>
      <ul>
        {goals.map((item, index) => (
          <li key={index}>
            <div>
              <CardGoals item={item} editable={showOptionCreate} />
            </div>
          </li>
        ))}
      </ul>

      {showOptionCreate && (
        <button onClick={() => setShowForm(!showForm)}>criar meta</button>
      )}
      {showOptionCreate && (
        <button onClick={() => handleUnsubscribe(id)}>unsubscribe</button>
      )}
      {showForm && (
        <FormGoal idGroup={id} type={"register"} setShowForm={setShowForm} />
      )}
    </>
  );
};

export default ListGoals;
