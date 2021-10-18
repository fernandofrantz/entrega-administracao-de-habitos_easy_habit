import { Link } from "react-router-dom";
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
