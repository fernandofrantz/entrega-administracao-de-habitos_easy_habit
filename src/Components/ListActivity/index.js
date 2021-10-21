import { useContext} from "react";
import { useParams } from "react-router";
import { CardActivities } from "../../Components/CardActivities";
import FormActivities from "../../Components/FormActivities";
import { ActivityContext } from "../../Providers/Activity";

const ListActivity = ({ showOptionCreate }) => {

  const { id } = useParams();

  const { activities, showFormActivity, setShowFormActivity } = useContext(ActivityContext);

  return (
    <>
      <ul>
        {activities.map(item => (
          <li key={item.id}>
            <div>
              <CardActivities item={item} editable={showOptionCreate} />
            </div>
          </li>
        ))}
      </ul>
      <section>
      {showOptionCreate && (
        <button onClick={() => setShowFormActivity(!showFormActivity)}>criar atividade</button>
      )}
      {showFormActivity && <FormActivities idGroup={id} type={"register"} />}
      </section>
    </>
  );
};

export default ListActivity;
