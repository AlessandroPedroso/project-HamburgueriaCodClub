import React, { useEffect } from "react";
import CartLogo from '../../assets/card-image.svg'
import {CartItems,CartResume} from "../../components";

import {Container,CartImg,Wrapper} from './styles'

export const Cart = () =>{


    return (
        <Container>
            <CartImg src={CartLogo} alt="imagem da home" />
            <Wrapper>
                <CartItems/>
                <CartResume/>
            </Wrapper>
        </Container>
    )
}
