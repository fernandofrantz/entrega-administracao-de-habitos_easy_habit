import { FormRegister } from "../../Components/formRegister";
import NavigationMenu from "../../Components/NavigationMenu";

export const Perfil = () => {
  return (
    <div>
      <h2>Perfil</h2>
      <FormRegister type={"edit"} />
      <NavigationMenu />
    </div>
  );
};
