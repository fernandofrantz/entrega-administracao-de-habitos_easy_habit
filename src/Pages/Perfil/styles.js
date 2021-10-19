import styled from "styled-components";

export const Body = styled.article`
  height: 100vh;
  width: 100vw;
  /* background-image: ; */
  background-color: rgba(201, 133, 255, 0.2);
  box-sizing: border-box;
>h2{
    height: 2.1rem;
    font-weight: 400;
}
>h4{
 height: 1.75rem;
}

>h5{
    height: 1.2rem;
    font-weight: 400px;
    background-color: rgba(137, 163, 255, 1);

}

  >header{
      width: 100%;
      top:0;
      display: flex;
      align-items: center;
      padding:1.5rem 0 0 1.5rem;
      box-sizing: border-box;
      
      >h3{
          font-size: 0.8rem;
          font-weight: 400;
          cursor: pointer;
      }
  }
`;

export const LogoutCircle = styled.div`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
  background-color: rgba(196, 196, 196, 1);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.5rem;
`;


export const Main = styled.main ` 
/* margin: 7rem auto 0; */
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`