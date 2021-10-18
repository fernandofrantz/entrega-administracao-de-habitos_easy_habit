import { useHistory } from "react-router";

export const CardGroup = ({ item }) => {
  const history = useHistory();
  const handleDirection = (id) => {
    history.push(`/group/${id}/`);
  };
  const { id, name, description, category } = item;

  return (
    <div onClick={() => handleDirection(id)}>
      <div>{`id: ${id}`}</div>
      <div>{name}</div>
      <div>{description}</div>
      <div>{category}</div>
    </div>
  );
};
