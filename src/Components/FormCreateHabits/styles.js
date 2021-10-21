import styled from "styled-components";

export const ContainerForm = styled.article`
  width: 270px;
  height: 375px;
  padding: 16px;
  border-radius: 15px;
  background-color: #ededed;
  position: absolute;
  z-index: 2;
  >h3{
      font-size: 12px;
      font-weight: 400;
      text-align: left;
      padding-left: 10px;
  }
  
`;

export const InputHabits = styled.input ` 
width: 200px;
height: 35px;
margin-top:16px;    
border-radius: 5px;
border: none;
border-inline: 1.5px solid #BEBEBE;
padding:10px;

font-size:12px;
font-weight: 400;
color: black;
::placeholder{
    color:#8C8C8C;
}
box-sizing: border-box;

`
