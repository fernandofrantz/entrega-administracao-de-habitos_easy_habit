import styled from "styled-components";

export const ContainerEditForm = styled.article`
  width: 270px;
  height: 375px;
  padding: 16px;
  border-radius: 15px;
  background-color: #ededed;
  position: absolute;
  top: 118px;
  left: 50vw;
  z-index: 2;
  transform: translatex(-50%);
  > h3 {
    font-size: 12px;
    font-weight: 400;
    text-align: left;
    padding-left: 10px;
  }
`;

export const CheckboxDiv = styled.div`
margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;
    margin-bottom: 12px;

    > label {
      font-family: Sora, sans-serif;
      font-weight: 400;
      font-size: 12px;
    }
    >input{
      accent-color: rgb(148, 83, 200);
    }
  }
`;

export const ButtonsDiv = styled.div `
display: flex;
justify-content: space-between;
align-items: center;
>svg{
  color: rgb(148,83,200);
    height: 14px;
    width: 14px;
    border: 1px solid rgba(148, 83, 200);
    border-radius: 10px;
    padding: 8px;
}
`
