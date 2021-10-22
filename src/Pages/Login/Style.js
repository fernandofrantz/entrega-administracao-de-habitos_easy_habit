import styled from "styled-components";

export const LoginPageStyle = styled.div`
  background: rgb(201, 133, 255);
  background: linear-gradient(
    180deg,
    rgba(201, 133, 255, 1) 0%,
    rgba(190, 197, 255, 1) 100%
  );
  height: 100vh;
  width: 100vw;
  > .about {
    text-align: center;
    padding-bottom: 10px;
    > a {
      text-decoration: none;
      color: #551a8b;
      font-size: 16px;
    }
  }
  

  @media only screen and (min-width: 320px) {
    display: flex;
    align-items: center;
    align-contents: center;
    background-size: 450% 120%;
    background-position: top 92% right 57%;
    
    }

    .formLogin {
      border-radius: 0px 20px 20px 0px;
      padding-top: 10%;
      width: 150%;
      background: #eaeaeacc;

      h1 {
        font-size: 6vh;
        margin: 3%;
        margin-left: 15%;
      }

      input {
        border: solid #bebebe;
        width: 70%;
        border-radius: 10px;
        height: 6vh;
        margin-top: 3%;
        margin-left: 15%;
      }
      button {
        width: 50%;
        height: 5vh;
        margin: 12px;
        margin-left: 28%;
        /* border: solid C985FF 1px; */
        border-radius: 15px;
        background-color: #bcdfab;
      }
    }
  }

  
  @media only screen and (min-width: 768px) {
    .formLogin {
      width: 180%;
    }

    input {
      font-size: 20px;
      margin: 10px 0px 10px 0px;
    }

    button {
      border: solid black 2px;
      font-size: 20px;
    }
  }

  @media only screen and (min-width: 1440px) {
    .LinkBox {
      width: 50%;
      font-size: 35px;
    }

    .formLogin {
      width: 200%;
      font-family: sora;
      padding: 40px 0px 40px 0px;
    }

    input {
      font-size: 30px;
      font-family: sora;
      margin: 10px 0px 10px 0px;
    }

    button {
      font-family: sora;
      border: solid black 3px;
      font-size: 30px;
    }
  }
`;

export const CenteredDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LinkBox = styled.div `
border-radius: 10px 0px 0px 10px;
  padding-bottom: 3%;
  padding-top: 3%;
  padding-left: 3%;
  width: 80%;
  margin-top: 10%;
  position: fixed;
  right: 0;
  background-color: #eaeaeacc;
  >span {
    font-size: 95%;
    font-family: sora;
  }
  >.link {
    font-size: 95%;
    font-family: sora;
    text-decoration: none;
  }
  @media only screen and (min-width: 768px) {
      width: 50%;
      font-size: 22px;
    }
`
  