import styled from "styled-components";

export const FormPage = styled.div`
  width: 100%;
  
  background-color: #ededed;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;

  div.effect {
    display: flex;
    align-items: center;
    > div {
      display: flex;
      align-items: center;
    }
  }
  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const Form = styled.form`
  width: 100%;
  height: 373px;
  position: relative;
  border-radius: 15px;
  display: flex;
  flex-direction:column;
  align-items: center;

  > .effect {
    width: 100%;
    height: 30px;
    background-color: #c986ff;
    border-radius: 15px 15px 0 0;
    padding-left: 20px;
    
    >svg{
      height: 25px;
      width: 25px;
      color:#ededed;
    }
    >h3{
      display: flex;
    align-items: center;
    height: 100%;
    }
  }
  
  > .inputContainer {
    margin-top: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
  }


  > button {
    background-color: #c986ff;
    bottom: 15px;
    border: none;
    border-radius: 5px;
    height: 35px;
    width: 240px;
    font-family: sora, sans-serif;
    font-size: 12px;
    font-weight: 400;
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
