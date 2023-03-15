import styled from "styled-components";
import BackgorundImage from '../../assets/background.svg'

export const Container = styled.div`

    height: calc(100vh + 200px);
    width: 100%;
    background: url('${BackgorundImage}');

    display: flex;
    justify-content: center;
    align-items: center;

`

export const RegisterImage = styled.img`

    height: 80%;

`

export const ContainerItens = styled.div`

    background: #373737;
    border-radius: 0px 10px 10px 0px;
    height: 80%;
    padding:25px 72px;
    display: flex;
    justify-content: center;
    flex-direction: column;

    form{
        display: flex;
        flex-direction: column;
    }

    h1{
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 28px;
        color: #FFFFFF;
        text-align: center;
        margin-top: 10px;
    }

`

export const Label = styled.p`

    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
    margin-top: ${props => (props.error ? '12px':'28px')};
    margin-bottom: 5px;

`

export const Input = styled.input`
    background: #FFFFFF;
    box-shadow: 3px 3px 10px rgba(74, 144, 226, 0.19);
    border-radius: 5px;
    height:38.32px;
    width: 391.42px;
    border:${props => (props.error ? '2px solid #CC1717':'none')};
`


export const SingnInLink = styled.p`
font-family: 'Roboto';
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 16px;

color: #FFFFFF;
    
a{
    text-decoration: underline;
    cursor: pointer;
}

`
export const Error = styled.p`

font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #CC1717;
margin-top: 5px;

`