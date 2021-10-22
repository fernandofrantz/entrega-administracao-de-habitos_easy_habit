import { useUser } from "../../Providers/User";
import RegisterLots from "../../Components/formRegister";
import { useHistory } from "react-router";
import { StyleRegister } from "./style";
import { Link } from "react-router-dom";
import { AiOutlineLeft } from "react-icons/ai";


export const Register = () => {
  const history = useHistory();
  const { Login, auth, setAuth } = useUser();
  if (auth) {
    history.push("/");
  }

  return (
    <StyleRegister>
      <div className="finalBox">
        <div className="linkLogin">
          <div className="SetLogin">
            <Link to="/login">
              <AiOutlineLeft />
              <span>Back to login</span>
            </Link>
          </div>
        </div>
        <RegisterLots />
      </div>
    </StyleRegister>
  );
};
