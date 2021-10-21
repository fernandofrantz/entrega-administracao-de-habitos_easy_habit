import styled from "styled-components";

export const ColoredButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.backGroundColor};
  font-size: 0.75rem;
  font-weight: 400;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 1024px) {
    padding: 20px;
    font-size: 17px;
  }
`;
