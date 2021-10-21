import styled from "styled-components";

export const FormPage = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .iconContainer {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  <<<<<<< HEAD main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  =======>>>>>>>31612addf175764343345e202379f0329a138657 form {
    background-color: #ededed;
    width: 100%;
    max-width: 270px;
    height: 373px;
    position: relative;
    border-radius: 15px;

    .inputContainer {
      margin-top: 25px;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 15px;
      input {
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
      }
    }
    .effect {
      width: 100%;
      height: 30px;
      background-color: #c986ff;
      border-radius: 15px 15px 0 0;
    }

    button {
      background-color: #c986ff;
      position: absolute;
      bottom: 15px;
      border: none;
      border-radius: 5px;
      height: 35px;
      width: 240px;
      left: 50%;
      transform: translate(-50%);
    }
  }
`;

export const Form = styled.form`
  margin-right: 60px;
`;
