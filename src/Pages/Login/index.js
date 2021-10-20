import { FormLogin } from "../../Components/FormLogin";
import { useHistory } from "react-router-dom";
import { useUser } from "../../Providers/User";
import { Link } from "react-router-dom";
import { LoginPageStyle, Tom } from "./Style";

export const Login = () => {
  const history = useHistory();
  const { auth, setAuth } = useUser();

  if (auth) {
    history.push("/");
  }

  return (
    <div>
      <LoginPageStyle>
        <div className="allLogin">
          <div>
            <FormLogin />
          </div>

          <div className="LinkBox">
            <span>Dont have an accout? </span>
            <Link to="/register" className="link">
              Sgnin up
            </Link>
          </div>
        </div>
      </LoginPageStyle>
    </div>
  );
};
