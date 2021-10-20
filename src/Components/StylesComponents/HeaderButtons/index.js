import { ColoredButton } from "./styles";


function HeaderButtons({children, icon: Icon, backGroundColor}){
    return (
        
        <ColoredButton backGroundColor={backGroundColor}>
        {children} {Icon && <Icon/>}
        </ColoredButton>
    )
}

export default HeaderButtons;