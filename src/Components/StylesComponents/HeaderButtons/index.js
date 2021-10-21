import { ColoredButton } from "./styles";

const HeaderButtons = ({ children, icon: Icon, backGroundColor, buttonFunction, state}) => {
  return (
    <ColoredButton backGroundColor={backGroundColor} type="button" onClick={()=> buttonFunction(!state)}>
      {children} {Icon && <Icon />}
    </ColoredButton>
  );
};

export default HeaderButtons;
