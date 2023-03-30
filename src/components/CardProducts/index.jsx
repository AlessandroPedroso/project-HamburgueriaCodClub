import React from "react";
import {Button} from '../../components'
import {Container,Image,ProductName,ProductPrice} from './styles'
export const CardProducts = ({products}) =>{
    return (
        <Container>
            <Image src={products.url} alt="imagem do produto"/>
            <div>
            <ProductName>{products.name}</ProductName>
            <ProductPrice>{products.fotmatedCurrency}</ProductPrice>
            <Button>Adicionar</Button>
            </div>
        </Container>
    )
}
