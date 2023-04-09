import styled from "styled-components";

export const Container = styled.div`
margin-top: 100px;
background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
padding: 10px;
width: max-content;
`
export const Header = styled.div`
    display:grid;
    justify-items: center;
    grid-template-columns: repeat(5,200px);
    padding: 10px;
    border-bottom: 2px solid #B5B5B5;

    p{
        font-size: 16px;
        color:#B5B5B5;
     
    }
`

export const Body = styled.div`
    display:grid;
    grid-template-columns: repeat(5,200px);
    padding: 10px;
    width: max-content;
    justify-items: center;
    align-items: center;
    
    img{
        
        border-radius: 10px;
        width: 8em;
        

    }
    p{
        font-size: 16px;
        color:black;
       
    }
`

export const EmptyCart = styled.div `

    padding: 20px;
    text-align: center;
    font-weight: bold;

`