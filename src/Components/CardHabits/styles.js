import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  background-color: #cecece;
  border-radius: 5px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  >h2{
      font-size: 1.5rem;
      font-weight: lighter;
  }
`;

export const HabitBox = styled.div``;

export const CategoryBox = styled.div`
  width: 15%;
  background-color: #e88a8a;
  border-radius: 5px 0 0 5px;
  > h3 {
    font-size: 1.3rem;
    font-weight: 100;
  }
`;

export const buttonsBox = styled.div`
  width: 20%;
  display: flex;
`;
