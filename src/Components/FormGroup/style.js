import styled from "styled-components";

export const FormPage = styled.div`
  position: absolute;
  top: 90px;
  height: 375px;
  width: 100%;
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

 main {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
form {
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
      font-family: sora , sans-serif;
      font-size: 12px;
      font-weight: 400;
    }
  }
`;

export const Form = styled.form`
  margin-right: 60px;
`;
