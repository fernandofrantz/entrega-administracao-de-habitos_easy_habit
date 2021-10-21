import styled from "styled-components";

export const DetailsContainer = styled.section`
    height: 375px;
    width: 270px;
    background-color: #EDEDED;
    box-sizing: border-box;
    border-radius: 15px;
    margin-top: 12px;
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
    height: 50px;
    padding: 16px;
    margin-bottom: 20px;
    font-size: 12px;
    font-weight: 400;
`

export const ListDetails = styled.div`
    width: 100%;
    height: 250px;
    overflow: auto;
    background-color: gray;
    border-radius: 0 0 15px 15px;
    position: relative;
`

export const Container = styled.div`
  width: 250px;
  height: 35px;
  background-color: #cecece;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > h2 {
    width: 100%;
    text-align: left;
    font-size: 0.8rem;
    font-weight: 400;
    padding-left: 16px;
  }
`

export const ButtonChange = styled.button`
    position: absolute;
    top: 0;
` 