import styled from "styled-components";

export const Body = styled.article   ` 
width: 100vw;
height: 100vh;
box-sizing: border-box;



`

export const Header = styled.header `  
width: 100vw;
height: 5.5rem;
padding: 2.10rem 2.10rem 0;

`

export const Section = styled.section ` 
max-height: 100%;
width: 80vw;
overflow: auto;
margin: 0 auto;
padding-top: 1.7rem;
border-top: 1px solid black;
`

export const SectionCategories = styled.section ` 
width: 100%;
border-radius: 15px;
background-color: 
#EDEDED;

`

export const DivCategory = styled.div ` 
border-radius: 15px 15px 0 0;
>h2{
    background-color: ${props=> props.backGroundColor};
    font-size: 12px;
    font-weight: 400;
    padding-left: 12px;
    text-align: left;

}
`