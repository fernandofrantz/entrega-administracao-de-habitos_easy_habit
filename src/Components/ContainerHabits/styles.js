import styled from "styled-components";

export const CategoryBox = styled.div`
  width: 270px;
  >ul+ul{
      margin-top: 17px;
  }
`;

export const CategoryTitle = styled.h2`
  width: 100%;
  height: 30px;
  padding-left: 12px;
  border-radius: 15px 15px 0 0;
  background-color: ${(props) => props.backGroundColor};
  font-size: 0.75rem;
  line-height: 30px;

`;

export const HabitsByCategory = styled.ul`
  width: 270px;
  padding-top: 18px;
  display: flex;
  flex-direction: column;
  align-items: center;

  >li+li{
      margin-top:8px;
  }
  :nth-last-child(){
      margin-bottom: 17px;
  }
`;
