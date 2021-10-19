import { ColoredButton } from "./styles";


function HeaderButtons({children, icon, backGroundColor}){
    return (
        
        <ColoredButton>
        {children} {icon}
        </ColoredButton>
    )
}

export default HeaderButtons;