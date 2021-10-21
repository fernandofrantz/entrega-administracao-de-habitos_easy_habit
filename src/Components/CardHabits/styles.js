import styled from "styled-components";

export const Container = styled.div`
  width: 90%;
  height: 35px;
  background-color: #cecece;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h2 {
    width: 122px;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 400;
  }
  @media only screen and (min-width: 375px) {
    height: 40px;
    width: 110%;
  }

  @media only screen and (min-width: 425px) {
    height: 45px;
    width: 120%;
  }

  @media only screen and (min-width: 768px) {
    height: 55px;
    width: 150%;
    margin-right: 10px;
    > h2 {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1024px) {
    height: 55px;
    width: 300%;
    > h2 {
      font-size: 18px;
    }
  }

  @media only screen and (min-width: 1440px) {
    height: 60px;
    width: 300%;
    > h2 {
      font-size: 18px;
    }
  }
`;

export const HabitBox = styled.div``;

export const CategoryColor = styled.div`
  width: 20%;
  margin: 0px 10px 0px 0px;
  height: 35px;
  background-color: ${(props) => props.backGroundColor};
  border-radius: 5px 0 0 5px;

  @media only screen and (min-width: 375px) {
    height: 40px;
    width: 25%;
  }

  @media only screen and (min-width: 425px) {
    height: 45px;
    width: 30%;
  }

  @media only screen and (min-width: 768px) {
    height: 55px;
    width: 40%;
  }

  @media only screen and (min-width: 1024px) {
    height: 55px;
    width: 20%;
  }

  @media only screen and (min-width: 1440px) {
    height: 60px;
    width: 20%;
  }
`;

export const ButtonsBox = styled.div`
  width: 35%;
  display: flex;
  margin-right: 10px;

  @media only screen and (min-width: 425px) {
    width: 40%;
  }
`;
