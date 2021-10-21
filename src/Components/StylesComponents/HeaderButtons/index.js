import { ColoredButton } from "./styles";

const HeaderButtons = ({ children, icon: Icon, backGroundColor, buttonFunction, param}) => {
  return (
    <ColoredButton backGroundColor={backGroundColor} type="button" onClick={()=> buttonFunction(param)}>
      {children} {Icon && <Icon />}
    </ColoredButton>
  );
};

export default HeaderButtons;
