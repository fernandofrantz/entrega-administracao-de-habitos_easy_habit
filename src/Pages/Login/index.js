import { FormLogin } from "../../Components/FormLogin";

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
