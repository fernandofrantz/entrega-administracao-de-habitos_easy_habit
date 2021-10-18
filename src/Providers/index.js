import { GroupsProvider } from "./Groups"
import { UserProvider } from "./User"


const Providers = ({children}) =>{

    return(
        <UserProvider>
            <GroupsProvider>
                {children}
            </GroupsProvider>
        </UserProvider>
    )
}

export default Providers;