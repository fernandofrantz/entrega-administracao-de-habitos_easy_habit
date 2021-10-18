import { FormLogin } from "../../Components/FormLogin";
import { useHistory } from "react-router-dom";
import { useUser } from "../../Providers/User";

export const Login = () => {
  const history = useHistory();
  const { Login, setAuth } = useUser();
  return (
    <div>
      <FormLogin />
      Formulário de login
      {/* <button
        onClick={() => {
          localStorage.setItem(
            "@EH",
            JSON.stringify(
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0OTk4NDQ5LCJqdGkiOiI4YzgwNjg5YzhiMTc0YTU2OTFlNTI3N2UxNzdjODAyOSIsInVzZXJfaWQiOjc0MH0.TSLFNSuo0DUcoXSrKfOxfcFJ2LMHatuRSOASCVIfIvs"
              
            )
          );
          setAuth(true);
          history.push("/");
        }}
      >
        Auth
      </button> */}
    </div>
  );
};
