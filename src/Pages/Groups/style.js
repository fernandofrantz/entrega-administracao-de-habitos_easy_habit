import styled from "styled-components";

export const UlStyled = styled.ul`
  width: 100%;
  margin: 0 auto;
  background-color: #ededed;
`;

export const InputSearch = styled.input`
  height: 30px;
  width: 150px;
  border-radius: 10px;
  border: none;
  padding-left: 15px;
  background-color: ${({ backGroundColor }) => backGroundColor};
`;

export const ContainerInput = styled.div`
  padding-left: 5px;
  position: relative;
  display: flex;
  align-items: center;
  height: fit-content;
  button {
    position: absolute;
    border-radius: 0 10px 10px 0;
    border: none;
    width: 40px;
    height: 100%;
    background-color: transparent;
    right: 0;
  }
`;
