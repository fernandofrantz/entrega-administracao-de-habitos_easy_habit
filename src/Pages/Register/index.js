import { RegisterLots } from "../../Components/registro/Registers";
import { useUser } from "../../Providers/User";
import { useHistory } from "react-router-dom";

export const Register = () => {
  const { auth } = useUser();
  const history = useHistory();

  if (auth) {
    history.pushState("/");
  }

  return (
    <div>
      <RegisterLots />
    </div>
  );
};
