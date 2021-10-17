import NavigationMenu from "../../Components/NavigationMenu";

export const Homepage = () => {
  let newDate = new Date();
  const weekDay = newDate.getDay();

  return (
    <div>
      <h2>Yours Habits</h2>

      <main>
        <div></div>
      </main>

      <NavigationMenu />
    </div>
  );
};
