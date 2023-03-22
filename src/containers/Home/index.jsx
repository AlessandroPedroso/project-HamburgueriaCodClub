import React,{useEffect} from "react";
import HomeLogo from '../../assets/home-logo.svg'
import CategoryCarrousel from "../../components/CategoryCarrousel";
import api from '../../services/api'
import {Container,Img} from '../Home/styles'

const Home = () =>{

useEffect(()=>{

    async function loadCategories(){
        const response = await api.get('categories')
        console.log(response)
    }

    loadCategories()

},[])


    return (
        <Container>
            <Img src={HomeLogo} alt="imagem da home" />
            <CategoryCarrousel/>
        </Container>
    )
}

export default Home