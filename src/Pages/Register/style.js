import styled from "styled-components";
import habtRegister from "./habtRegister.jpeg";
export const StyleRegiter = styled.div`
  align-items: center;
  align-contents: center;
  display: flex;
  background-image: url(${habtRegister});

  @media only screen and (max-width: 767px) {
    .linkLogin {
      display: inline-flex;
      position: fixed;
      left: 5pt;
      top: 10%;
      span {
        margin-top: 0.2rem;
        font-size: 80%;
      }
    }
    .SetLogin {
      background-color: #c4c4c4;
      width: 1rem;
      heigth: 1.5rem;
      border-radius: 50%;
    }
    height: 100vh;
    width: 100%;
    display: flex;
    background-size: 100% 100%;
    background-position: top 92% right 57%;
    .Register {
      input {
        border: 2px solid #c888ff;
        border-radius: 5%;
        height: 6vh;
        width: 80%;
        margin: 2vh;
      }
      height: 80vh;
      padding-left: 1.5rem;
      background-color: #eaeaeacc;
      opacity: 0.6;
      width: 60%;
      border-radius: 10% 0% 0% 10%;
      position: fixed;
      right: 0pt;
      top: 15%;
    }
    h3 {
      padding-top: 5vh;
      font-size: 1.7rem;
    }
    button {
      border-radius: 15%;
      border: solid 1px #c888ff;
      height: 10vh;
      width: 40%;
      margin: 3vh;
      margin-left: 30%;
    }
  }
  @media only screen and (min-width: 768px) {
    height: 100vh;
    width: 100%;
    display: flex;
    background-size: 100% 100%;
    background-position: top 92% right 57%;
    .linkLogin {
      display: inline-flex;
      position: fixed;
      left: 100pt;
      top: 10%;
      span {
        margin-top: 1vh;
        font-size: 3vh;
      }
    }
    .SetLogin {
      padding: 0.7vh;
      background-color: #c4c4c4;
      width: 5vh;
      heigth: 10vh;
      border-radius: 50%;
    }
    .Register {
      input {
        border: 2px solid #c888ff;
        border-radius: 5%;
        height: 6vh;
        width: 80%;
        margin: 2%;
        margin-left: 5%;
      }
      height: 80vh;
      padding-left: 1.5rem;
      background-color: #eaeaeacc;
      opacity: 0.6;
      width: 60%;
      border-radius: 10% 0% 0% 10%;
      position: fixed;
      right: 0pt;
      top: 15%;
    }
    h3 {
      padding-top: 5vh;
      font-size: 1.7rem;
    }
    button {
      border-radius: 15%;
      border: solid 1px #c888ff;
      height: 10vh;
      width: 40%;
      margin: 3vh;
      margin-left: 30%;
      margin-top: 5vh;
    }
  }
`;
