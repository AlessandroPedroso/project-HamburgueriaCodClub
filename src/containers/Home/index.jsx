import React from "react";
import HomeLogo from '../../assets/home-logo.svg'
import {CategoryCarrousel,Header,OffersCarrousel} from "../../components";

import {Container,Img} from './styles'

export const Home = () =>{

    return (
        <Container>
            <Header/>
            <Img src={HomeLogo} alt="imagem da home" />
            <CategoryCarrousel/>
            <OffersCarrousel/>
        </Container>
    )
}
