import { ColoredButton } from "./styles";

const HeaderButtons = ({
  children,
  icon: Icon,
  backGroundColor,
  buttonFunction,
  param,
  ...rest
}) => {
  return (
    <ColoredButton
      backGroundColor={backGroundColor}
      type="button"
      onClick={() => buttonFunction(param)}
      {...rest}
    >
      {children} {Icon && <Icon />}
    </ColoredButton>
  );
};

export default HeaderButtons;
