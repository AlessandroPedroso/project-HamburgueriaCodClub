import React from "react";
import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarrousel from "../../components/CategoryCarrousel";
import OffersCarrousel from "../../components/OffersCarrousel";
import {Container,Img} from './styles'

const Home = () =>{

    return (
        <Container>
            <Img src={HomeLogo} alt="imagem da home" />
            <CategoryCarrousel/>
            <OffersCarrousel/>
        </Container>
    )
}

export default Home