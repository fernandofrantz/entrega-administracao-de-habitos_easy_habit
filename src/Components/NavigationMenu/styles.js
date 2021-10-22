import styled from "styled-components";

export const Container = styled.footer`
  width: 100vw;
  height: 2.8rem;
  background-color: #e3e3e382;
  border-radius: 10px 10px 0 0;
  position: fixed;
  bottom: 0;
  left: 0;
`;

export const MenuList = styled.ul`
  margin: 0;
  padding: 0 12px;
  display: flex;
  justify-content: space-between;

  > li {
    margin: 0;
    padding: 0;
    font-size: 1.5rem;
    list-style: none;
    text-decoration: none;
    display: flex;
    align-items: flex-end;
    > a {
      text-decoration: none;
      color: #52346a;
      line-height: 3.5rem;
      &:hover {
        color: #b35ff7;
      }
    }
  }
`;
