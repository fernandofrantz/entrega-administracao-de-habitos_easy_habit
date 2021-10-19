import { CardHabits } from "../CardHabits";

export const ContainerHabits = ({ item, list }) => {
  return (
    <>
      <h2>{item}</h2>

      <ul>
        {list
          .filter((items) => items.category === item)
          .map((item, index) => (
            <li key={index}>
              <CardHabits item={item} editable />
            </li>
          ))}
      </ul>
    </>
  );
};

export default ContainerHabits;
