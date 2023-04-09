import React from "react";
import {useCart} from '../../hooks/CartContext'
import {Container,Header,Body,EmptyCart} from './styles'
import formatCurrency from '../../utils/formartCurrency'
export const CartItems = () =>{
    const {cardProducts} = useCart()
    console.log(cardProducts)
    return (
        <Container>
            <Header>
            <p></p>
            <p>Itens</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Total</p>
            </Header>
            {cardProducts && cardProducts.length > 0?
             cardProducts.map(produto => (
            <Body key={produto.id}>
                <img src={produto.url}/>
                <p>{produto.name}</p>
                <p>{formatCurrency(produto.price)}</p>
                <p>{produto.quantity}</p>
                <p>{formatCurrency(produto.quantity * produto.price)}</p>
            </Body>
            )):<EmptyCart>Carrinho vazio</EmptyCart>}
        </Container>
    )
}
