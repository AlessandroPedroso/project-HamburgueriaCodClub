import React,{useState,useEffect} from "react";
 
import {Container} from './styles'
import {Button} from '../Button'
import formatCurrency from '../../utils/formartCurrency'
import {useCart} from '../../hooks/CartContext'
import api from '../../services/api'
import { toast } from 'react-toastify';

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

    const submitOrder = async() =>{
        
        const order = cardProducts.map(product=>{
            return {id:product.id, quantity: product.quantity}
        })

        await toast.promise(api.post('orders',{products:order}),{
            pending: 'Realizando o seu pedido...',
            success: 'Pedido realizado com sucesso',
            error: 'Falha ao tentar realizar o seu pedido, tente novamente',
            
        })

        setTimeout(()=>{
            
            window.location.reload(true);
            localStorage.removeItem('codeburger:cartInfo');
        }, 1000);

    }



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
            <Button style={{width:"100%", marginTop:30}} onClick={submitOrder} >Finalizar pedido</Button>
        </div>
    )
}
