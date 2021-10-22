import styled from "styled-components";

export const CategoryBox = styled.div`
  width: 100%;
  > ul + ul {
    margin-top: 17px;
  }
  box-sizing: border-box;
`;

export const CategoryTitle = styled.h2`
  height: 30px;
  width: 100%;
  padding-left: 12px;
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => props.backGroundColor};
  font-size: 0.75rem;
  box-sizing: border-box;
  display: flex;
  align-items: center;

  @media only screen and (min-width: 768px) {
    height: 45px;
    margin-right: 10px;
    font-size: 16px;
  }
`;

export const HabitsByCategory = styled.ul`
  padding-bottom: 16px;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;

  > li {
    margin-top: 10px;
  }
  @media only screen and (min-width: 768px) {
    justify-content: flex-start;
  }
`;

export const TextForEmptyArray = styled.h2`
  cursor: pointer;
  text-align: center;
  margin-top: 18px;
  padding: 0 16px;
  font-size: 12px;
  font-weight: 400;
  color:#8900f5;
  &:hover{
    color: #52346a;
  }
  @media only screen and (min-width: 768px) {
  font-size: 16px;
  }
`;
