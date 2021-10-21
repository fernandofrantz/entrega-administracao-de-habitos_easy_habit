import { useContext } from "react";
import { useParams } from "react-router";
import { CardActivities } from "../../Components/CardActivities";
import FormActivities from "../../Components/FormActivities";
import { ActivityContext } from "../../Providers/Activity";
import { useGroups } from "../../Providers/Groups";
import { MdCreateNewFolder } from "react-icons/md";
import { ActivityTitle } from "./styles";

const ListActivity = () => {
  const { id } = useParams();

  const { activities, showFormActivity, setShowFormActivity } = useContext(ActivityContext);
  const { showOptionCreate } = useGroups()

  return (
    <>
      <ActivityTitle> 
        Activities

        {showOptionCreate && 
          <MdCreateNewFolder
            backgroundColor={"#ef7070"} 
            style={{ position: "absolute", right: 0, marginRight: "16px"}} 
            onClick={() => setShowFormActivity(!showFormActivity)} 
          />  
        }
      </ActivityTitle>

      <ul>
        {activities.map((item) => (
          <li key={item.id}>
            <div>
              <CardActivities item={item} editable={showOptionCreate} />
            </div>
          </li>
        ))}
      </ul>
        
      {showFormActivity && <FormActivities idGroup={id} type={"register"} />}
      
    </>
  );
};

export default ListActivity;
