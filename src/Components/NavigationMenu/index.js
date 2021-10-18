import { Link } from "react-router-dom";
<<<<<<< HEAD
import {
  MdBookmarks,
  MdPublishedWithChanges,
  MdPeopleAlt,
  MdPerson,
} from "react-icons/md";
import { Container, MenuList } from "./styles";

export default function NavigationMenu() {
  return (
    <>
      <Container>
        <MenuList>
          <li>
            <Link to="/">
              <MdBookmarks />
            </Link>
          </li>
          <li>
            <Link to="/habit">
              <MdPublishedWithChanges />
            </Link>
          </li>
          <li>
            <Link to="/group">
              <MdPeopleAlt />
            </Link>
          </li>
          <li>
            <Link to="/perfil">
              <MdPerson />
            </Link>
          </li>
        </MenuList>
      </Container>
    </>
  );
}
=======
import { MdBookmarks, MdPublishedWithChanges, MdPeopleAlt, MdPerson } from "react-icons/md"
import { Container, MenuList } from "./styles";

export default function NavigationMenu(){

    return(
        <>
        <Container>
            <MenuList>
                <li><Link to="/"><MdBookmarks/></Link></li>
                <li><Link to="/habit"><MdPublishedWithChanges/></Link></li>
                <li><Link to="/group"><MdPeopleAlt/></Link></li>
                <li><Link to="/perfil"><MdPerson/></Link></li>
            </MenuList>
        </Container>
        </>
    )
}
>>>>>>> 96859fa11cb64152f39b0dd203ef48fa376a15eb
