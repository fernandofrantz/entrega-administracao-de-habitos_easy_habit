import styled from "styled-components";

export const ColoredButton = styled.button`
  width: 120px;
  height: 30px;
  border-radius: 10px;
  background-color: ${(props) => props.backGroundColor ? props.backGroundColor : '#cda2ef'};
  font-size: 0.75rem;
  font-weight: 400;
  border: none;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 45px;
    font-size: 17px;
  }
`;
