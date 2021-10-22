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
    margin-top:16px;
  }
  button {
    width: 120px;
    height: 30px;
    border-radius: 10px;
    background-color: #BEC5FF;
    font-size: 0.75rem;
    font-weight: 400;
    margin-top:16px;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
