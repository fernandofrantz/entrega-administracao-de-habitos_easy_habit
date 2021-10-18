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
      <button
        onClick={() => {
          localStorage.setItem(
            "@EH",
            JSON.stringify(
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjM0OTM0OTc0LCJqdGkiOiIwMjQ5ZTBkNDcxNjk0OWQ1OGI5OTVhODk3YjEyZWRjOCIsInVzZXJfaWQiOjcyMH0.fHP3satJJJdRdwyibTHZelYcbx1-XGcSrnYbHQ-2LJo"
            )
          );
          setAuth(true);
          history.push("/");
        }}
      >
        Auth
      </button>
    </div>
  );
};
