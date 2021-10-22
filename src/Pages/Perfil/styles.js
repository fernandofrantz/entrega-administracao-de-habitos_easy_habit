import styled from "styled-components";

export const Body = styled.article`
  height: 100vh;
  width: 100vw;
  /* background-image: ; */ 
  background-color: rgba(201, 133, 255, 0.2);
  
  box-sizing: border-box;

  > header {
    width: 100%;
    top: 0;
    display: flex;
    align-items: center;
    padding: 1.5rem 0 0 1.5rem;
    box-sizing: border-box;

    > h3 {
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

export const Main = styled.main`
  margin: 4rem auto 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  > figure {
    width: 11rem;
    height: 11rem;
    border-radius: 50%;
    background-color: rgba(196, 196, 196, 1);
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 1rem;

    > img {
      width: 70%;
    }
  }

  > h2 {
    margin-top: 0.6rem;
    height: 2.1rem;
    font-weight: 400;
  }
  > h4 {
    height: 1.75rem;
  }

  > h5 {
    height: 1.2rem;
    font-size: 0.6rem;
    font-weight: 400px;
    color: rgb(69 83 131);
    cursor: pointer;
  }

  > button {
    width: fit-content;
    height: fit-content;
    background: transparent;
    color: rgb(69 83 131);
    border: none;
    cursor: pointer;
    font-family: sora , sans-serif;
    font-size: 0.6rem;
    font-weight: 400;
    margin-top: 12px;
  }
`;
