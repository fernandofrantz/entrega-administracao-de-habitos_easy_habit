import styled from "styled-components";
export const CardStyled = styled.div`
  width: 200px;
  height: 200px;
  background-color: #c4c4c4;
  border-radius: 0 0 7px 7px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }

  .iconContainer {
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    margin-right: 15px;
  }

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const GroupName = styled.div`
  padding: 15px;
  background-color: ${({ color }) => color};
`;

export const TitleGroup = styled.h2`
  color: ${({ fontColor }) => fontColor};
`;
