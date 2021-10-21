import styled from "styled-components";

export const DetailsContainer = styled.section`
    height: 375px;
    width: 270px;
    background-color: #EDEDED;
    box-sizing: border-box;
    border-radius: 15px;
`

export const GroupTitle = styled.h2`
    font-size: 18px;
    font-weight: 400;
    border-radius: 15px 15px 0 0;
    background-color: ${(props) => props.backgroundColor};
    height: 30px;
    padding-left: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 16px;
`

export const ButtonSubs = styled.button`
    width: 120px;
    height: 30px;
    border-radius: 10px;
    background-color: ${props => props.backGroundColor};
    font-size: 0.75rem;
    font-weight: 400;
    border: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const DescriptionGroup = styled.p `
    overflow-wrap: break-word;
    max-height: 100px;
    padding: 16px;
    margin-bottom: 20px;
`