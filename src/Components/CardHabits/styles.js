import styled from "styled-components";

export const Container = styled.div`
  height: 35px;
  width: 238px;
  background-color: #cecece;
  border-radius: 5px;
  padding-right: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h2 {
    width: 122px;
    padding-left: 12px;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 400;
  }
`;

export const CategoryColor = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${(props) => props.backGroundColor};
  border-radius: 5px 0 0 5px;
`;

export const ButtonsBox = styled.div`
  width: 20%;
  display: flex;
`;
