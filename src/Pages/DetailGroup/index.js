import { useParams } from "react-router";
import NavigationMenu from "../../Components/NavigationMenu";

export const DetailGroup = () => {
  const { id } = useParams();
  return <div>
    <h2>
      detalhe do grupo {id}
      </h2>
    <NavigationMenu/>

      </div>;
};
