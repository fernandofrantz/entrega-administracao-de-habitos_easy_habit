import styled from "styled-components";
import imgCorrendoCasal from "../About/imgCorrendoCasal.png";
export const StyleAbout = styled.div`
  background-image: url(${imgCorrendoCasal});
  background-size: 440% 120%;
  background-position: top 100% right 57%;

  width: 100%;
  height: 100vh;
  display: flex;
  @media only screen and (max-width: 767px) {
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
        margin: 2%;
      }
      border-radius: 8% 0% 0% 8%;

      background-color: #eaeaea;
      opacity: 0.5;
      position: fixed;
      right: 0pt;
      top: 60pt;
      padding: 5vh;
      heigth: 80vh;
      width: 80%;
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
        margin: 2%;
      }
      border-radius: 8% 0% 0% 8%;

      background-color: #eaeaea;
      opacity: 0.5;
      position: fixed;
      right: 0pt;
      top: 60pt;
      padding: 5vh;
      heigth: 80vh;
      width: 80%;
    }
  }
`;
