import styled from "styled-components";

export const SectionCategories = styled.section`
  width: 100%;
  height: 80%;
  border-radius: 15px;
  background-color: #ededed;
  overflow: auto;
  box-sizing: border-box;
  > div + div {
    margin-top: 16px;
  }
  display: flex;
    flex-direction: column;
    align-items: center;
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
