import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Container = styled.div`
    background-color: #E5E5E5;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 35px;
    padding: 35px 0;

    .rec.rec-arrow {
        background-color:#9758A6;
        color:#E5E5E5;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    .rec.rec-arrow:hover {
        border:2px solid #9758A6;
        background-color: #E5E5E5;
        color:#9758A6;

}

.rec.rec-arrow:disabled {
    border:none;
    background-color: #bebebf;
    color:#E5E5E5;
}
`

export const CategoryImg = styled.img`

`
export const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
`
export const Image = styled.img`
    width: 200px;
    border-radius: 10px;
`
export const Button = styled(Link)`
    margin-top: 16px;
    height: 50px;
    background: #9758A6;
    border-radius: 8px;
    color:white;
    font-weight: 700;
    font-size: 15px;
    border: none;
    cursor: pointer;

    &&:hover{
        opacity: 0.8;
    }

    &&:active{
        opacity:0.6;
    }

    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
`
