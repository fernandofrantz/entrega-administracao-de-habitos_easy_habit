import { useParams } from "react-router";

export const DetailGroup = () => {
  const { id } = useParams();
  return <div>detalhe do grupo {id}</div>;
};
