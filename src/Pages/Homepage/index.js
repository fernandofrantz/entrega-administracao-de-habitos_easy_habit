import axios from "axios";
import { useEffect, useState } from "react";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { Link, useHistory } from "react-router-dom";
import NavigationMenu from "../../Components/NavigationMenu";
import { useUser } from "../../Providers/User";

export const Homepage = () => {
  const { auth } = useUser();
  const [habits, setHabits] = useState([]);
  const history = useHistory()
  
  let newDate = new Date();
  const weekDay = newDate.getDay();


  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@EH:token"));
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        Authorization: "Bearer " + token,
      })
      .then((response) => {
        setHabits(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const deleteHabit = (id) =>{
    axios
    .delete(`https://kenzie-habits.herokuapp.com/habits/${id}/`)
  }


  if(!auth){
    history.push("/login")
  }
  return (
    <div>
      <h2>Yours Habits</h2>

      <main>
        <div>
          <h2>Today's habits</h2>
        </div>
        <div>
          {habits
            .filter(
              (item) =>
                item.frequency === weekDay || item.frequency === "Diária"
            )
            .map((item) => (
              <div>
                <h4>{item.category}</h4>
                <h3>{item.title}</h3>
              </div>
            ))}
        </div>

        <div>
          <h2>Tomorrow's habits</h2>
          <div>
            {habits
              .filter((item) => {
                if (weekDay === 6) {
                  return item.frequency === 0;
                } else {
                  return (
                    item.frequency === weekDay + 1 ||
                    item.frequency === "Diária"
                  );
                }
              })
              .map((item) => (
                <div>
                  <h4>{item.category}</h4>
                  <h3>{item.title}</h3>
                  <div>
                    <Link to={`/habit/${item.id}`}>
                      <MdModeEdit />
                    </Link>
                    <MdDelete onClick={()=>deleteHabit(item.id)}/>

                  </div>
                </div>
              ))}
          </div>
        </div>
      </main>

      <NavigationMenu />
    </div>
  );
};
