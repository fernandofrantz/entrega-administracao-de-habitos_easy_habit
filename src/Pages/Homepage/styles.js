import styled from "styled-components";

export const Body = styled.article`
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
`;

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding: 2.1rem;
  box-sizing: border-box;
`;


export const AppTitle = styled.h1 ` 
font-size: 35px;
font-weight: 400;
text-shadow: 2px 2px 8px #52346a3d;
`

export const SectionCategories = styled.section`
  width: 100%;
  height: 375px;
  margin-top: 1.7rem;
  border-radius: 15px;
  background-color: #ededed;
  overflow: auto;
  box-sizing: border-box;
  > div + div {
    margin-top: 16px;
  }
`;