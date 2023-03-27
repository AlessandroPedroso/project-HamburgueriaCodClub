import React from "react";
import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarrousel from "../../components/CategoryCarrousel";
import {Container,Img} from '../Home/styles'

const Home = () =>{

    return (
        <Container>
            <Img src={HomeLogo} alt="imagem da home" />
            <CategoryCarrousel/>
        </Container>
    )
}

export default Home