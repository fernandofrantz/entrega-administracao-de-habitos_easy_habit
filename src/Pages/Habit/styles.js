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

export const SectionCategories = styled.section`
  margin-top: 1.7rem;
  width: 100%;
  height: 375px;
  border-radius: 15px;
  background-color: #ededed;
  overflow: auto;
  box-sizing: border-box;
  > div + div {
    margin-top: 16px;
  }
`;

export const DivCategory = styled.div`
  > h2 {
    background-color: ${(props) => props.backGroundColor};
    font-size: 12px;
    font-weight: 400;
    padding-left: 12px;
    text-align: left;
  }
`;

export const Section = styled.section`
  max-height: 100%;
  width: 80vw;
  margin: 0 auto;
  padding-top: 1.7rem;
`;
