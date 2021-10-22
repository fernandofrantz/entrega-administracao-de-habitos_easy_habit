import styled from "styled-components";

export const Body = styled.article`
  height: 100vh;
  box-sizing: border-box;
`;

export const Main = styled.main`
  width: 100vw;
  height: 100vh;
  padding: 27px;
  padding-bottom: 3rem;
  box-sizing: border-box;
`;

export const Header = styled.header `  
width: 100%;
height: 45px;
border-bottom: 1px solid black;
display: flex;
justify-content: space-between;
@media only screen and (min-width: 768px) {
    height: 55px;
  }
`
export const BlackLine = styled.div `
width:100%;
height:1px;
box-shadow: 0px 4px 10px 0px #0000008A;
margin-bottom: 25px;
`

export const SectionContent = styled.section`
  width: 100%;
  height: 80%;
  margin-top: 28px;
  border-radius: 15px;
  background-color: #ededed;
  overflow: auto;
  box-sizing: border-box;
`;