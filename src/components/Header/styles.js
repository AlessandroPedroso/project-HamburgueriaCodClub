import styled from "styled-components";

export const Container = styled.div`
    height: 72px;
    background: #FFFFFF;
    box-shadow: 2px 3px 5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content:space-around;
`

export const ContainerLeft = styled.div`
 display: flex;
 gap: 30px;
`

export const PageLink = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-weight:${props => (props.isActive? '700':'400')};
    font-size: 16px;
    line-height: 19px;
    color: ${props => (props.isActive? '#9758A6':'#555555')};
`

export const ContainerRight = styled.div`

    display: flex;
    align-items: center;
    gap:20px;
`
export const Line = styled.div`

    height:40px;
    border: 0.5px solid #BABABA;

`

export const ContainerText = styled.div`

    p{
        font-weight: 300;
        
        font-size: 14px;
        line-height: 16px;
    }

`

export const PageLinkExit = styled.div`

    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #9758A6;
    cursor: pointer;
`


