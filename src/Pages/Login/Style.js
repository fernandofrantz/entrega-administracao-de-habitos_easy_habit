import styled from "styled-components";
import imgCorrendoCasal from "../Login/imgCorrendoCasal.png";
export const LoginPageStyle = styled.div`
  background-image: url(${imgCorrendoCasal});

  @media only screen and (max-width: 767px) {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    align-contents: center;
    background-size: 450% 120%;
    background-position: top 92% right 57%;
    .LinkBox {
      border-radius: 3%;
      padding-bottom: 3%;
      padding-top: 3%;
      padding-left: 3%;
      width: 30%;
      margin-top: 5%;
      position: fixed;
      right: 0pt;
      background-color: #eaeaeacc;
      opacity: 0.6;
      span {
        font-size: 110%;
      }
      .link {
        font-size: 110%;
      }
    }

    .formLogin {
      border-radius: 0% 8% 8% 0%;
      padding-top: 10%;
      width: 150%;
      background: #eaeaeacc;
      opacity: 0.8;

      h1 {
        font-size: 6vh;
        margin: 3%;
        margin-left: 15%;
      }

      input {
        border: solid #bebebe;
        width: 70%;
        border-radius: 10%;
        height: 8vh;
        margin-top: 3%;
        margin-left: 15%;
      }
      button {
        width: 50%;
        height: 5vh;
        opacity: 0.8;
        margin: 5%;
        margin-left: 28%;
        border: solid C985FF 1px;
        border-radius: 15%;
      }
    }
  }

  @media only screen and (min-width: 768px) {
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    align-contents: center;
    background-size: 450% 120%;
    background-position: top 92% right 57%;
    .LinkBox {
      border-radius: 3%;
      padding-bottom: 3%;
      padding-top: 3%;
      padding-left: 3%;
      width: 30%;
      margin-top: 5%;
      position: fixed;
      right: 0pt;
      background-color: #eaeaeacc;
      opacity: 0.6;
      span {
        font-size: 110%;
      }
      .link {
        font-size: 110%;
      }
    }

    .formLogin {
      border-radius: 0% 8% 8% 0%;
      padding-top: 10%;
      width: 60vh;
      background: #eaeaeacc;
      opacity: 0.8;

      h1 {
        font-size: 6vh;
        margin: 3%;
        margin-left: 15%;
      }

      input {
        border: solid #bebebe;
        width: 80%;
        border-radius: 10%;
        height: 8vh;
        margin-top: 3%;
        margin-left: 10%;
      }
      button {
        width: 50%;
        height: 5vh;
        opacity: 0.8;
        margin: 5%;
        margin-left: 28%;
        border: solid C985FF 1px;
        border-radius: 15%;
      }
    }
  }
`;
