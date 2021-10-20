import { ColoredButton } from "./styles";

const HeaderButtons = ({ children, icon: Icon, backGroundColor }) => {
  return (
    <ColoredButton backGroundColor={backGroundColor} type="button">
      {children} {Icon && <Icon />}
    </ColoredButton>
  );
};

export default HeaderButtons;
