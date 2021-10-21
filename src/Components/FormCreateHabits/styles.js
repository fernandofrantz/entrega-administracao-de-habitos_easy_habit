import styled from "styled-components";

export const ContainerForm = styled.article`
  width: 270px;
  height: 375px;
  padding: 16px;
  border-radius: 15px;
  background-color: #ededed;
  position: absolute;
  z-index: 2;
  > h3 {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding-left: 10px;
  }
`;

export const InputHabits = styled.input`
  width: 200px;
  height: 35px;
  margin-top: 16px;
  border-radius: 5px;
  border: none;
  border-inline: 1.5px solid #bebebe;
  padding: 10px;

  font-size: 12px;
  font-weight: 400;
  color: black;
  ::placeholder {
    color: #8c8c8c;
  }
  box-sizing: border-box;
`;

export const CheckboxDiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100px;
    margin-bottom: 12px;

    > label {
      font-family: Sora, sans-serif;
      font-weight: 400;
      font-size: 12px;
    }
    > input {
      accent-color: rgb(148, 83, 200);
    }
  }
  > h3 {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 12px;
    padding-left: 10px;
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > svg {
    color: rgb(148, 83, 200);
    height: 14px;
    width: 14px;
    border: 1px solid rgba(148, 83, 200);
    border-radius: 10px;
    padding: 8px;
  }
`;
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
`;
