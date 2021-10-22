import styled from "styled-components";

export const FormPageActivity = styled.div`
  position: relative;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;

  .iconContainer {
    position: absolute;
    top: 15px;
    left: 15px;
  }
 
`;

export const Section = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 15px;
  .inputContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;

    > button {
      background-color: #ef7070;
      bottom: 15px;
      border: none;
      border-radius: 5px;
      height: 35px;
      width: 240px;
    }
  }

  >div.effect {
    width: 100%;
    height: 30px;
    background-color: #ef7070;
    border-radius: 15px 15px 0 0;
    display: flex;
    align-items: center;
    padding-left: 16px;
    >h2{width:fit-content}
  }
`;

export const Input = styled.input`
  width: 200px;
  border-radius: 5px;
  height: 35px;
  border: 1.5px solid #bebebe;
  padding-left: 15px;
  margin-bottom: 15px;
  &:focus::placeholder {
    color: transparent;
    transition: all 0.2s linear;
  }
`;
