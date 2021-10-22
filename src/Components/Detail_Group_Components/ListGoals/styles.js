import styled from "styled-components";

export const Section = styled.section`
  background-color: #e6eded;
  height: 100%;
`;

export const GoalTitle = styled.h2`
  text-align: left;
  background-color: #87c3d6;
  position: relative;
  padding: 8px;
  > svg {
    cursor: pointer;
  }
`;

export const ChangeList = styled.h4`
  padding: 3px 8px;
  background-color: #ef7070;
  font-size: 10px;
  font-weight: 300;
  box-sizing: border-box;
  height: 16px;
  > svg {
    margin-left: 5px;
    height: 18px;
    width: 18px;
  }
  display: flex;
  align-items: center;
  justify-content: flex-end;

  cursor: pointer;
`;
