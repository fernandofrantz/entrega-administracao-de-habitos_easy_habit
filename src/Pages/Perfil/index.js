import EditProfile from "../../Components/EditProfile";
import NavigationMenu from "../../Components/NavigationMenu";
import { Body, LogoutCircle, Main } from "./styles";
import { MdLogout, MdCancel } from "react-icons/md";
import { useUser } from "../../Providers/User";
import { useEffect, useState } from "react";
<<<<<<< HEAD
import axios from "axios";
import jwt_decode from "jwt-decode";
import userGray from "../../assets/userPic.png"
=======
import jwt_decode from "jwt-decode";
import axios from "axios";
>>>>>>> 2d990dbc750f66b097df111a8bcb2f2597b4630b

export const Perfil = () => {
  const { Logout } = useUser();
  const [editMode, setEditMode] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // const randomPicture = () =>{
  //   const randomPage = Math.floor(Math.random() * 34) + 1;
  //   axios.get(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
  //   .then(response => {
  //     const randomCharacter = Math.floor(Math.random() * response.results.length);
  //     console.log(randomCharacter)
  //     setImage(response.results[randomCharacter].image);
  //   })
  //   .catch(_ => setImage("../../assets/userPic.png") );
  // }

  // randomPicture()

  // setImage("../../assets/userPic.png")

  useEffect(() => {
    const { user_id } = jwt_decode(JSON.parse(localStorage.getItem("@EH")));

    axios
      .get(`https://kenzie-habits.herokuapp.com/users/${user_id}/`)
      .then((response) => {
        setName(response.data.username);
        setEmail(response.data.email);
        console.log(response);
      })
      .catch((error) => console.log("nao rolou", error));
  }, []);

  return (
    <Body>
      <header>
        <LogoutCircle>
          <MdLogout onClick={Logout} />
        </LogoutCircle>
        <h3 onClick={Logout}>Logout</h3>
      </header>

      <Main>
        <figure>
          <img src={userGray} alt="random" />
        </figure>
        {editMode ? (
          <>
            <EditProfile />
            <button onClick={() => setEditMode(false)}><MdCancel/></button>
          </>
        ) : (
          <>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <h5 onClick={()=> setEditMode(true)}>edit profile </h5>
          </>
        )}
      </Main>

      <NavigationMenu />
    </Body>
  );
};
