import styled from "styled-components";
export const UlStyled = styled.ul`
  display: flex;
  flex-wrap: wrap;
  li {
    margin: 0 15px 15px 15px;
  }
`;

export const GroupCategory = styled.div`
  color: white;
  border-radius: 10px 10px 0 0;
  margin-top: 15px;
  height: 30px;
  display: flex;
  align-items: center;
  padding-left: 15px;
  background-color: ${({ color }) => color};
`;
