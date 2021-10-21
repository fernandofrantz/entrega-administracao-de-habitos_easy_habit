import { Link } from "react-router-dom";
import {
  MdBookmarks,
  MdPeopleAlt,
  MdPerson,
} from "react-icons/md";
import { AiFillHome } from "react-icons/ai";
import { Container, MenuList } from "./styles";

export default function NavigationMenu() {
  return (
    <>
      <Container>
        <MenuList>
          <li>
            <Link to="/">
              <AiFillHome/>
            </Link>
          </li>
          <li>
            <Link to="/habit">
              <MdBookmarks />
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
