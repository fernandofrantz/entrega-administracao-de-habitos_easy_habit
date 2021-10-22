import styled from "styled-components";

export const Container = styled.div`
min-width: 220px;
  width: 90%;
  max-width: 300px;
  height: 35px;
  background-color: #cecece;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 6px;
  > h2 {
    width: 122px;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 400;
    text-decoration-line: ${props => props.done};
  }
  @media only screen and (min-width: 768px) {
    height: 45px;
    margin: 10px;
    > h2 {
      font-size: 16px;
    }
  } 
`;


export const CategoryColor = styled.div`
  width: 20%;
  margin: 0px 10px 0px 0px;
  height: 35px;
  background-color: ${(props) => props.backGroundColor};
  border-radius: 5px 0 0 5px;

  @media only screen and (min-width: 768px) {
    height: 45px;
  }

`;

export const ButtonsBox = styled.div`
  width: 35%;
  display: flex;
  margin-right: 10px;

`;
