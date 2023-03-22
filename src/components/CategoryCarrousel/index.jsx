import React from "react";

import {Container, CategoryImg} from './styles'
import Category from '../../assets/category.png'

function CategoryCarrousel(){
    return(
        <Container>
            <CategoryImg src={Category} alt=""/>
        </Container>
    )
}

export default CategoryCarrousel