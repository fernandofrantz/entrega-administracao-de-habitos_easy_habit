import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    width: 8rem;
    margin: 1px;
    background: #ededed;
    border: 1.5px solid #bebebe;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
  button {
    width: 4rem;
    margin-top: 1px;
    background: linear-gradient(0deg, #bcdfab, #bcdfab), #bec5ff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    border-radius: 10px;
  }
`;
