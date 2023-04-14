import styled from "styled-components";

export const Container = styled.div`
margin-top: 20px;
background: #FFFFFF;
box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
border-radius: 20px;
padding: 10px;
width: max-content;

`
export const Header = styled.div`
    display:grid;
    justify-items: center;
    grid-template-columns: repeat(6,150px);
    padding: 10px;
    border-bottom: 2px solid #B5B5B5;

    p{
        font-size: 16px;
        color:#B5B5B5;
     
    }
`

export const Body = styled.div`
    display:grid;
    grid-template-columns: repeat(6,150px);
    padding: 10px;
    width: max-content;
    justify-items: center;
    align-items: center;
    
    img{
        
        border-radius: 10px;
        width: 6em;
        

    }
    p{
        font-size: 16px;
        color:black;
       
    }

    .quantity-container{
        display: flex;
        gap:20px;

        button{
            background: transparent;
            border: none;
            font-size: 24px;
            cursor: pointer;
        }

        p{
            margin-top: 5px;
        }
    }


`

export const EmptyCart = styled.div `

    padding: 20px;
    text-align: center;
    font-weight: bold;

`