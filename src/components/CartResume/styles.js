import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    background-color: white;
    padding: 10px;
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.03);
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 50px;

    .container-top{
        display: grid;
        grid-gap: 10px 50px;
        grid-template-areas: 
        'title title'
        'items items-price'
        'delivery-tax delivery-price';

            .title{
                grid-area: title;
                margin-bottom: 20px;
            }

            .items{
                grid-area: items;
            }

            .items-price{
                grid-area: items-price;
            }

            .delivery-tax{
                grid-area: delivery-tax;
            }

            .delivery-price{
                grid-area: delivery-price;
            }
    }

    .container-bottom{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 22px;
    }

  

`