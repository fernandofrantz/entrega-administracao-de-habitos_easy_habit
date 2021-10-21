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
            <span>Don't have an accout? </span>
            <Link to="/register" className="link">
              Sign up
            </Link>
          </div>
        </div>
      </LoginPageStyle>
    </div>
  );
};
