import { useContext, useState } from "react";
import { useParams } from "react-router";
import { CardActivities } from "../../Components/CardActivities";
import FormActivities from "../../Components/FormActivities";
import { ActivityContext } from "../../Providers/Activity";

const ListActivity = ({ showOptionCreate }) => {
  const [showFormActivity, setShowFormActivity] = useState(false);

  const { id } = useParams();

  const { activities } = useContext(ActivityContext);

  return (
    <>
      <ul>
        {activities.map((item) => (
          <li key={item.id}>
            <div>
              <CardActivities item={item} editable={showOptionCreate} />
            </div>
          </li>
        ))}
      </ul>
      <section>
        {showFormActivity && <FormActivities idGroup={id} type={"register"} />}
        {showOptionCreate && (
          <button onClick={() => setShowFormActivity(!showFormActivity)}>
            Criar Atividade
          </button>
        )}
      </section>
    </>
  );
};

export default ListActivity;
