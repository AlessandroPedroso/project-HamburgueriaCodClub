import React from "react";
import {RiDeleteBin6Fill} from 'react-icons/ri'
import {useCart} from '../../hooks/CartContext'
import {Container,Header,Body,EmptyCart} from './styles'
import formatCurrency from '../../utils/formartCurrency'
export const CartItems = () =>{
    const {cardProducts,increaseProducts,decreaseProducts,deleteProducts} = useCart()
    console.log(cardProducts)
    return (
        <Container>
            <Header>
            <p></p>
            <p>Itens</p>
            <p>Preço</p>
            <p>Quantidade</p>
            <p>Total</p>
            <p>Excluir do carrinho</p>
            </Header>
            {cardProducts && cardProducts.length > 0?
             cardProducts.map(produto => (
            <Body key={produto.id}>
                <img src={produto.url}/>
                <p>{produto.name}</p>
                <p>{formatCurrency(produto.price)}</p>
                <div className="quantity-container">
                    <button onClick={()=> decreaseProducts(produto.id)}>-</button>
                    <p>{produto.quantity}</p>
                    <button onClick={()=> increaseProducts(produto.id)}>+</button>
                </div>
                <p>{formatCurrency(produto.quantity * produto.price)}</p>
                <p><RiDeleteBin6Fill style={{cursor:"pointer"}} size={25} onClick={()=>confirm("Você deseja excluir o produto do carrinho ?") ? deleteProducts(produto.id):""}/></p>
            </Body>
            )):<EmptyCart>Carrinho vazio</EmptyCart>}
        </Container>
    )
}
