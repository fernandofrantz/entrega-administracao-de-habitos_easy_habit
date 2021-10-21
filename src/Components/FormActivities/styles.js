import styled from "styled-components";


export const FormPageActivity = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .iconContainer {
    position: absolute;
    top: 15px;
    left: 15px;
  }

  section {
    background-color: #ededed;
    width: 100%;
    max-width: 300px;
    height: 500px;
    position: relative;
    border-radius: 15px;
    .inputContainer {
      margin-top: 90px;
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
      background-color: #ef7070;
      border-radius: 15px 15px 0 0;
    }

    button {
      background-color: #ef7070;
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