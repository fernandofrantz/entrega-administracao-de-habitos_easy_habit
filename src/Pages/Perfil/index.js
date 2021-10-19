import EditProfile from "../../Components/EditProfile";
import NavigationMenu from "../../Components/NavigationMenu";
import { Body, LogoutCircle, Main } from "./styles";
import { MdLogout } from "react-icons/md";
import { useUser } from "../../Providers/User";
import { useEffect, useState } from "react";
import { axios } from "axios";
import jwt_decode from "jwt-decode";

export const Perfil = () => {
  const { Logout } = useUser();
  const [editMode, setEditMode] = useState(false);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    // const randomPage = Math.floor(Math.random() * 34) + 1;
    // axios.get(`https://rickandmortyapi.com/api/character/?page=${randomPage}`)
    // .then(response => {
    //   const randomCharacter = Math.floor(Math.random() * response.results.length);
    //   setImage(response.results[randomCharacter].image);
    // })
    // .catch(_ => setImage("../../assets/userPic.png") );

    const decode = jwt_decode(JSON.parse(localStorage.getItem("@EH")));
    const { id } = decode;

    axios
      .get(`https://kenzie-habits.herokuapp.com/users/${id}/`)
      .then((response) => {
        setName(response.username);
        setEmail(response.email);
      });
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
          <img src={image} alt="random" />
        </figure>
        {editMode ? (
          <>
            <EditProfile />
            <button onClick={() => setEditMode(false)}>X</button>
          </>
        ) : (
          <>
            <h2>{name}</h2>
            <h4>{email}</h4>
            <h5>edit profile </h5>
          </>
        )}
        <h4 onClick={() => setEditMode(true)}>Edit profile</h4>
      </Main>

      <NavigationMenu />
    </Body>
  );
};
