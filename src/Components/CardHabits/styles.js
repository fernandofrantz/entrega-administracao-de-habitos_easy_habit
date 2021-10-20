import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 35px;
  background-color: #cecece;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  >h2{
    width: 122px;
    text-align: left;
      font-size: 0.8rem;
      font-weight: 400;
  }
`;

export const HabitBox = styled.div``;

export const CategoryColor = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${props=> props.backGroundColor};
  border-radius: 5px 0 0 5px;
  
`;

export const ButtonsBox = styled.div`
  width: 20%;
  display: flex;
`;
