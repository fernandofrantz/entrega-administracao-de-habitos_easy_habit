// create habit
// must recieve token by parameter

import axios from "axios";
import { useEffect, useState } from "react";

const CreateHabits = () => {
  // create habit
  const handleFormCreateHabits = (data) => {
    axios
      .post("https://kenzie-habits.herokuapp.com/habits/", data, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  //update habits
  const updateHabits = (dataToUpdate, habitId) => {
    axios
      .patch(
        `https://kenzie-habits.herokuapp.com/habits/${habitId}`,
        dataToUpdate,
        {
          headers: { Authorization: `bearer ${token}` },
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  //get habits
  const [habits, setHabits] = useState();
  useEffect(
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => setHabits(response))
      .catch((err) => console.log(err))
  );

  //delete habit
  const deleteHabits = (habitId) => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/habits/${habitId}`, {
        headers: { Authorization: `bearer ${token}` },
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>habits</div>
    </>
  );
};
export default CreateHabits;
