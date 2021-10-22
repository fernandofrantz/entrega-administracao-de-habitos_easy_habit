import styled from "styled-components";


export const AppTitle = styled.h1 ` 
font-size: 35px;
font-weight: 400;
text-shadow: 2px 2px 8px #52346a3d;
`

export const SectionCategories = styled.section`
  width: 100%;
  height: 80%;
  margin-top: 28px;
  border-radius: 15px;
  background-color: #ededed;
  overflow: auto;
  box-sizing: border-box;
  > div + div {
    margin-top: 16px;
  }
`;