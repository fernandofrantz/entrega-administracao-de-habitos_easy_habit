import styled from "styled-components";
import habtRegister from "./habtRegister.jpeg";

export const StyleRegister = styled.div`
    background: rgb(201, 133, 255);
  background: linear-gradient(
    180deg,
    rgba(201, 133, 255, 1) 0%,
    rgba(190, 197, 255, 1) 100%
  );

  @media only screen and (min-width: 320px) {
    .linkLogin {
      display: inline-flex;
      position: fixed;
      left: 5%;
      top: 4%;
      span {
        font-size: 80%;
        text-decoration: none;
        font-family: sora;
      }
    }
    .SetLogin {
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
      }
    }
    height: 100vh;
    width: 100%;
    background-size: 100% 100%;
    .Register {
      input {
        border: 2px solid #c4c4c4;
        border-radius: 5px;
        height: 4.5vh;
        width: 80%;
        margin: 2vh;
        font-size: 10px;
        font-family: sora;
      }
      height: 60vh;
      padding-left: 1.5rem;
      background-color: #eaeaeacc;
      width: 60%;
      border-radius: 20px 0px 0px 20px;
      position: fixed;
      right: 0;
      top: 15%;
    }
    h3 {
      padding-top: 6vh;
      font-size: 1.7rem;
    }
    button {
      border-radius: 10px;
      border: solid 2px black;
      margin: 2vh;
      margin-left: 30%;
      padding: 5px 10px 5px 10px;
      background-color: #bcdfab;
      font-family: sora;
    }
  }

  @media only screen and (min-width: 768px) {
    .linkLogin {
      left: 6%;
      top: 5%;
      span {
        font-size: 100%;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    .Register {
      height: 60vh;
      padding-left: 6rem;
      background-color: #eaeaeacc;
      width: 60%;
      border-radius: 20px 0px 0px 20px;
      position: fixed;
      right: 0;
      top: 15%;
    input {
        border: 2px solid #c4c4c4;
        border-radius: 5px;
        height: 5vh;
        width: 70%;
        margin: 2vh;
        font-size: 15px;
        font-family: sora;
      }
    }
    h3 {
      padding: 7vh 0vh 0vh 2vh;
      font-size: 2rem;
    }
    button {
      border-radius: 10px;
      border: solid 2px black;
      margin: 1vh;
      margin-left: 25%;
      padding: 10px 30px 10px 30px;
      background-color: #bcdfab;
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1024px) {
    .Register {
      padding-left: 8rem;
    }
    .linkLogin {
      span {
        font-size: 20px;
      }
    }
  }

  @media only screen and (min-width: 1440px) {
    .Register {
      padding-left: 12rem;
      width: 55%;
      input {
      font-size: 23px;
      }
    }
    h3 {
      font-size: 45px;
    }

    button {
      width: 200px;
      height: 50px;
      font-size: 28px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: sora;
    }

    .linkLogin {
      span {
        font-size: 30px;
      }
    }


  }

}
`
