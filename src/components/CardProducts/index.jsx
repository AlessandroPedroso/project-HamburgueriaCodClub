import React from "react";
import {Button} from '../../components'
import {Container,Image,ProductName,ProductPrice} from './styles'
import { useCart } from "../../hooks/CartContext";
import {useHistory} from 'react-router-dom'

export const CardProducts = ({products}) =>{
    const {putProductsInCart} = useCart()
    const history = useHistory()
    return (
        <Container>
            <Image src={products.url} alt="imagem do produto"/>
            <div>
            <ProductName>{products.name}</ProductName>
            <ProductPrice>{products.fotmatedCurrency}</ProductPrice>
            <Button onClick={()=> {putProductsInCart(products), history.push('/carrinho')}}>Adicionar</Button>
            </div>
        </Container>
    )
}
