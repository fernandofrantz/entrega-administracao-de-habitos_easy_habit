import styled from "styled-components";

export const Body = styled.article   ` 
width: 100vw;
height: 100vh;
box-sizing: border-box;
`

export const Main = styled.main ` 
width: 100%;
max-height: 100%;
padding: 2.1rem;
box-sizing: border-box;
`



export const Section = styled.section ` 
max-height: 100%;
width: 80vw;
margin: 0 auto;
padding-top: 1.7rem;
/* border-top: 1px solid black; */
`

export const SectionCategories = styled.section ` 
width: 100%;
min-height: 375px;
border-radius: 15px;
background-color: 
#EDEDED;
overflow: auto;

`

export const DivCategory = styled.div ` 
>h2{
    background-color: ${props=> props.backGroundColor};
    font-size: 12px;
    font-weight: 400;
    padding-left: 12px;
    text-align: left;

}
`