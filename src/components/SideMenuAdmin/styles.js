import styled from "styled-components";
import {Link} from "react-router-dom"

export const Container = styled.div`

    background:#3C3C3C;
    box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.15);
    width: 300px;
    top:0;
    left: 0;

    hr{
        margin: 91px 18px 0px;
    }

`
export const ItemContainer = styled.div`
    margin: 51px 7px 0px;
    padding-left: 18px;
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 15px 28px 15px 18px;
    background: ${props => (props.isActive? '#565656':'none')};

    &:hover{
        background: #565656;
    }

    .icon{
        color: white;
    }
`

export const ListLink = styled(Link)`

font-style: normal;
font-weight: 400;
font-size: 17px;
line-height: 19px;
color: #FFFFFF;
text-decoration: none;
`