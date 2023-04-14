import React,{useState,useEffect} from "react";
 
import {Container} from './styles'
import {Button} from '../Button'
import formatCurrency from '../../utils/formartCurrency'
import {useCart} from '../../hooks/CartContext'

export const CartResume = () =>{
    const [finalPrice,setFinalPrice] = useState(0)
    const [deliveryTax] = useState(5)

    const {cardProducts} = useCart()

    useEffect(()=>{
        const sumAllItems = cardProducts.reduce((acc,current)=>{
            return current.price * current.quantity + acc
        },0)
        setFinalPrice(sumAllItems)
    },[cardProducts,deliveryTax])

    return (
        <div>
            <Container>
            <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatCurrency(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de entrega</p>
                    <p className="delivery-price">{formatCurrency(deliveryTax)}</p>
            </div>
            <div className="container-bottom">
                <p>Total</p>
                <p>{formatCurrency(finalPrice + deliveryTax)}</p>
            </div>
            </Container>
            <Button style={{width:"100%", marginTop:30}}>Finalizar pedido</Button>
        </div>
    )
}
