import styled from "styled-components";
import imgCorrendoCasal from "../About/imgCorrendoCasal.png";

export const StyleAbout = styled.div`
    background: rgb(201, 133, 255);
  background: linear-gradient(
    180deg,
    rgba(201, 133, 255, 1) 0%,
    rgba(190, 197, 255, 1) 100%
  );

  width: 100vw;
  height: 100vh;
  display: flex;
  @media only screen and (max-width: 767px) {
    .Link {
      width: 36px;
      height: 36px;
      background-color: #eaeaea;
      position: fixed;
      right: 80%;
      top: 30pt;
      padding: 2vh;
      margin-left: 25vh;
      border-radius: 50%;
    }
    .pointText {
      h1 {
        margin: 10px 0px 10px 0px;
        font-size: 20px;
      }
      p {
        margin-left: 5px;
        font-size: 18px;
      }
      border-radius: 20px 0px 0px 20px;

      background-color: #eaeaea;
      opacity: 0.8;
      position: fixed;
      right: 0pt;
      top: 60pt;
      padding: 5vh;
      height: 80vh;
      width: 80%;
      font-style: sora;
    }
  }
  @media only screen and (min-width: 768px) {
    .Link {
      background-color: #eaeaea;
      position: fixed;
      right: 80%;
      top: 30pt;
      padding: 2vh;
      margin-left: 25vh;
      border-radius: 50%;
    }
    .pointText {
      h1 {
        margin: 10px 0px 10px 0px;
        font-size: 28px;
      }
      p {
        margin-left: 5px;
        font-size: 25px;
      }
      border-radius: 20px 0px 0px 20px;

      background-color: #eaeaea;
      opacity: 0.9;
      position: fixed;
      right: 0px;
      top: 250px;
      padding: 5vh;
      width: 80%;
    }
  }
`;
