import React from "react";
import CartLogo from '../../assets/card-image.svg'
import {CartItems} from "../../components";

import {Container,CartImg} from './styles'

export const Cart = () =>{

    return (
        <Container>
            <CartImg src={CartLogo} alt="imagem da home" />
            <CartItems/>
        </Container>
    )
}
