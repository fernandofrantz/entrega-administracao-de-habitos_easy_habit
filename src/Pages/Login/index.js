import { FormLogin } from "../../Components/FormLogin";
import { useUser } from "../../Providers/User";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const history = useHistory();
  const { auth, setAuth } = useUser();

  if(auth){
    history.push("/");
  }
  
  return (
    <div>
      <FormLogin />
    </div>
  );
};
