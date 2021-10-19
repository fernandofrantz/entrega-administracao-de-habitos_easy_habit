import { FormLogin } from "../../Components/FormLogin";
import { useHistory } from "react-router-dom";
import { useUser } from "../../Providers/User";

export const Login = () => {
  const history = useHistory();
  const { auth, setAuth } = useUser();

  if (auth) {
    history.push("/");
  }

  return (
    <div>
      <FormLogin />
      Formulário de login
    </div>
  );
};
