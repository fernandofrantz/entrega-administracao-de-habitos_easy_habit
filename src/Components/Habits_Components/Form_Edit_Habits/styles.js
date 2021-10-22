import styled from "styled-components";

export const ContainerEditForm = styled.article`
 width: 230px;
  height: 375px;
  padding: 16px;
  border-radius: 15px;
  background-color: #ededed;
  position: absolute;
  top:90px;
  z-index: 2;
  > h3 {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding-left: 10px;
  }
  
  box-shadow: 0px 90px 100px 100px #FFFFFF;

  @media only screen and (min-width: 768px){
 >h3{
   font-size: 16px; }
  }
`;

export const CheckboxDiv = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 90px;
    margin-bottom: 12px;

    > label {
      font-family: Sora, sans-serif;
      font-weight: 400;
      font-size: 12px;
    }
    > input {
      accent-color: rgb(148, 83, 200);
    }
  }
  > h3 {
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 12px;
    padding-left: 10px;
  }

  @media only screen and (min-width: 768px){
    flex-direction: column;
 >div{
  width: 150px;
   >label {
     font-size: 16px; }
    }
  }
  >h3 {
    font-size: 16px;
  }
`;

export const ButtonsDiv = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
`
