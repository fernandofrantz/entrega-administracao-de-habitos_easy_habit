import { useUser } from "../../Providers/User";
import RegisterLots from "../../Components/FormRegister";
import { useHistory } from "react-router";

export const Register = () => {
  const history = useHistory();
  const { Login, auth, setAuth } = useUser();
  if (auth) {
    history.push("/");
  }

  return (
    <div>
      <RegisterLots />
    </div>
  );
};
